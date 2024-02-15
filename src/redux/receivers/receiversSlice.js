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
               state.items = state.items.filter(receiver => receiver.id !== action.payload) 
          }
        },
        changeReceiver: {
            reducer(state, action) {
                const index = state.items.findIndex(receiver => receiver.id === action.payload.id)
                if (index === -1) {
                    state.items.push(action.payload)
                } else {
                    state.items[index] = { ...state.items[index], ...action.payload }
                }
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

export const { addReceiver, delReceiver, setReceiver, setIsVisibleReceivers, changeReceiver } = receiversSlice.actions;
export const receiversReduser = receiversSlice.reducer;