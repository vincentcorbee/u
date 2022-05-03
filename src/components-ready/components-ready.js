const componentsReady = (components, cb, bool) => {
  const timeLimit = 5000
  const start = new Date()

  components = Array.isArray(components) ? components : [components]

  const isReady = (component, cb) => {
    let int = new Date() - start

    if (component.on !== undefined) {
      cb(component)
    } else if (int > timeLimit) {
      cb(null)
    } else {
      setTimeout(() => isReady(component, cb), 0)
    }
  }

  Promise.all(
    components.map(
      component => new Promise((resolve) => isReady(component, resolve))
    )
  ).then(components => {
    if (bool === false) {
      cb(components)
    } else {
      cb.apply(this, components)
    }
  })
}

export default componentsReady