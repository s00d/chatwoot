<template>
  <div v-if="items.length" ref="mentionsListContainer" class="mention--box">
    <ul class="vertical dropdown menu">
      <li>
        <a class="close-icon" @click="$emit('close')">x</a>
      </li>
      <woot-dropdown-item
        v-for="(item, index) in items"
        :id="`mention-item-${index}`"
        :key="item.key"
        @mouseover="onHover(index)"
      >
        <woot-button
          class="canned-item__button"
          :variant="index === selectedIndex ? '' : 'clear'"
          :class="{ active: index === selectedIndex }"
          @click="onListItemSelection(index)"
        >
          <strong>{{ item.label }}</strong> - {{ item.description }}
        </woot-button>
      </woot-dropdown-item>
    </ul>
  </div>
</template>

<script>
import mentionSelectionKeyboardMixin from './mentionSelectionKeyboardMixin';
export default {
  mixins: [mentionSelectionKeyboardMixin],
  props: {
    items: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      selectedIndex: 0,
    };
  },
  watch: {
    items(newItems) {
      if (newItems.length < this.selectedIndex + 1) {
        this.selectedIndex = 0;
      }
    },
    selectedIndex() {
      const container = this.$refs.mentionsListContainer;
      const item = container.querySelector(
        `#mention-item-${this.selectedIndex}`
      );
      if (item) {
        const itemTop = item.offsetTop;
        const itemBottom = itemTop + item.offsetHeight;
        const containerTop = container.scrollTop;
        const containerBottom = containerTop + container.offsetHeight;
        if (itemTop < containerTop) {
          container.scrollTop = itemTop;
        } else if (itemBottom + 34 > containerBottom) {
          container.scrollTop = itemBottom - container.offsetHeight + 34;
        }
      }
    },
  },
  methods: {
    getTopPadding() {
      if (this.items.length <= 9) {
        return -(this.items.length * 2.9 + 1.7);
      }
      return -28;
    },
    handleKeyboardEvent(e) {
      this.processKeyDownEvent(e);
    },
    onHover(index) {
      this.selectedIndex = index;
    },
    onListItemSelection(index) {
      this.selectedIndex = index;
      this.onSelect();
    },
    onSelect() {
      this.$emit('mention-select', this.items[this.selectedIndex]);
    },
  },
};
</script>

<style scoped lang="scss">
.mention--box {
  background: var(--white);
  border-radius: var(--border-radius-normal);
  border-top: 1px solid var(--color-border);
  box-shadow: var(--shadow-medium);
  left: 0;
  bottom: 100%;
  max-height: 28rem;
  overflow: auto;
  padding: var(--space-small) var(--space-small) 0;
  position: absolute;
  width: 100%;
  z-index: 100;

  .dropdown-menu__item:last-child {
    padding-bottom: var(--space-smaller);
  }

  .active {
    color: var(--white);

    &:hover {
      color: var(--w-700);
    }
  }

  .button {
    transition: none;
    height: var(--space-medium);
    line-height: 1.2;
    font-size: 12px;
  }
}

.canned-item__button::v-deep .button__content {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.close-icon {
  position: absolute;
  right: 0;
  top: 0;
  height: 25px;
}
</style>
