import isType from "../../is-type/is-type"

const forEach = function(arr, callback, thisArg = null, i = 0) {
  if (!isType('function', callback)) {
    throw new TypeError(callback + ' is not a function.')
  }

  let that = this
  let l = arr.length

  if (i < l) {
    callback.call(thisArg, arr[i], i, arr)

    return that.forEach(arr, callback, thisArg, i + 1)
  }
}

export default forEach