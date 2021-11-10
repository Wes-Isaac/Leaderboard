import axios from 'axios';

const createGame = async () => {
  const response = await axios.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', { name: 'my cool game' });
  const myArray = response.data.result.split(':');
  const id = myArray[1].split(' ')[1];
  return id;
};

const postInfo = async (id, name, val) => {
  await axios.post(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`, {
    user: name,
    score: val,
  });
};

const getData = async (id) => {
  const res = await axios.get(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`);

  return res.data.result;
};

export default { createGame, postInfo, getData };