/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  // ваш код...
  let arr = users
    .filter(user => user.age <= age)
    .map(obj => obj.name+', '+obj.balance)

  let resultArray = arr.map(el => el)

  return resultArray.join("\n")
}
