// 防抖
function debounce(fn, delay, immediate = false) {
  if (!(typeof fn === 'function')) {
    throw `${fn} is not function`
  }

  if (!(typeof delay === 'number')) {
    throw `${delay} is not delay time`
  }

  if (!(typeof immediate === 'boolean')) {
    throw `${immediate} is not boolean`
  }

  let timer = null
  let isImmediate = false

  const _debounce = function (...args) {
    if (timer) clearInterval(timer)

    // 是否立即执行
    if (immediate && !isImmediate) {
      fn.apply(this, args)
      isImmediate = true
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
        isImmediate = false
        timer = null
      }, delay);
    }
  }

  // 当点击取消
  _debounce.canCal = function () {
    if (timer) clearTimeout(timer)
    timer = null
    isImmediate = false
  }
  
  return _debounce
}

// 节流
function throttle(fn, interval, immediate = false) {
  if (!(typeof fn === 'function')) {
    throw `${fn} is not function`
  }

  if (!(typeof interval === 'number')) {
    throw `${interval} is not delay time`
  }

  if (!(typeof immediate === 'boolean')) {
    throw `${immediate} is not boolean`
  }

  let timer = null

  const _throttle = function (...args) {

    if (immediate) {
      fn.apply(this, args)
      immediate = false
    }
    
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        clearInterval(timer)
        timer = null
      }, interval);
    }
  }

  return _throttle
}

module.exports = {
  debounce,
  throttle
}