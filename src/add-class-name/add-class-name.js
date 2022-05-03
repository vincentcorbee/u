const addClassName = (node, name) =>
  (node.className = node.className
    ? node.className.indexOf(name) === -1
      ? node.className + ' ' + name
      : node.className
    : name)

export default addClassName