export const updateQuotesResultAction = (payload) => ({
    type: 'UPDATE_RESULTS',
    payload: payload
});

export const getErrorAction = () => ({
    type: 'GET_ERROR'
});

export const getQuotesResultCompletedAction = (payload) => ({
    type: 'GET_RESULTS_SUCCESS',
    payload: payload
});

export const login = ({username, password}) => ({
    type: 'LOGIN',
    payload: {
        username,
        password
    }
});

export const loginSuccess = () => ({
    type: 'LOGIN_SUCCESS'
});

export const loginError = () => ({
    type: 'LOGIN_ERROR'
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const logoutSuccess = () => ({
    type: 'LOGOUT_SUCCESS'
});

export const updateFavorites = (payload) => ({
    type: 'UPDATE_FAVORITE',
    payload: payload
});

export const updateDate = (payload) => ({
    type: 'UPDATE_SELECTED_DATE',
    payload: payload
});
