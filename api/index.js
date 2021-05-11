import axios from 'axios';
import { setInterceptors } from './common/interceptors';

const axiosInstance = () => {
  const instance = axios.create();
  return setInterceptors(instance);
};

export { axiosInstance };
