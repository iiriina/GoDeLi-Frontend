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
    },
    resetAccessToken: (state) => {
      state.session.accessToken = null;
    },
    updateJWT: (state,token) => {
      state.session.accessToken = token.payload;
      axios.defaults.headers.common.Authorization = 'Bearer ' + state.session.accessToken;
    },
    updateUser: (state, action) => {
        console.log('entrooooo')
        console.log(action.payload.name);
        state.user.id = action.payload.id;
        console.log(action.payload.id);
        state.user.email = action.payload.email; 
        console.log(action.payload.email);
        state.user.name = action.payload.name; 
        console.log(action.payload.name);
        state.user.photo = action.payload.photo; 
        console.log(action.payload.photo);
        console.log('saliooooo')
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
        console.log("EL PENDING");
      state.isFetching = true;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      console.log("EL FULFILLED 0");  
      state.isFetching = false;
      state.succeed = true;
      state.user.id = action.payload.id;
      state.session.accessToken = action.payload.accessToken;
      state.session.refreshToken = action.payload.refreshToken;   
      axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.accessToken}`;
      console.log("EL FULFILLED");
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
        console.log("EL REJECTED");
      state.isFetching = false;
      // Aquí puedes manejar errores específicos si es necesario
    });
  },
  
});

export const { logoutAction, updateJWT, updateUser, resetAccessToken } = authReducer.actions;

export default authReducer.reducer;
