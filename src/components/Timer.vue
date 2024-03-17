<template>
    <div class="timer p-2">
        <div class="container bg-primary px-4 py-10">
            <h2 class="block-title text-white">До свадьбы осталось</h2>
            <h3 class="text-center text-4xl text-white">
                <template v-if="Number(days) > 0">
                    {{ days }} :
                </template>
                {{ hrs }} : {{ mins }} : {{ secs }}</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getNoun } from '@/utils/utils'
import { onBeforeMount, ref } from 'vue'

const secs = ref('0')
const mins = ref('0')
const hrs = ref('0')
const days = ref('0')
const isReady = ref(false)
const eventDateTimeStamp = ref(new Date(2024, 3, 27, 17, 0, 0, 0).getTime())


const startTimer = () => {
    setInterval(() => {
        const diff =  Math.floor( Math.abs( Date.now() - eventDateTimeStamp.value ) / 1000 )

        days.value = formatTime(Math.floor(diff / (60 * 60 * 24)))
        hrs.value =  formatTime(Math.floor( (diff % (60 * 60 * 24)) / (60 * 60) ))
        mins.value = formatTime(Math.floor( (diff % (60 * 60)) / 60 ))
        secs.value = formatTime(Math.floor( diff % 60 ))
        isReady.value = true
    }, 1000)
}

const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : `${time}`
}

onBeforeMount(() => {
    startTimer()
})

</script>

<style lang="scss">

</style>