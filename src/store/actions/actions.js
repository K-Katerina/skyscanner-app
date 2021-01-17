export const getQuotesResultAction = () => ({
  type: 'GET_RESULTS'
});

export const getErrorAction = () => ({
    type: 'GET_ERROR'
});

export const getQuotesResultCompletedAction = (browseQuotesResult) => ({
    type: 'GET_RESULTS_SUCCESS',
    payload: browseQuotesResult
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
