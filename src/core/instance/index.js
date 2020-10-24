import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// 通过函数实现类（通过es5实现可以在vue原型上挂载很多方法，在不同的文件定义原型方法，方便管理）
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    // Vue必须通过new进行实例化 
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 原型方法
  this._init(options)
}

// 挂载很多原型方法
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
