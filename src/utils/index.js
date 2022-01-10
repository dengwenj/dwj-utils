const debounceThrottle = require('./debounce-throttle')
const isObjectDeepCloneShallowClone = require('./deepClone-shallowClone-isObject')

module.exports = {
  ...debounceThrottle,
  ...isObjectDeepCloneShallowClone
}
