const getParameter = (param) => {
  const loc = window.location
  const queryString = loc.search ? loc.href.split('?')[1] : ''
  const parameters = queryString.split('&')
  if (parameters.length > 0) {
    return (
      parameters
        .map((data) => {
          const [key, value] = data.split('=')
          return key === param ? value : ''
        })
        .find((par) => !!par) || null
    )
  } else {
    return null
  }
}

export default getParameter
