import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BulmaModal from './BulmaModal.js'

const modals = document.querySelectorAll("[data-toggle='modal']");
modals.forEach((modal) => new BulmaModal(modal));


createApp(App).use(store).use(router).mount('#app')
