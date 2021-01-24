const initialState = {
    browseQuotesResult: null,
    loading: true,
    selectedDate: new Date()
}

export const quotesResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_RESULTS':
            return {
                ...state,
                loading: true,
            };
        case 'GET_RESULTS_SUCCESS':
            return {
                ...state,
                loading: false,
                browseQuotesResult: action.payload
            }
        case 'GET_ERROR':
            return {
                ...state,
                loading: false
            }
        case 'UPDATE_SELECTED_DATE':
            return {
                ...state,
                selectedDate: action.payload
            }
        default:
            return state;
    }
};
