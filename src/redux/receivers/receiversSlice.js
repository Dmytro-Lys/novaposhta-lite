import { createSlice } from "@reduxjs/toolkit";

const receiversInitialState = {
    items:[],
    selectItem: '',
    isVisibleReceivers: false
};

const receiversSlice = createSlice({
    name: "receivers",
    initialState: receiversInitialState,
    reducers: {
        addReceiver: {
            reducer(state, action) {
                state.items.push(action.payload)
            }
        },
        delReceiver: {
            reducer(state, action) {
                return state.items.filter(receiver => receiver.id !== action.payload)
          }
        },
        setReceiver: {
            reducer(state, action) {
                state.selectItem = action.payload   
            }
        },
        setIsVisibleReceivers: {
            reducer(state, action) {
               state.isVisibleReceivers =  action.payload
            }
        }
    }
})

export const { addReceiver, delReceiver, setReceiver, setIsVisibleReceivers } = receiversSlice.actions;
export const receiversReduser = receiversSlice.reducer;