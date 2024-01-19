import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.novaposhta.ua/v2.0/json/";

export const fetchDocuments = createAsyncThunk(
  "documents/fetchAll",
  async (body, thunkAPI) => {
    try {
        const response = await axios.post("/", body);
        // console.log (response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message||error.response.data.name||error.message);
    }
  }
);

export const fetchDocumentStatus = createAsyncThunk(
  "documents/fetchStatus",
  async (body, thunkAPI) => {
    try {
        const response = await axios.post("/", body);
        // console.log (response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message||error.response.data.name||error.message);
    }
  }
);

export const getDocumentStatus = 
  async (body) => {
    try {
        const response = await axios.post("/", body);
        // console.log (response.data)
      return response.data;
    } catch (error) {
      return error.response.data.message||error.response.data.name||error.message;
    }
  }
;