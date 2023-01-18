<template>
  <ul
    v-if="items.length"
    class="vertical dropdown menu mention--box"
    :style="{ top: getTopPadding() + 'rem' }"
  >
    <li>
      <a class="close-icon" @click="$emit('close')">x</a>
    </li>
    <li
      v-for="(item, index) in items"
      :id="`mention-item-${index}`"
      :key="item.key"
      :class="{ active: index === selectedIndex }"
      @click="onListItemSelection(index)"
      @mouseover="onHover(index)"
    >
      <a class="text-truncate">
        <strong>{{ item.label }}</strong> - {{ item.description }}
      </a>
    </li>
  </ul>
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
      this.$el.scrollTop = 29 * this.selectedIndex;
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
  border-bottom: var(--space-small) solid var(--white);
  border-radius: var(--border-radius-normal);
  border-top: 1px solid var(--color-border);
  box-shadow: var(--shadow-medium);
  left: 0;
  max-height: 28rem;
  overflow: auto;
  padding-top: var(--space-small);
  position: absolute;
  width: 100%;
  z-index: 100;

  .active a {
    background: var(--w-500);
  }
}

.close-icon {
  position: absolute;
  right: 0;
  top: 0;
  height: 25px;
}
</style>
