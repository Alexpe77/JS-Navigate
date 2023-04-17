/* Select the last child of the <ol> tag and put it at the beginning of the list
Move the <h2> of the third section in the second one and vice-versa
Delete the last section from the DOM, we don't need it anyways
*/

const section3 = document.querySelector('section:nth-of-type(3)');
section3.remove();