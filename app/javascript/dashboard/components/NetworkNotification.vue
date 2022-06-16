<template>
  <transition name="network-notification-fade" tag="div">
    <div v-show="showNotification" class="ui-notification-container">
      <div class="ui-notification">
        <fluent-icon icon="wifi-off" />
        <p class="ui-notification-text">
          {{
            useInstallationName(
              $t('NETWORK.NOTIFICATION.TEXT'),
              globalConfig.installationName
            )
          }}
        </p>
        {{ ' ' + timeout }}...
        <woot-button variant="clear" size="small" @click="refreshPage">
          {{ $t('NETWORK.BUTTON.REFRESH') }}
        </woot-button>
        <woot-button
          variant="smooth"
          size="small"
          color-scheme="warning"
          icon="dismiss-circle"
          @click="closeNotification"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import globalConfigMixin from 'shared/mixins/globalConfigMixin';
import { mapGetters } from 'vuex';
import { BUS_EVENTS } from 'shared/constants/busEvents';

export default {
  mixins: [globalConfigMixin],

  data() {
    return {
      showNotification: !navigator.onLine,
      timeout: 0,
      timer: null,
    };
  },

  computed: {
    ...mapGetters({ globalConfig: 'globalConfig/get' }),
  },
  watch: {
    showNotification(val) {
      if (!val) {
        if (this.timer) clearInterval(this.timer);
        this.timer = null;
        return;
      }
      this.timeout = 10;
      this.timer = setInterval(() => {
        this.timeout -= 1;
        if (this.timeout <= 0) {
          if (this.timer) clearInterval(this.timer);
          this.timer = null;
          window.location.reload();
        }
      }, 1000);
    },
  },
  mounted() {
    window.addEventListener('offline', this.updateOnlineStatus);
    window.bus.$on(BUS_EVENTS.WEBSOCKET_DISCONNECT, () => {
      this.updateOnlineStatus({ type: 'offline' });
    });
  },

  beforeDestroy() {
    window.removeEventListener('offline', this.updateOnlineStatus);
  },

  methods: {
    refreshPage() {
      window.location.reload();
    },

    closeNotification() {
      this.showNotification = false;
    },

    updateOnlineStatus(event) {
      if (event.type === 'offline') {
        this.showNotification = true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '~dashboard/assets/scss/mixins';

.ui-notification-container {
  max-width: 40rem;
  position: absolute;
  right: var(--space-normal);
  top: var(--space-normal);
  z-index: var(--z-index-very-high);
}

.ui-notification {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  background-color: var(--y-100);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow-large);

  min-width: 24rem;
  padding: var(--space-normal);
}

.ui-notification-text {
  margin: 0 var(--space-small);
}
</style>
