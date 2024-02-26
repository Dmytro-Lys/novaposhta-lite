import { createSlice } from "@reduxjs/toolkit";
import { fetchDocuments, fetchDocumentStatus } from "API/novaposhtaAxiosAPI";
import { getStatusTime} from "API/helpers";
const documentsInitialState = {
    items: [],
    count: 0
}

const fetchDocumentsFulfilled = (state, { payload }) => {
    state.items = payload.data[0].result;
    state.count = payload.info.totalCount;
} 

const fetchDocumentStatusFulFilled = (state, { payload }) => {
    const {number} = payload.data[0]
    const { EventDescription } = payload.data[0].movement.now[0]
    const statusTime = getStatusTime(payload.data[0].movement.now[0])
    const index = state.items.findIndex(document => document.Number === number)
    if (index !== -1) state.items[index].TrackingCurrentStatus = `${EventDescription}
    ${statusTime}`
}

const documentsSlice = createSlice({
    name: "documents",
    initialState: documentsInitialState,
     extraReducers: (builder) =>{
      builder
             .addCase(fetchDocuments.fulfilled, fetchDocumentsFulfilled)
             .addCase(fetchDocumentStatus.fulfilled, fetchDocumentStatusFulFilled)
    }
})

export const documentsReducer = documentsSlice.reducer;
