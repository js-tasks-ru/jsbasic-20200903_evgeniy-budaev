/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  // ваш код...
  let arr = str.match(/(-?\d+(\.\d+)?)/g).map(v => +v);

  let maxNumber = Math.max(...arr);
  let minNumber = Math.min(...arr);
  return {
    'max': maxNumber,
    'min': minNumber
  }
}
