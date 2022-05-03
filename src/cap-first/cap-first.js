const capFirst = (string) =>
  String(string).replace(/^[a-z]/g, (char) => char.toUpperCase())

export default capFirst
