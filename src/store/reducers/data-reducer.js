const initialState = {
    browseQuotesResult: null,
    loading: true
}

export const quotesResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RESULTS':
            return {
                ...state,
                loading: true
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
        default:
            return state;
    }
};
