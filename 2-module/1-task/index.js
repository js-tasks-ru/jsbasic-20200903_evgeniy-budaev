/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  // ваш код...
  const total = [];
  let result;

  for (let value of Object.values(salaries)) {
    if (typeof value === 'number') {
      total.push(value)
      result = total.reduce((sum, current) => sum + current, 0)
    } else if (total.length === 0) {
      result = 0
    }
  }

  return result
}
