
import App from './App'
import Plugins from 'csa-vue-plugins'
import store from './store'

Vue.use(Plugins)
Vue.config.productionTip = false

const VueOpt = {
  store,
  template: '<App/>',
  components: { App }
}

Vue.component('csa-chatbot', VueOpt)

export default Vue.boot(VueOpt)
