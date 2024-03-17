<template>
    <div class="gifts bg-primary px-4 py-8" ref="giftsRef">
        <div class="container">
            <p class="text-center font-bad text-[20px] text-white">
                В качестве подарка будем благодарны за любой, даже символический, вклад в бюджет нашей молодой семьи. 
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onIntersect } from '@/composable/onIntersect'
import anime from 'animejs'
import { onMounted, ref } from 'vue'

const giftsRef = ref<null | HTMLDivElement>(null)

onMounted(() => {
    const showAnimation = anime({
        targets: giftsRef.value,
        autoplay: false,
        opacity: [0, 1],
        easing: 'linear',
        duration: 500,
    })
    console.log('showAnimation', 123)

    onIntersect(giftsRef.value as HTMLElement, showAnimation.play, {
        once: true,
        options: {
            treshhold: 0.2,
        },
    })
})

</script>

<style lang="scss">

</style>