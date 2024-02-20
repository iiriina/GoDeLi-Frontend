import axios from '../api/Api';
import {store} from '../../redux/store';
import { resetAccessToken, updateJWT } from '../../redux/slices/AuthSlice';
import authWS from './endpoints/authWS';


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
  
  export default axios
  // -----------------------------------------------------------------------------------