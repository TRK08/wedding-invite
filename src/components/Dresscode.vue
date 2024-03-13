<template>
    <div class="dresscode">
        <div class="container p-2">
            <h2 class="block-title">Палитра цветов</h2>
            <div class="flex gap-4">
                <span 
                    v-for="color in colors" 
                    :key="color" 
                    :style="`background-color: ${color};`"
                    class="block h-10 w-full"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const colors = ['red', 'blue', 'green', 'yellow']

</script>

<style lang="scss">

</style>