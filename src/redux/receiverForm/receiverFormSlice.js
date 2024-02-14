import { createSlice } from "@reduxjs/toolkit";

const receiverFormInitialState = {
    receiverId: '',
    receiverName: '',
    receiverApiKey: ''
}

const receiverFormSlice = createSlice({
    name: "receiverForm",
    initialState: receiverFormInitialState,
    reducers: {
        setReceiverId: {
            reducer(state, action) {
                state.receiverId = action.payload
            }
        },
        setReceiverName: {
            reducer(state, action) {
                state.receiverName = action.payload
            }
        },
        setReceiverApiKey: {
            reducer(state, action) {
                state.receiverApiKey = action.payload
            }
        },
        resetForm: {
            reducer(state, _) {
                const items = Object.keys(state)
                for (const item of items) {
                    state[item]=''
                }
            }
        }
    }
})

export const {setReceiverId, setReceiverName, setReceiverApiKey, resetForm } = receiverFormSlice.actions;
export const receiverFormReducer = receiverFormSlice.reducer;