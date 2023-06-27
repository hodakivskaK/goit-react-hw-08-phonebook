import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = "https://6490481e1e6aa71680caf2c1.mockapi.io";


export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI ) => {
    try {
       const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", contact );
      return response.data;
     
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


