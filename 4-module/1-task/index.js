/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  // ваш код...
  let html
  const ul = document.createElement('ul')

  const li = friends.map(friend => html = makeFriend(friend))
  ul.insertAdjacentHTML('beforeend', li.join(''))
  return ul
}

function makeFriend({firstName, lastName}) {
  return `
  <li>${firstName} ${lastName}</li>
  `
}
