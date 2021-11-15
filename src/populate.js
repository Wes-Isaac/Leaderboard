import axios from 'axios';

const postInfo = async (name, val) => {
  await axios.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8mWORz68pdvNK6avThO2/scores', {
    user: name,
    score: val,
  });
};

const getData = async () => {
  const res = await axios.get('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8mWORz68pdvNK6avThO2/scores');

  return res.data.result;
};

export default { postInfo, getData };