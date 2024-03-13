<template>
  <div class="relative overflow-hidden">
    <Transition name="fade">
      <div v-show="!isMounted" class="preloader">
        <HeartIcon class="preloader__icon"  />
      </div>  
    </Transition>

    <div class="mx-auto my-0 flex min-h-svh max-w-[500px] flex-col gap-4">
      <MainBlock />
      <InvitationText />
      <Timer />
      <Dresscode />
      <Timeline />
      <AnswerForm />
      <Map />
  </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import AnswerForm from './components/AnswerForm.vue'
import Dresscode from './components/Dresscode.vue'
import InvitationText from './components/InvitationText.vue'
import MainBlock from './components/MainBlock.vue'
import Map from './components/Map.vue'
import Timeline from './components/Timeline.vue'
import Timer from './components/Timer.vue'
import HeartIcon from '@/assets/img/icons/heart.svg?component'

const isMounted = ref(false)

watch(isMounted, (val) => {
  if(!val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}, {immediate: true,})

onMounted(() => {
    setTimeout(() => {
      isMounted.value = true
    }, 1500)
})

</script>

<style lang="scss">
.preloader {
  @apply fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-primary;
  &__icon {
    @apply w-20 h-20;
    path {
      fill: none;
      stroke: theme('colors.white');
      stroke-dasharray: 100;
      stroke-dashoffset: 500;
      animation: dash 5s linear infinite;
    }
  }
}

@keyframes dash {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 500;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>