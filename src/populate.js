// const axios = require('axios');
import axios from 'axios';

async function createGame(){
  const response = await axios.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      name: "my cool game"});
  const myArray = response.data.result.split(":");
  const id = myArray[1].split(' ')[1];
  return id;
}

const button = document.querySelector('.submit');
const refreshButton = document.querySelector('.refresh');
const ul = document.querySelector('.list');

async function postInfo(id, name, score) {
 const info = await axios.post(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`, {
    user: name,
    score: score
  });
  console.log(info.data.result);

}

async function getData(id) {
  const res = await axios.get(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`);

  return res.data.result;
}


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


})




