import { createSlice } from "@reduxjs/toolkit";

const receiversInitialState = {
    items:[],
    selectItem: ''
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
        }
    }
})

export const { addReceiver, delReceiver, setReceiver } = receiversSlice.actions;
export const receiversReduser = receiversSlice.reducer;