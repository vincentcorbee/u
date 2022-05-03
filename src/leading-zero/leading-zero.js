const leadingZero = (num = 0) => (Number(num) <= 9 ? `0${num}` : num)

export default leadingZero
