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
        },
        resetQuery: {
            reducer(state, _) {
                const items = Object.keys(state)
                for (const item of items) {
                    state[item]=queryInitialState[item]
                }
            }
        }

    }
})

export const { setLimit, setPage,  resetQuery } = querySlice.actions;
export const queryReducer = querySlice.reducer;