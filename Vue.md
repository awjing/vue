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

webpack - 图片、静态资源进行处理
rollup - 库的构建，只针对js处理，轻量级

new Vue发生了什么

new Vue -> init（初始化） -> $mount（挂载） -> compile（编译版本） -> render（render生成vnode） -> vnode -> patch -> DOM
