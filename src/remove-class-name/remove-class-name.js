const removeClassName =(node, name) => {
  const classNames = node.className
    .split(' ')
    .filter(className => className !== name)
    .join(' ')
    .trim()
  if (classNames.length > 0) {
    node.className = classNames
  } else {
    node.removeAttribute('class')
  }
}

export default removeClassName