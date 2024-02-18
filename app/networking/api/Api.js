import axios from 'axios';
import { config } from './ApiConfig'; // Asegúrate de que la ruta es correcta
// Importa tu store de Redux y las acciones necesarias
import {store} from '../../redux/store';
import { resetAccessToken, updateJWT } from '../../redux/slices/AuthSlice';
import authWS from './endpoints/authWS';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from './useAuth'; 

axios.defaults.baseURL = config.BASE_URL;
axios.defaults.timeout = config.TIME_OUT;
axios.defaults.headers.common = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};



// -------------------------------------------EL INTERCEPTOR--------------------------------

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalRequest = err.config;
    if (originalRequest.url !== 'auth/' && err.response) {
      if (err.response.status === 401 && !originalRequest._retry) {
        try {
          store.dispatch(resetAccessToken());
        } catch (error) {
          console.log(error);
        }

        originalRequest._retry = true;
        const refreshToken = store.getState().auth.session.refreshToken;
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + refreshToken;
        
        const response = await authWS.update();
        // loginState.user.token,

        if (response.status === 200) {
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.accessToken;
          try {
            store.dispatch(updateJWT(response.data.accessToken));
          } catch (error) {
            console.log(error);
          }

          originalRequest.headers['Authorization'] = 'Bearer ' + response.data.accessToken;
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

// -----------------------------------------------------------------------------------



function setClientToken(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

function setInicialToken() {
  console.log("HOLA99")
  console.log(store.getState().auth.session.accessToken)
  console.log("HOLA100")
  axios.defaults.headers.common['Authorization'] = `Bearer ${store.getState().auth.session.accessToken}`;
}

function clearClientToken() {
    axios.defaults.headers.common['Authorization'] = '';
}

export { setClientToken, clearClientToken, setInicialToken };
export default axios;