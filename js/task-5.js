function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const randColorBtn = document.querySelector('.change-color');
const colorSpan = body.querySelector('.color');

randColorBtn.addEventListener('click', event => {
  const color = getRandomHexColor();
  body.setAttribute('style',`background-color:${color}`);
  colorSpan.textContent = color;
});
