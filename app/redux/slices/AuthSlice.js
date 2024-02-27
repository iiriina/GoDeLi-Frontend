import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import authWS from '../../networking/api/endpoints/authWS';
import userWS from '../../networking/api/endpoints/userWS';

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async ({ idToken, user }, { rejectWithValue, dispatch }) => {
    try {
      

      const aux = await authWS.create(idToken);
      dispatch(updateJWT(aux.data.accessToken));
      


      const aux2 = await userWS.get(user.id); 
      console.log("aux2: " + aux2)
      console.log("aux2 status: " +aux2.status)
      console.log("aux2 data: " +aux2.data)
      if (aux2.status === 404) {
        dispatch(updateUser(user));
      } else {
        const usuario = {
          id: aux2.data.id,
          name: aux2.data.name,
          email: aux2.data.email,
          photo: aux2.data.image
        }
        dispatch(updateUser(usuario));
        dispatch(getFavs(aux2.data.favs));
      }



      


      return aux.data;
      
    } catch (error) {
      console.log(error);
      return rejectWithValue({
        error: error.response,
      });
    }
  }
);

export const fetchLogout = createAsyncThunk(
  'auth/fetchLogout',
  async ({ googleId }, { rejectWithValue }) => {
    try {
      const aux = await authWS.delete(googleId);
      logoutAction();
      return aux.data;
      
    } catch (error) {
      return rejectWithValue({
        error: error.response,
      });
    }
  }
);

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    user: {
      id: null,
      email: null,
      photo:null,
      name:null
    },
    session: {
      accessToken: null,
      refreshToken: null,
    },
    favs: [],
    isFetching: false,
    succeed: false,
  },
  reducers: {
    logoutAction: (state) => {
      state.session.accessToken = null;
      state.session.refreshToken = null;
      state.user.id = null;
      state.user.email = null;
      state.user.photo = null;
      state.user.name = null;
      state.user.favs = [];
    },
    resetAccessToken: (state) => {
      state.session.accessToken = null;
    },
    getFavs: (state, action) => {
      state.favs = action.payload.map(receta => receta._id);
    },
    updateFavs: (state, action) => {
        const index = state.favs.findIndex(id => id === action.payload);
        if (index != -1) {
          state.favs.splice(index, 1)
        } else {
        state.favs = [...state.favs, action.payload];
      }
    },
    updateJWT: (state,token) => {
      state.session.accessToken = token.payload;
      axios.defaults.headers.common.Authorization = 'Bearer ' + state.session.accessToken;
    },
    updateUser: (state, action) => {
        state.user.id = action.payload.id;
        state.user.email = action.payload.email; 
        state.user.name = action.payload.name; 
        state.user.photo = action.payload.photo; 
    },
  
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {

      state.isFetching = false;
      state.succeed = true;
      state.user.id = action.payload.id;
      state.session.accessToken = action.payload.accessToken;
      state.session.refreshToken = action.payload.refreshToken;   
      axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.accessToken}`;

    });
    builder.addCase(fetchLogin.rejected, (state, action) => {

      state.isFetching = false;
      // Aquí puedes manejar errores específicos si es necesario
    });



    builder.addCase(fetchLogout.pending, (state) => {

      state.isFetching = true;
    });
    builder.addCase(fetchLogout.fulfilled, (state, action) => {

      state.isFetching = false;
      state.succeed = true;
      state.session.accessToken = null;
      state.session.refreshToken = null;
      state.user.id = null;
      state.user.email = null;
      state.user.photo = null;
      state.user.name = null;   
      axios.defaults.headers.common['Authorization'] = '';

    });
    builder.addCase(fetchLogout.rejected, (state, action) => {
      state.isFetching = false;
      // Aquí puedes manejar errores específicos si es necesario
    });
    },
  
});

export const { logoutAction, updateJWT, updateUser, resetAccessToken, getFavs, updateFavs } = authReducer.actions;

export default authReducer.reducer;
