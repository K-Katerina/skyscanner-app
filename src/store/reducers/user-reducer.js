const initialState = {
    isLoggedIn: !!localStorage.getItem('isLoggedIn')
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoggedIn: true
            };
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                isLoggedIn: false
            };
        default:
            return state;
    }
};
