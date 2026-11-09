<script setup>
// OnlineSIM: no "Powered by" link in the widget and the CSAT survey (as in the 3.11 fork),
// only the bottom spacing stays. The prop is kept so the callers need no changes.
defineProps({
  // eslint-disable-next-line vue/no-unused-properties
  disableBranding: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="p-3" />
</template>
