<template>
  <label class="checkbox">
    <span class="checkbox__mark">
        <HeartIcon v-show="isChecked" />
      </span>
      <input v-model="isChecked" class="checkbox__input" type="checkbox" />
      <span class="checkbox__label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import HeartIcon from '@/assets/img/icons/heart.svg?component'

type TProps = {
  label: string
  modelValue: boolean
}

const props = defineProps<TProps>()
const emits = defineEmits(['update:modelValue'])

const isChecked = computed({
    get: () => {
        return props.modelValue
    },
    set: (value) => {
        emits('update:modelValue', value)
    },
})


</script>

<style lang="scss">
.checkbox {
  @apply relative flex items-center gap-2 cursor-pointer;
  &__input {
    @apply absolute w-0 h-0 opacity-0;
  }

  &__mark {
    @apply  h-5 w-5 border border-primary;
    &--checked {
      @apply border-0 bg-primary
    }
    svg {
        @apply fill-primary
    }
  }

  &__label {
    @apply relative;
  }
}
</style>
