import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './stylus/liang-ui.styl'

Vue.config.productionTip = false;
Vue.directive('demo', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    el.innerHTML =
        'name: '       + s(binding.name) + '<br>' +
        'value: '      + s(binding.value) + '<br>' +
        'expression: ' + s(binding.expression) + '<br>' +
        'argument: '   + s(binding.arg) + '<br>' +
        'modifiers: '  + s(binding.modifiers) + '<br>' +
        'vnode keys: ' + Object.keys(vnode).join(', ')
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
