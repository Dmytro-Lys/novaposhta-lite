import { createSlice } from "@reduxjs/toolkit";

const dialogsInitialState = {
    openReceiverDialog: false,
    itemId:''
}

const dialogsSlice = createSlice({
    name: "dialogs",
    initialState: dialogsInitialState,
    reducers: {
        setOpenReceiverDialog: {
            reducer(state, action) {
                state.openReceiverDialog = action.payload
            }
        },
        setItemId: {
            reducer(state, action) {
                state.itemId=action.payload
            }
        }
    }
})

export const { setOpenReceiverDialog, setItemId } = dialogsSlice.actions;
export const dialogsReducer = dialogsSlice.reducer;