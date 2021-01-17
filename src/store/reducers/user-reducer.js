import {updateElementInArray} from "../../utils";

const initialState = {
    isLoggedIn: !!localStorage.getItem('isLoggedIn'),
    favoriteIds: []
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
        case 'UPDATE_FAVORITE':
            return {
                ...state,
                favoriteIds: updateElementInArray(action.payload, state.favoriteIds),
            };
        default:
            return state;
    }
};
