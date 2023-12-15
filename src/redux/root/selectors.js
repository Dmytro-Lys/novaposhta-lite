export const selectIsLoading = state => state.root.isLoading;
export const selectError = state => state.root.error.message || state.root.error;
