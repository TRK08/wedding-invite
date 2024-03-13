<template>
    <div class="timeline">
        <div class="container p-2">
            <h2 class="block-title">Таймлайн мероприятия</h2>
            <div class="timeline__wrap">
                <div ref="progress" class="timeline__progress"></div>
                <div class="timeline__item">
                    <HeartIcon class="timeline__icon" />
                    <div :ref="(el) => timelineItems.push(el)" class="timeline__card">
                        <span class="timeline__card-time">17:00</span>
                        <span class="timeline__card-text">Сбор всех желающих в загсе</span>
                    </div>
                </div>
                <div class="timeline__item">
                    <HeartIcon class="timeline__icon" />
                    <div :ref="(el) => timelineItems.push(el)" class="timeline__card">
                        <span class="timeline__card-time">17:00</span>
                        <span class="timeline__card-text">Сбор всех желающих в загсе</span>
                    </div>
                </div>
                <div class="timeline__item">
                    <HeartIcon class="timeline__icon" />
                    <div :ref="(el) => timelineItems.push(el)" class="timeline__card">
                        <span class="timeline__card-time">17:00</span>
                        <span class="timeline__card-text">Сбор всех желающих в загсе Сбор всех желающих в загсе Сбор всех желающих в загсе</span>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeartIcon from '@/assets/img/icons/heart.svg?component'
import { onMounted, ref } from 'vue'
import anime from 'animejs/lib/anime.es.js'

const progress = ref(null)
const timelineItems = ref<any[]>([])


onMounted(() => {
    anime({
        targets: progress.value,
        height: [0, 'calc(100% - 10px)'],
        easing: 'easeInOutQuad',
        duration: 2000,
    })

    anime({
        targets: timelineItems.value,
        translateX: [200, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 750,
        delay: anime.stagger(100),
    })
})

</script>

<style lang="scss">

.timeline {
    &__wrap {
        @apply relative flex flex-col gap-4 z-0 mb-10;
        
    }
    &__progress {
        @apply bg-primary absolute left-2.5 top-2.5 -z-[1] w-[2px];
    }
    &__item {
        @apply flex justify-around items-center gap-4;
        
    }
    &__icon {
        @apply w-6 h-6 stroke-primary fill-background stroke-2;
    }
    &__card {
        @apply bg-primary p-4 flex flex-col gap-2 text-white w-full;
    }
}
</style>