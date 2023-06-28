import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
const cleanAuthHeader = () =>
  (axios.defaults.headers.common.Authorization = '');


   // Register 
export const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    console.log(user)
    try {
      const response = await axios.post('/users/signup', user);
      setAuthHeader(response.data.token);
       console.log(response)
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

//  login 
export const login = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);


//  logOut 
export const logOut = createAsyncThunk(
  'auth/logout',
  async (user, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout', user);
      cleanAuthHeader();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

// refresh
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

      if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');

      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
