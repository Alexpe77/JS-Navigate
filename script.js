/* Select the last child of the <ol> tag and put it at the beginning of the list
Move the <h2> of the third section in the second one and vice-versa
Delete the last section from the DOM, we don't need it anyways
*/

const list = document.querySelector('ol');
const lastElement = list.lastElementChild;

list.insertBefore(lastElement, list.firstElementChild);

console.log(list);