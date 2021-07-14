# Vue

## 介绍

核心：数据驱动、组件化、响应式原理
编译：parse、optimize、codegen
扩展：event、v-model、slot、keep-alive、transition
生态：Vue-router、Vuex

### Flow
Flow是facebook出品的静态类型检查工具，Vue.js源码用Flow做了静态类型检查

类型检查分为两种方式
#### 类型推断
通过变量的使用上下文来推断出变量类型，然后根据这些推断来检查类型

#### 类型注释
事先注释好我们期待的类型，Flow会基于这些注视来判断

#### 构建工具
webpack - 图片、静态资源进行处理编译成JavaScript
rollup - 更倾向库的构建，只针对js处理，其他部分是不管的，轻量级

#### 源码构建
基于 NPM 托管的项目都会有一个 package.json 文件，它是对项目的描述文件，它的内容实际上是一个标准的 JSON 对象。

我们通常会配置 script 字段作为 NPM 的执行脚本，Vue.js 源码构建的脚本如下：
```JavaScript
{
  "script": {
    "build": "node scripts/build.js"
  }
}
```
当在命令行运行 npm run build 的时候，实际上就会执行 node scripts/build.js
##### 构建脚本
待补充
##### 构建过程
待补充
##### Runtime Only vs  Runtime Compiler
- Runtime Only
我们在使用 Runtime Only 版本的 Vue.js 的时候，通常需要借助如 webpack 的 vue-loader 工具把 .vue 文件编译成 JavaScript，因为是在编译阶段做的，所以它只包含运行时的 Vue.js 代码，因此代码体积也会更轻量。

- Runtime + Compiler
我们如果没有对代码做预编译，但又使用了 Vue 的 template 属性并传入一个字符串，则需要在客户端编译模板，如下所示
```JavaScript
// 需要编译器的版本
new Vue({
  template: '<div>{{ hi }}</div>'
})

// 这种情况不需要
new Vue({
  render (h) {
    return h('div', this.hi)
  }
})
```
## 数据驱动

### new Vue发生了什么
1、执行_init()方法
2、合并options
3、调用初始化方法：初始化生命周期、事件中心...
4、调用vm.$mount(vm.options.$el)方法，把数据挂载到el容器中

### Vue实例挂载的实现（$mount）
1、判断vm.$options.render是否存在
2、没有render获取template通过编译转换为render
3、调用mountComponent方法，实际就是渲染watcher，在方法里调用vm._update函数传入vm._render()，执行了一次渲染，之后更新还是会触发渲染watcher

### render
_render方法返回的是一个VNODE
1、获取vm.$options.render
2、调用render方法生成vnode节点，vnode = render.call(vm._renderProxy, vm.$createElement)
3、vm._renderProxy对vm添加一层代理，确定某个prop是否存在
4、检查vnode是否为数组且长度等于1，否则报警告

### Virtual DOM
> 真正的DOM元素是非常庞大的，因为浏览器的标准就把DOM设计的非常复杂，当我们频繁的去做DOM更新，会产生一定的性能问题
> Virtual DOM是用一个原生的JS对象去描述一个DOM节点，比创建一个DOM的代价小很多，在vuejs中，Virtual DOM是用VNode的类去描述

### createElement

### update
Vue的_update是实例的一个私有方法，它被调用的时机有两个，一个是首次渲染，一个是数据更新的时候；_update方法的做哟个是把VNode渲染成真实的DOM

new Vue -> init（初始化） -> $mount（挂载） -> compile（编译版本） -> render（render生成vnode） -> vnode -> patch -> DOM
