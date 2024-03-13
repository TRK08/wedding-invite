<template>
    <div class="input">
        <input
            :type="type"
            :value="modelValue"
            :placeholder="name"
            @input="onInput($event.target as HTMLInputElement)"
        />
    </div>
</template>

<script setup lang="ts">

type TProps = {
    modelValue: string;
    name: string;
    type: string;
}

defineProps<TProps>()

const emits = defineEmits(['update:modelValue'])

const onInput = (target: HTMLInputElement) => {
    emits('update:modelValue', target.value)
}

</script>

<style lang="scss">
.input {
    @apply w-full;
    input {
        @apply flex items-center justify-start relative w-full border-primary p-2 border outline-none h-10 cursor-text rounded-none;
    }
}
</style>