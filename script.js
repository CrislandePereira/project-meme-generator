const typingText = document.querySelector('#text-input');
const showTypingText = document.querySelector('#meme-text');
const insertImage = document.querySelector('#meme-insert');
const showImage = document.querySelector('#meme-image');
const containerImg = document.querySelector('.container');

typingText.addEventListener('keyup', (event) => {
  const { target } = event;
  showTypingText.innerHTML = target.value;
});

insertImage.addEventListener('change', (event) => {
  const { target } = event;
  showTypingText.style.position = 'absolute';
  showImage.setAttribute('src', URL.createObjectURL(target.files[0]));
});

const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');

btnFire.addEventListener('click', (event) => {
  containerImg.style.border = '3px dashed red';
});
btnWater.addEventListener('click', (event) => {
  containerImg.style.border = '5px double blue';
});
btnEarth.addEventListener('click', (event) => {
  containerImg.style.border = '6px groove green';
});

const images = document.querySelectorAll('.img');

images.forEach((img) => {
  img.addEventListener('click', (event) => {
    const { target } = event;``
    showTypingText.style.position = 'absolute';
    showImage.src = target.src;
  });
});
