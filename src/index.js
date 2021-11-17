import './main.css';
import * as myfun from './populate.js';

const { postInfo, getData } = myfun.default;
const button = document.querySelector('.submit');
const refreshButton = document.querySelector('.refresh');
const ul = document.querySelector('.list');

const render = () => {
  getData().then((result) => {
    ul.innerHTML = '';
    result.forEach((res) => {
      ul.innerHTML += `<li  class="li-grey">${res.user} : ${res.score}</li>`;
    });
  });
};

button.addEventListener('click', async (e) => {
  const name = document.querySelector('.name').value;
  const score = document.querySelector('.score').value;
  if (name && score) {
    e.preventDefault();
    await postInfo(name, score);
    document.querySelector('form').reset();
    render();
  }
});

render();

refreshButton.addEventListener('click', render);
