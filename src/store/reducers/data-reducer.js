import moment from "moment";

const initialState = {
    browseQuotesResult: null,
    loading: true,
    selectedDate: moment(new Date()).format('YYYY-MM-DD')
}

export const quotesResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_RESULTS':
            return {
                ...state,
                loading: true,
                selectedDate: moment(action.payload).format('YYYY-MM-DD')
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
