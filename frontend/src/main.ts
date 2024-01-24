/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHandFist, faDeleteLeft, faCheck, faFeather, faList } from '@fortawesome/free-solid-svg-icons'

library.add(faHandFist, faDeleteLeft, faCheck, faFeather, faList)

const app = createApp(App)

registerPlugins(app)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
