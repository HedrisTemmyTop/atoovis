import { post, getApiUrl } from './config';
import axios from 'axios';
import {store} from '../app/store';

const login = (credentials) =>
  axios.post({
    url: getApiUrl(`auth/login`),
    payload: credentials,
  });


const loginService = {
  login,
  register,
  refreshToken,
  deleteAccount,
};

export default loginService;
