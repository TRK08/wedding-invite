<template>
    <div class="answer-form p-4" ref="root">
        <h2 class="block-title mb-4">Форма для заполнения</h2>
        <iframe src="https://forms.yandex.ru/cloud/65f8577c84227c1e89492202/?iframe=1" frameborder="0" name="ya-form-65f6d951c417f30fec60e9bb" width="100%" height="100%"></iframe>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import AppInput from './ui/AppInput.vue'
import AppSelect from './ui/AppSelect.vue'
import AppButton from './ui/AppButton.vue'
import AppCheckbox from './ui/AppCheckbox.vue'
import { onIntersect } from '@/composable/onIntersect'
import anime, { type AnimeInstance } from 'animejs'


const alcoholList = [
    {
        id: 1,
        name: 'Белое вино',
    },
    {
        id: 2,
        name: 'Красное вино',
    },
    {
        id: 3,
        name: 'Виски',
    },
    {
        id: 4,
        name: 'Коньяк',
    },
    {
        id: 5,
        name: 'Безалкогольное',
    }
]
const transitions = {
    fade: {
    in: {
      opacity: [0, 1],
    },
    out: {
      opacity: [1, 0],
    },
  },
}

let hasEnteredOnce = false

const _ = {
    observer: {} as IntersectionObserver,
    motion: {} as AnimeInstance,
}

// const root = ref<HTMLElement | null>(null)

// const animeTransition = transitions['fade']['in']

// onMounted(() => {
//       // init our Observer instance
//       _.observer = onIntersect(root.value as HTMLElement, onEnter, {
//         outCallback: onExit,
//         once: false,
//         options: {
//           threshold: 0.2,
//         },
//       }) as IntersectionObserver

//       // init our anime object.
//       _.motion = anime({
//         targets: root.value,
//         // by default animejs will run the transition on load.
//         autoplay: false,
//         duration: 2500,
//         easing: 'easeOutExpo',
//         // here we spread in our custom transition properties
//         // based on the transition prop provided.
//         ...animeTransition,
//       })
//     })

// onUnmounted(() => {
//     _.observer.disconnect()
// })

// const onEnter = () => {
//     if (hasEnteredOnce) {
//     // clean up from the exit transition
//     _.motion.pause() // if the exit transition is currently running, pause it.
//     _.motion.reverse() // change the direction back to the original
//     }
//     _.motion.play() // run the transition

//     if (!hasEnteredOnce) {
//     // allow exit transitions to run.
//     hasEnteredOnce = true
//     }
// }

// const onExit = () => {
//     // keeps exit transition from running before the first entrance.
//     if (hasEnteredOnce) {
//         _.motion.pause() // if the enter transition is currently running, pause it.
//         _.motion.reverse() // change the direction of the transition
//         _.motion.play() // run the new reversed transition.
//     }
// }
</script>

<style lang="scss">

</style>