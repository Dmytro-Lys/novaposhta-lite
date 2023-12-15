import { createSlice } from "@reduxjs/toolkit";

const receiversInitialState = {
    items: [
    {
        id: '1',
        apiKey: 'api1',
        receiverName: 'ПП "Аграрні інвестиції"'
    },
    {
        id: '2',
        apiKey: 'api2',
        receiverName: 'ТОВ АФ "Ім. Чапаєва"'
    }
    ],
    selectItem: '1'
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