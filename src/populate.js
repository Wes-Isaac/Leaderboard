import axios from 'axios';

async function createGame() {
  const response = await axios.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', { name: 'my cool game' });
  const myArray = response.data.result.split(':');
  const id = myArray[1].split(' ')[1];
  return id;
}

async function postInfo(id, name, val) {
  await axios.post(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`, {
    user: name,
    score: val,
  });
}

async function getData(id) {
  const res = await axios.get(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`);

  return res.data.result;
}

export default { createGame, postInfo, getData };