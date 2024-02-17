import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import authWS from '../../networking/api/endpoints/authWS';

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async ({ idToken }, { rejectWithValue }) => {
    try {
      const aux = await authWS.create(idToken);
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
    updatePNToken: (state, token) => {
      state.session.pnToken = token.payload;
      console.log('token.payload;token.payload;token.payload;token.payload;: ', state.session.pnToken);
    },
    logoutAction: (state) => {
      state.session.accessToken = null;
      state.session.refreshToken = null;
      state.user.id = null;
      
    },
    updateJWT: (state) => {
      axios.defaults.headers.common.Authorization = 'Bearer ' + state.session.jwt;
    },
    updateUser: (state, action) => {
        console.log('entrooooo')
        console.log(action.payload.name);
        state.user.id = action.payload.id;
        state.user.email = action.payload.email; 
        state.user.name = action.payload.name; 
        state.user.photo = action.payload.photo; 
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

export const { logoutAction, updatePNToken, updateJWT, updateUser } = authReducer.actions;

export default authReducer.reducer;
