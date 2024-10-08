<template>
  <div
    v-if="hasSecondaryMenu"
    class="h-full secondary-menu overflow-auto w-40 flex flex-col bg-white dark:bg-slate-900 border-r dark:border-slate-800/50 rtl:border-r-0 rtl:border-l border-slate-50 text-sm px-2 pb-8"
    :class="{ min: isContactSidebarItemOpen('is_secondary_menu_open') }"
  >
    <account-context
      v-if="!isContactSidebarItemOpen('is_secondary_menu_open')"
      @toggle-accounts="toggleAccountModal" />
    <transition-group
      v-if="!isContactSidebarItemOpen('is_secondary_menu_open')"
      name="menu-list"
      tag="ul"
      class="pt-2 list-none ml-0 mb-0"
    >
      <secondary-nav-item
        v-for="menuItem in accessibleMenuItems"
        :key="menuItem.toState"
        :menu-item="menuItem"
      />
      <secondary-nav-item
        v-for="menuItem in additionalSecondaryMenuItems[menuConfig.parentNav]"
        :key="menuItem.key"
        :menu-item="menuItem"
        @add-label="showAddLabelPopup"
      />
    </transition-group>

    <div class="sidebar-toggle__wrap">
      <woot-button
        variant="smooth"
        size="tiny"
        color-scheme="secondary"
        class="sidebar-toggle--button"
        :icon="isRightOrLeftIcon"
        @click="value => toggleSidebarUIState('is_secondary_menu_open', value)"
      />
    </div>
  </div>
</template>
<script>
import { frontendURL } from '../../../helper/URLHelper';
import SecondaryNavItem from './SecondaryNavItem.vue';
import AccountContext from './AccountContext.vue';
import { mapGetters } from 'vuex';
import { FEATURE_FLAGS } from '../../../featureFlags';
import uiSettingsMixin from 'dashboard/mixins/uiSettings';
import { hasPermissions } from '../../../helper/permissionsHelper';
import { routesWithPermissions } from '../../../routes';

export default {
  components: {
    AccountContext,
    SecondaryNavItem,
  },
  mixins: [uiSettingsMixin],
  props: {
    accountId: {
      type: Number,
      default: 0,
    },
    labels: {
      type: Array,
      default: () => [],
    },
    inboxes: {
      type: Array,
      default: () => [],
    },
    teams: {
      type: Array,
      default: () => [],
    },
    customViews: {
      type: Array,
      default: () => [],
    },
    menuConfig: {
      type: Object,
      default: () => {},
    },
    currentUser: {
      type: Object,
      default: () => {},
    },
    isOnChatwootCloud: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters({
      isFeatureEnabledonAccount: 'accounts/isFeatureEnabledonAccount',
    }),
    hasSecondaryMenu() {
      return this.menuConfig.menuItems && this.menuConfig.menuItems.length;
    },
    contactCustomViews() {
      return this.customViews.filter(view => view.filter_type === 'contact');
    },
    accessibleMenuItems() {
      const menuItemsFilteredByPermissions = this.menuConfig.menuItems.filter(
        menuItem => {
          const { permissions: userPermissions = [] } = this.currentUser;
          return hasPermissions(
            routesWithPermissions[menuItem.toStateName],
            userPermissions
          );
        }
      );
      return menuItemsFilteredByPermissions.filter(item => {
        if (item.showOnlyOnCloud) {
          return this.isOnChatwootCloud;
        }
        return true;
      });
    },
    inboxSection() {
      return {
        icon: 'folder',
        label: 'INBOXES',
        hasSubMenu: true,
        newLink: this.showNewLink(FEATURE_FLAGS.INBOX_MANAGEMENT),
        newLinkTag: 'NEW_INBOX',
        key: 'inbox',
        toState: frontendURL(`accounts/${this.accountId}/settings/inboxes/new`),
        toStateName: 'settings_inbox_new',
        newLinkRouteName: 'settings_inbox_new',
        children: this.inboxes
          .map(inbox => ({
            id: inbox.id,
            label: inbox.name,
            truncateLabel: true,
            toState: frontendURL(
              `accounts/${this.accountId}/inbox/${inbox.id}`
            ),
            type: inbox.channel_type,
            phoneNumber: inbox.phone_number,
            reauthorizationRequired: inbox.reauthorization_required,
          }))
          .sort((a, b) =>
            a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1
          ),
      };
    },
    labelSection() {
      return {
        icon: 'number-symbol',
        label: 'LABELS',
        hasSubMenu: true,
        newLink: this.showNewLink(FEATURE_FLAGS.TEAM_MANAGEMENT),
        newLinkTag: 'NEW_LABEL',
        key: 'label',
        toState: frontendURL(`accounts/${this.accountId}/settings/labels`),
        toStateName: 'labels_list',
        showModalForNewItem: true,
        modalName: 'AddLabel',
        dataTestid: 'sidebar-new-label-button',
        children: this.labels.map(label => ({
          id: label.id,
          label: label.title,
          color: label.color,
          truncateLabel: true,
          toState: frontendURL(
            `accounts/${this.accountId}/label/${label.title}`
          ),
        })),
      };
    },
    contactLabelSection() {
      return {
        icon: 'number-symbol',
        label: 'TAGGED_WITH',
        hasSubMenu: true,
        key: 'label',
        newLink: this.showNewLink(FEATURE_FLAGS.TEAM_MANAGEMENT),
        newLinkTag: 'NEW_LABEL',
        toState: frontendURL(`accounts/${this.accountId}/settings/labels`),
        toStateName: 'labels_list',
        showModalForNewItem: true,
        modalName: 'AddLabel',
        children: this.labels.map(label => ({
          id: label.id,
          label: label.title,
          color: label.color,
          truncateLabel: true,
          toState: frontendURL(
            `accounts/${this.accountId}/labels/${label.title}/contacts`
          ),
        })),
      };
    },
    teamSection() {
      return {
        icon: 'people-team',
        label: 'TEAMS',
        hasSubMenu: true,
        newLink: this.showNewLink(FEATURE_FLAGS.TEAM_MANAGEMENT),
        newLinkTag: 'NEW_TEAM',
        key: 'team',
        toState: frontendURL(`accounts/${this.accountId}/settings/teams/new`),
        toStateName: 'settings_teams_new',
        newLinkRouteName: 'settings_teams_new',
        children: this.teams.map(team => ({
          id: team.id,
          label: team.name,
          truncateLabel: true,
          toState: frontendURL(`accounts/${this.accountId}/team/${team.id}`),
        })),
      };
    },
    foldersSection() {
      return {
        icon: 'folder',
        label: 'CUSTOM_VIEWS_FOLDER',
        hasSubMenu: true,
        key: 'custom_view',
        children: this.customViews
          .filter(view => view.filter_type === 'conversation')
          .map(view => ({
            id: view.id,
            label: view.name,
            truncateLabel: true,
            toState: frontendURL(
              `accounts/${this.accountId}/custom_view/${view.id}`
            ),
          })),
      };
    },
    contactSegmentsSection() {
      return {
        icon: 'folder',
        label: 'CUSTOM_VIEWS_SEGMENTS',
        hasSubMenu: true,
        key: 'custom_view',
        children: this.customViews
          .filter(view => view.filter_type === 'contact')
          .map(view => ({
            id: view.id,
            label: view.name,
            truncateLabel: true,
            toState: frontendURL(
              `accounts/${this.accountId}/contacts/custom_view/${view.id}`
            ),
          })),
      };
    },
    additionalSecondaryMenuItems() {
      let conversationMenuItems = [this.inboxSection, this.labelSection];
      let contactMenuItems = [this.contactLabelSection];
      if (this.teams.length) {
        conversationMenuItems = [this.teamSection, ...conversationMenuItems];
      }
      if (this.customViews.length) {
        conversationMenuItems = [this.foldersSection, ...conversationMenuItems];
      }
      if (this.contactCustomViews.length) {
        contactMenuItems = [this.contactSegmentsSection, ...contactMenuItems];
      }
      return {
        conversations: conversationMenuItems,
        contacts: contactMenuItems,
      };
    },
    isRightOrLeftIcon() {
      if (this.isContactSidebarItemOpen('is_secondary_menu_open')) {
        return 'arrow-chevron-right';
      }
      return 'arrow-chevron-left';
    },
  },
  methods: {
    showAddLabelPopup() {
      this.$emit('add-label');
    },
    toggleAccountModal() {
      this.$emit('toggle-accounts');
    },
    showNewLink(featureFlag) {
      return this.isFeatureEnabledonAccount(this.accountId, featureFlag);
    },
  },
};
</script>
<style lang="scss" scoped>
.secondary-menu {
  &.min {
    width: 1rem;
  }
}


.sidebar-toggle__wrap {
  display: flex;
  justify-content: flex-end;

  .sidebar-toggle--button {
    position: fixed;

    bottom: var(--space-mega);
    z-index: var(--z-index-low);

    background: var(--white);

    border-top-left-radius: calc(
      var(--space-medium) + 1px
    ); /* 100px of height + 10px of border */
    border-bottom-left-radius: calc(
      var(--space-medium) + 1px
    ); /* 100px of height + 10px of border */
    border: 1px solid var(--color-border-light);
    border-right: 0;
    box-sizing: border-box;
  }
}
</style>
