const roundTo = (value, precision) => {
  const factor = Math.pow(10, precision)

  return Math.round(value * factor) / factor
}

export default roundTo
