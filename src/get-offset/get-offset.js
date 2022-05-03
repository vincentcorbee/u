const getOffset = (node, parent) => {
  const offset = {
    x: 0,
    y: 0,
  }
  do {
    if (parent && parent === node) {
      break
    }
    offset.x += node.offsetLeft
    offset.y += node.offsetTop
  } while ((node = node.offsetParent) !== null)
  return offset
}

export default getOffset
