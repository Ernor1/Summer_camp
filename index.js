const links = document.querySelector('.links');
const link = document.querySelector('.link');

const cancel = document.querySelector('.cancel');
const bars = document.querySelectorAll('.bars');

const open = function () {
  links.classList.remove('links');
  link.classList.remove('link');
  link.classList.add('li-click');
  // bars.classList.remove('bars');
  // bars.classList.add('bars-click');
  return links.classList.add('lis-click');

};

const closeModal = function () {
  links.classList.remove('lis-click');
  return links.classList.add('links');

};


for (let i = 0; i < bars.length; i++)
  bars[i].addEventListener('click', open);

cancel.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

});