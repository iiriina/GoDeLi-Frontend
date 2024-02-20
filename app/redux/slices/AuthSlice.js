import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import authWS from '../../networking/api/endpoints/authWS';

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async ({ idToken }, { rejectWithValue }) => {
    try {
      const aux = await authWS.create(idToken);
      updateJWT(aux.data.accessToken);
      return aux.data;
      
    } catch (error) {
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
    },
    resetAccessToken: (state) => {
      state.session.accessToken = null;
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

export const { logoutAction, updateJWT, updateUser, resetAccessToken } = authReducer.actions;

export default authReducer.reducer;
