export const getQuotesResultAction = () => ({
  type: 'GET_RESULTS'
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

export const updateDate = (payload) => ({
    type: 'UPDATE_DATE',
    payload: payload
});

export const updateFavorites = (payload) => ({
    type: 'UPDATE_FAVORITE',
    payload: payload
});
