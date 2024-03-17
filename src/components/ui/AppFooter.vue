<template>
    <footer class="footer">
        <h2 class="font-bad text-3xl text-white">
            Разработано Романом
        </h2>
        <a href="https://github.com/TRK08" target="_blank">
            <GithubIcon class="footer__github-icon" />
        </a>
    </footer>
</template>

<script setup lang="ts">
import GithubIcon from '@/assets/img/icons/github-mark.svg?component'
</script>

<style lang="scss">
.footer {
    @apply bg-primary p-10 flex items-center gap-4 justify-center;
    &__github-icon {
        @apply fill-white w-10 h-10;
    }
}
</style>