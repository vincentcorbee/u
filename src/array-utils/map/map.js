import isType from '../../is-type/is-type'

export const map = (arr, callback, thisArg = null) => {
  if (!isType('function', callback)) {
    throw new TypeError(callback + 'is not a function.')
  }
  const l = arr.length
  const a = [l]
  let i = 0
  while (i < l) {
    a[i] = callback.call(thisArg, arr[i], i, arr)
    i += 1
  }
  return a
}

export default map
