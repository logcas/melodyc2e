import Axios from 'axios';
import { Toast } from 'vant';

const BASE_URL_MAP = {
  'development': 'http://localhost:7001',
  'production': 'http://139.199.14.123:7002'
};

const axios = Axios.create({
  baseURL: BASE_URL_MAP[process.env.NODE_ENV],
  timeout: 10000,
});

axios.interceptors.response.use(
  response => response.data.data,
  error => {
    if (error.response) {
      Toast.fail('服务器开小差啦，请稍后再试');
    } else {
      Toast.fail('请检查网络');
    }
    return error;
  }
);

export default axios;
