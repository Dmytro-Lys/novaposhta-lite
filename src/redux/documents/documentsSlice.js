import { createSlice } from "@reduxjs/toolkit";
import { fetchDocuments } from "API/novaposhtaAxiosAPI";
const documentsInitialState = {
    items: [],
    count: 0
}

const fetchFulfilled = (state, { payload }) => {
    state.items = payload.data[0].result;
    state.count = payload.info.totalCount;
} 

const documentsSlice = createSlice({
    name: "documents",
    initialState: documentsInitialState,
     extraReducers: (builder) =>{
      builder
        .addCase(fetchDocuments.fulfilled, fetchFulfilled)
    }
})

export const documentsReducer = documentsSlice.reducer;
