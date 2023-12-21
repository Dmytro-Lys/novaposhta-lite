import { createSlice } from "@reduxjs/toolkit";

const modalsInitialState = {
    openReceiverModal: false
}

const modalsSlice = createSlice({
    name: "modals",
    initialState: modalsInitialState,
    reducers: {
        setOpenReceiverModal: {
            reducer(state, action) {
                state.openReceiverModal = action.payload
            }
        }
    }
})

export const { setOpenReceiverModal } = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;