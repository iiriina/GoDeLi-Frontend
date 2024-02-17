import axios from 'axios';
import { config } from './ApiConfig'; // Asegúrate de que la ruta es correcta
// Importa tu store de Redux y las acciones necesarias
import store from '../../redux/Store';
import { resetJWT, updateJWT } from '../../redux/slices/AuthSlice';

axios.defaults.baseURL = config.BASE_URL;
axios.defaults.timeout = config.TIME_OUT;
axios.defaults.headers.common = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalRequest = err.config;
    if (originalRequest.url !== '/login' && err.response) {
      if (err.response.status === 401 && !originalRequest._retry) {
        try {
          store.dispatch(resetJWT());
        } catch (error) {
          console.log(error);
        }

        originalRequest._retry = true;
        const loginState = store.getState().auth;
        const response = await loginWS.refreshToken(
          loginState.user.token,
        );

        if (response.status === 200) {
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
          try {
            store.dispatch(updateJWT(response.data));
          } catch (error) {
            console.log(error);
          }

          originalRequest.headers['Authorization'] = 'Bearer ' + response.data.token;
          return axios(originalRequest);
        } else {
          return Promise.reject(err);
        }
      } else {
        return Promise.reject(err);
      }
    } else {
      return Promise.reject(err);
    }
  },
);

function setClientToken(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

function clearClientToken() {
    axios.defaults.headers.common['Authorization'] = '';
}

export { setClientToken, clearClientToken };
export default axios;