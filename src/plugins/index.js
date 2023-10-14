import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'
import helpers from './helpers'
import globalMixin from './globalMixin'

export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(helpers)
    .use(globalMixin)
}
