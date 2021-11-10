import './main.css';
import * as myfun from './populate.js';

const {createGame, postInfo, getData} = myfun.default;

const button = document.querySelector('.submit');
const refreshButton = document.querySelector('.refresh');
const ul = document.querySelector('.list');

createGame().then((id) => {
  
  button.addEventListener('click',(e) => {
    const name = document.querySelector('.name').value;
    const score = document.querySelector('.score').value;
    if (name && score) {
      e.preventDefault();
      postInfo(id,name,score);
      document.querySelector('form').reset();
    }
  });

  refreshButton.addEventListener('click', () => {
    getData(id).then((result) => {
      ul.innerHTML = '';
      result.forEach((res, index) => {
        console.log(res);
        index % 2 === 0 ? ul.innerHTML += `<li>${res.user}:${res.score}</li>`: ul.innerHTML += `<li  class="li-grey">${res.user}:${res.score}</li>`;
        
      })
    })
  })


});
