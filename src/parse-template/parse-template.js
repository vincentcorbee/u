const parseTemplate = html => {
  const parser = new DOMParser()
  const DOM = parser.parseFromString(html, 'text/html')
  let template = DOM.querySelector('template')

  if (template) {
    return template
  } else {
    const nodes = DOM.body.childNodes
    const styleNodes = DOM.head.childNodes

    template = document.createElement('template')

    for (const node of styleNodes) {
      template.content.append(node)
    }

    for (const node of nodes) {
      template.content.append(node)
    }

    return template
  }
}

export default parseTemplate