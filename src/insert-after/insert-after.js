const insertAfter = (newNode, refNode) =>
  refNode.parentNode.insertBefore(newNode, refNode.nextElementSibling)

export default insertAfter
