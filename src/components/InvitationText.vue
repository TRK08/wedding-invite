<template>
  <div class="invitation-text overflow-hidden">
    <div class="container p-2">
    <h2 class="block-title">Дорогой наш друг !</h2>
    <p class="text-center text-[14px]">
      Вот уже совсем скоро наступит этот волшебный день, Праздник Настоящей Любви - Наша Свадьба! <br/> Нам
      будет очень приятно видеть вас среди наших гостей, пришедших разделить с нами самое счастливое
      событие в нашей жизни - день рождения семьи! Надеемся, что романтика и радость этого дня
      останутся в вашей памяти, а пожелания и улыбки будут всегда жить в наших сердцах!
    </p>
  </div>
  </div>
</template>

<script setup lang="ts">
import anime from 'animejs'
import { onMounted } from 'vue'

onMounted(() => {
  anime({
    targets: '.invitation-text h2',
    opacity: [0, 1],
    easing: 'linear',
    duration: 750,
    delay: 1500,
  })

  anime({
    targets: '.invitation-text p',
    opacity: [0, 1],
    translateY: [100, 0],
    easing: 'easeInSine',
    duration: 800,
    delay: 1500,
  })
})
</script>


<style lang="scss"></style>
