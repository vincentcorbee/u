const isEventSupported = (function () {
  const TAGNAMES = {
    select: 'input',
    change: 'input',
    submit: 'form',
    reset: 'form',
    error: 'img',
    load: 'img',
    abort: 'img',
  }
  function isEventSupported(eventName) {
    const el = document.createElement(TAGNAMES[eventName] || 'div')

    eventName = 'on' + eventName

    const isSupported = eventName in el

    if (!isSupported) {
      el.setAttribute(eventName, 'return;')
      isSupported = typeof el[eventName] === 'function'
    }

    return isSupported
  }

  return isEventSupported
})()

export default isEventSupported
