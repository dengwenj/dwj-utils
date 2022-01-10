// 是否为引用类型
function isObject(value) {
  if (typeof value === 'function' || typeof value === 'object') return true
  return false
}

// 深拷贝
function deepClone(clone) {
  let newObject = Array.isArray(clone) ? [] : {}

  // 是函数直接返回这个函数
  if (typeof clone === 'function') {
    return clone
  }

  // 判断是不是引用类型
  if (!isObject(clone)) {
    return clone
  }

  for(const key in clone) {
    newObject[key] = deepClone(clone[key])
  }

  return newObject 
}

// 浅拷贝
function shallowClone(clone) {
  let newObject = {}

  for(const key in clone) {
    newObject[key] = clone[key]
  }

  return newObject 
}

module.exports = {
  shallowClone,
  deepClone, 
  isObject
}