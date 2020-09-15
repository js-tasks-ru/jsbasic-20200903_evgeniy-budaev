/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  // ваш код...
  let newArr = []
  let arr = str.split('-')
  newArr.push(arr[0])
  for (let i = 1; i < arr.length; i++) {
    let caps = capitalize(arr[i])
    newArr.push(caps)
  }
  let result = newArr.join('')
  return result
}

function capitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}
