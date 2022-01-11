## 一个 JavaScript 工具库

## 说明
* **这个工具库在自己的能力范围内封装的，可能有很多地方没有考虑到**
* **目的：为开发项目提高效率**

## npm
```
npm i dwj-utils
```
## example:
``` js
const dwjUtils = require('dwj-utils')

dwjUtils.deepClone(obj)
dwjUtils.debounce(function (){
  console.log('我是防抖')
}, 300, true)
```
## 目前支持:
* debounce（func 防抖)、throttle（func 节流）
* deepClone（func 深拷贝）、shallowClone（func 浅拷贝）、isObject（func 是否为引用类型）
* Storage（class 本地存储）