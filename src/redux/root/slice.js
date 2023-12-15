import { createSlice } from '@reduxjs/toolkit'

const rootInitialState = {
		isLoading: false,
		error: '',
	}

const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}
const handleRejected = (state, {payload, error}) => {
	
	state.isLoading = false
	state.error = payload ?? error
}

const handleFulfilled = (state) => {
	state.isLoading = false
	state.error = ''
}
const rootSlice = createSlice({
	name: 'root',
	initialState: rootInitialState,
	extraReducers: (builder) =>
		builder
		.addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
        .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
        .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
})

export const rootReducer = rootSlice.reducer