import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { createYmaps } from 'vue-yandex-maps'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'


const app = createApp(App)

app.use(createYmaps({
    apikey: 'e422ee4c-d64b-4823-81cd-e3460e50f7d4',
  }))

  app.use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth()
    ],
  })

app.mount('#app')