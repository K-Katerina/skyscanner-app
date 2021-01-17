import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../../store/actions/actions";


export const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailInvalid = validateField('email', email);
        setErrorEmail(emailInvalid);
        const passwordInvalid = validateField('password', password);
        setErrorPassword(passwordInvalid);
        if (!emailInvalid && !passwordInvalid) {
            dispatch(login({email, password}));
        }
    };

    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case 'email':
                return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                    ? '' : 'Email is invalid';
            case 'password':
                return value.match(/^[A-Za-z0-9]+$/i) && value.length >= 8
                    ? '' : 'Password is invalid';
            default:
                break;
        }
    }

    return (
        <form className="align-self-center bg-white p-5 shadow border-light" style={{'width': '400px', 'borderRadius': '1.5rem'}} noValidate onSubmit={(event) => handleSubmit(event)}>
        <div className="d-flex flex-column">
            <h4 className="align-self-center">Simple Flight Check</h4>
            <div className="d-flex flex-column">
                <label htmlFor="email" className="form-label">
                    Логин:
                    <input id="email" value={email} className={`${errorEmail && 'is-invalid'} form-control`} type="email" onChange={(event) => {
                        setErrorEmail('');
                        setEmail(event.target.value)
                    }}/>

                    <p className={`${errorEmail && 'invalid-feedback'}`}>{errorEmail}</p>
                </label>
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="password" className="form-label">
                    Пароль:
                    <input id="password" value={password} className={`${errorPassword && 'is-invalid'} form-control`}  type="password" onChange={(event) => {
                        setErrorPassword('');
                        setPassword(event.target.value)
                    }}/>
                    <p className={`${errorPassword && 'invalid-feedback'}`}>{errorPassword}</p>
                </label>
            </div>
            <button type="submit" className="btn btn-primary align-self-end">Войти</button>
        </div>
    </form>
    );
}