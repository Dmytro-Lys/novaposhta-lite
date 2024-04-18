import { createSlice } from "@reduxjs/toolkit";

const trackingInitialState = "";

const trackingSlice = createSlice({
    name: "tracking",
    initialState: trackingInitialState,
    reducers: {
        setTrackingApiKey: {
            reducer(state, action) {
                return action.payload
            }
        }
    }
})

export const { setTrackingApiKey } = trackingSlice.actions;
export const trackingReducer = trackingSlice.reducer;