document.querySelector("#currentyear").innerHTML = new Date().getFullYear();
document.querySelector("#lastModified").innerHTML = new Date();

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});