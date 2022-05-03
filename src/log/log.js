const log = (msg, color) => {
  let data

  try {
    data = JSON.stringify(msg, null, 2)
  } catch (err) {
    data = msg
  }

  console.log(
    `%c${data}`,
    `background-color: ${color}; color: white; padding: 5px`,
  )
}

export default log
