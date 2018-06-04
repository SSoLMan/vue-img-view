import imgView from "./src"
import config from './config'

const plugin = {
    install: function (Vue, options={}) {
      Object.assign(config,options)  //复制配置

      // 1. 添加全局方法或属性
      // Vue.myGlobalMethod = function () {
      //   // 逻辑...
      // }
      // 2. 添加全局资源
      Vue.directive('picPullPage', {
        bind (el, binding, vnode, oldVnode) {
          // 逻辑...
          el.addEventListener('click', (ev) => {
            console.log('click me')
          }, false)
        }
      })
      // 3. 注入组件
      // Vue.mixin({
      //   created: function () {
      //     // 逻辑...
      //   }
      // })
  
      // 4. 添加实例方法
      // Vue.prototype.$myMethod = function (methodOptions) {
      //   // 逻辑...
      // }
      Vue.component(options.name || imgView.name, imgView)
    }
  }
  export default plugin