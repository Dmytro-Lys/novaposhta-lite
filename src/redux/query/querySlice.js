import { createSlice } from "@reduxjs/toolkit";

const queryInitialState = {
    limit: 5,
    page: 1
}

const querySlice = createSlice({
    name: "query",
    initialState: queryInitialState,
    reducers: {
        setLimit: {
            reducer(state, action) {
                state.limit = action.payload
            }
        },
        setPage: {
            reducer(state, action) {
                state.page = action.payload
            }
        }

    }
})

export const { setLimit, setPage } = querySlice.actions;
export const queryReducer = querySlice.reducer;