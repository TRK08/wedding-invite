<template>
  <button @click="click">
    <slot />
  </button>
</template>

<script setup lang="ts">
const emits = defineEmits(['click'])

const click = () => {
  emits('click')
}
</script>

<style lang="scss">
button {
  @apply bg-primary text-white h-10 flex items-center justify-center w-full;
}
</style>
