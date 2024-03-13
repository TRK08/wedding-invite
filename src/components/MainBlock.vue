<template>
    <div class="main-block">
      <div class="container p-2">
        <div class="relative overflow-hidden">
          <img src="@/assets/img/main_photo.jpg" alt="Наше фото">
          <div class="main-block__info">
            <span class="text-2xl text-white">27. 05. 24</span>
            <span class="block p-2 font-bad text-4xl text-white">Роман и Анна</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.main-block {
  &__info {
    @apply w-full py-4 h-40 backdrop-blur bg-primary bg-opacity-30 text-center absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center;
  }
}

</style>