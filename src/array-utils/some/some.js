const some = (arr, callback, thisArg = null) => {
  const flags = []
  const l = arr.length
  let flag
  let i = 0

  while (i < l) {
    flag = !!callback.call(thisArg, arr[i], i, arr)
    flags.push(flag)
    i += 1
  }
  return flags.indexOf(true) > -1
}

export default some
