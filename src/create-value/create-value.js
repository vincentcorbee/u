const createValue = (string) =>
  String(string).replace(/\s+/g, '_').replace(/\[|\]/g, '').toLowerCase()

export default createValue
