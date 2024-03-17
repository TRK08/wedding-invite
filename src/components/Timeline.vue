<template>
    <div class="timeline" ref="timelineRef">
        <div class="container p-2">
            <h2 class="block-title">Таймлайн мероприятия</h2>
            <div class="timeline__wrap">
                <div ref="progress" class="timeline__progress"></div>
                <template v-for="item in timelineItemsList" :key="item.time">
                    <div class="timeline__item">
                        <HeartIcon class="timeline__icon" />
                        <div :ref="(el) => timelineItemsRefs.push(el)" class="timeline__card">
                            <span class="timeline__card-time">{{ item.time }}</span>
                            <span class="timeline__card-text" v-html="item.text"></span>
                        </div>
                    </div>
                </template>            
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeartIcon from '@/assets/img/icons/heart.svg?component'
import { onMounted, ref } from 'vue'
import anime from 'animejs/lib/anime.es.js'

const progress = ref(null)
const timelineItemsRefs = ref<any[]>([])
const timelineRef = ref<null | HTMLDivElement>(null)

const timelineItemsList = [
    {
        time: '16:45',
        text: 'Сбор всех желающих в ЗАГСе <br/> ул. Фурштатская 52',
    }, 
    {
        time: '17:00',
        text: 'Регистрация брака',
    }, 
    {
        time: '18:00',
        text: 'Начало банкета <br/> наб. Фонтанки 66 (бар Сезоны)',
    }, 
    {
        time: '23:00',
        text: 'Завершение праздника',
    }
]


onMounted(() => {
    const lineAnimation = anime({
        targets: progress.value,
        height: [0, 'calc(100% - 10px)'],
        easing: 'easeInOutQuad',
        duration: 2000,
        delay: 1000,
        autoplay: false,
    })
    

    const blocksAnimation =  anime({
        targets: timelineItemsRefs.value,
        translateX: [200, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 750,
        delay: function(el, i) { return i * 150 },
        autoplay: false,
    })

    window.addEventListener('scroll', ()  => {
        lineAnimation.seek(window.scrollY * 2.95)
        blocksAnimation.seek(window.scrollY * 1.25)
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