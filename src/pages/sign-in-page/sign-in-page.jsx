import React, { useState }  from 'react';
import {useDispatch} from "react-redux";
import {login, logout} from "../../store/actions/actions";

export const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login({email, password}));
    };

    const handleLogoutButtonClick = () => {
        dispatch(logout());
    };

    return (
        <>
            <form noValidate onSubmit={(event) => handleSubmit(event)}>
                <h2>Simple Flight Check</h2>
                <label>
                    Логин:
                    <input type="email" onChange={(event) => setEmail(event.target.value)}/>
                </label>
                <label>
                    Пароль:
                    <input type="password" onChange={(event) => setPassword(event.target.value)}/>
                </label>
                <button type="submit">Войти</button>
                <button type="button" onClick={() => handleLogoutButtonClick()}>Выйти</button>
            </form>
        </>
    );
}
