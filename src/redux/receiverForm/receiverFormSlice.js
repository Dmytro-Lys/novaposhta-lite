import { createSlice } from "@reduxjs/toolkit";

const receiverFormInitialState = {
    id: '',
    receiverName: '',
    apiKey: ''
}

const receiverFormSlice = createSlice({
    name: "receiverForm",
    initialState: receiverFormInitialState,
    reducers: {
        setReceiverId: {
            reducer(state, action) {
                state.id = action.payload
            }
        },
        setReceiverName: {
            reducer(state, action) {
                state.receiverName = action.payload
            }
        },
        setReceiverApiKey: {
            reducer(state, action) {
                state.apiKey = action.payload
            }
        },
        setReceiverAll: {
            reducer(state, action) {
                 const items = Object.keys(state)
                for (const item of items) {
                    state[item]=action.payload[item]
                }
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

export const {setReceiverId, setReceiverName, setReceiverApiKey, resetForm, setReceiverAll } = receiverFormSlice.actions;
export const receiverFormReducer = receiverFormSlice.reducer;