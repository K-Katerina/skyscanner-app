import {Link} from "react-router-dom";
import {AppRoute} from "../../App";
import React from "react";
import {logout} from "../../store/actions/actions";
import {useDispatch, useSelector} from "react-redux";

export const Header = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    const handleLogoutButtonClick = () => {
        dispatch(logout());
    }

    return (
        <header className="d-flex justify-content-end p-4">
            <button type="button" className="btn btn-link text-decoration-none" onClick={() => handleLogoutButtonClick()}>
                <Link to={AppRoute.LOGIN}  className="text-primary fw-bold text-decoration-none">{isLoggedIn ? 'Выйти' : 'Войти'}&nbsp;</Link>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H8" stroke="#1157A7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 16L20 11L15 6" stroke="#1157A7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 11H8" stroke="#1157A7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </header>
    )
}
