import axios from './xhr';

export default {
  getMelodies: (page, q) => axios.get('/melody', {
    params: {
      page,
      q
    }
  })
};