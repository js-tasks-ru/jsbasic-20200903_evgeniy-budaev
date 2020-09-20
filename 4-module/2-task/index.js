/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  for (let tr of table.rows) {
    let index = tr.rowIndex;
    tr.cells[index].style.backgroundColor = "red";
  }
}
