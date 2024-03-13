<template>
    <div class="map">
        <h2 class="block-title mb-8">Адреса мероприятия</h2>
        <div class="overflow-hidden">
        <yandex-map
        v-model="map"
        :settings="{
        location: {
            center: [30.350765,59.938250],
            zoom: 12,
        },
        }"
        width="100%"
        height="250px"
    >
    <yandex-map-default-scheme-layer />
    <yandex-map-default-features-layer />

    <yandex-map-controls :settings="{ position: 'right' }">
        <yandex-map-zoom-control />
    </yandex-map-controls>

    <template v-for="(point) in points" :key="point.title">
        <yandex-map-default-marker :settings="point"></yandex-map-default-marker>
    </template>
  </yandex-map>
    </div>
    </div>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import type { YMap } from '@yandex/ymaps3-types'
import {
  YandexMap,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  YandexMapDefaultSchemeLayer,
  YandexMapZoomControl
} from 'vue-yandex-maps'

//Можно использовать для различных преобразований
const map = shallowRef<null | YMap>(null)

const points: any[] = [
    {
        coordinates: [30.364846,59.945303],
        title: 'ЗАГС №2',
        subtitle: 'Фурштатская улица, 52',
        color: '#596E67',
    },
    {
        coordinates: [ 30.337010 ,59.928474],
        title: 'Бар Сезоны',
        subtitle: 'наб. реки Фонтанки, 66',
        color: '#596E67',
    }
]
</script>

<style lang="scss">
.ymaps3x0--map-copyrights {
    display: none!important;
}

.ymaps3x0--default-marker__title-wrapper {
    background-color: theme('colors.primary') !important;
}

.ymaps3x0--default-marker__title,
 .ymaps3x0--default-marker__subtitle {
    color: theme('colors.white') !important;
}

</style>