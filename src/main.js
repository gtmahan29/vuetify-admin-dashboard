import './assets/scss/main.scss';
import App from './App.vue';
import { createApp } from 'vue';
import { registerPlugins } from '@/plugins';
import VueApexCharts from "vue3-apexcharts";
import { createPinia } from 'pinia';
import helpers from './plugins/helpers';
import globalMixin from './plugins/globalMixin';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faTableColumns, faComments, faPenToSquare as fasPenToSquare, faUserGroup, faScrewdriverWrench, faCog, faThumbsUp, faFilePen, faUsers, faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare as farPenToSquare, faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons'

library.add(faUserSecret, faTableColumns, fasPenToSquare, faComments, faUserGroup, faScrewdriverWrench, faCog, faThumbsUp, faFilePen, farPenToSquare, faEye, faUsers, faUser, faEnvelope, faLock, faTrashCan);

const app = createApp(App);

app.config.globalProperties.$helpers = helpers;

// const plugins = {
//     install() {        
//         Vue.helpers = helpers;
//         Vue.prototype.$helpers = helpers;
//     }
// }

app.mixin(globalMixin);
app.provide('$helpers', helpers);

registerPlugins(app);

app.use(VueApexCharts);
app.use(createPinia());
app.use(helpers);

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app');
