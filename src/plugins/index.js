import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'
import helpers from './helpers'

export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(helpers)
}
