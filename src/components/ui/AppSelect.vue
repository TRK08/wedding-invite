<template>
    <div class="select">
        <div class="select__selected" @click="toggle">
            <span v-if="!modelValue && placeholder" class="text-placeholder">{{ placeholder }}</span>
            <span>{{ modelValue }}</span>
            <ArrowDownIcon class="absolute right-2 size-4" />
        </div>

        <div class="select__options" v-show="isOpened">
            <div
                v-for="item in props.options"
                :key="item.id"
                class="select__option"
                :class="{
                    'select__option--active': item.name === modelValue, 
                    'select__option--disabled': item.name === modelValue
                }"
                @click="onSelect(item)"
            >
               {{ item.name }}
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import ArrowDownIcon from '@/assets/img/icons/arrow-down.svg?component'
import { ref } from 'vue'

type TProps = {
    modelValue: string
    options: Record<string, string | number>[]
    placeholder?: string
}

const props = defineProps<TProps>()
const emits = defineEmits(['update:modelValue'])

const isOpened = ref(false)

const toggle = () => {
    isOpened.value = !isOpened.value
}

const onSelect = (option: Record<string, string | number>) => {
    emits('update:modelValue', option.name)
    isOpened.value = false
}



</script>

<style lang="scss">
.select {
    @apply relative w-full bg-white;
   &__selected {
        @apply flex items-center justify-start relative w-full border-primary p-2 border outline-none h-10 cursor-pointer;
   }

   &__options {
        @apply absolute top-12 w-full flex flex-col border border-primary bg-white z-10;
   }

   &__option {
        @apply p-2 border-b-primary border-b transition-all duration-300 cursor-pointer;
        &:last-child {
            @apply border-0;
        }
        &:active, &:hover, &--active {
            @apply bg-primary text-white;
        }
        &--disabled {
            @apply pointer-events-none cursor-default;
        }
   }
}

</style>