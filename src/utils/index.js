const debounceThrottle = require('./debounce-throttle')
const isObjectDeepCloneShallowClone = require('./deepClone-shallowClone-isObject')
const storage = require('./storage')

module.exports = {
  ...debounceThrottle,
  ...isObjectDeepCloneShallowClone,
  ...storage
}
