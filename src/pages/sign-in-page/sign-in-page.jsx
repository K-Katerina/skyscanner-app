import React, { useState }  from 'react';
import {useDispatch} from "react-redux";
import {login} from "../../store/actions/actions";

export const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login({email, password}));
    };

    return (
        <section className="wrapper-auth d-flex h-100 align-self-center justify-content-center" >
            <form className="align-self-center bg-white p-5 shadow border-light" style={{'width': '400px', 'borderRadius': '1.5rem'}} noValidate onSubmit={(event) => handleSubmit(event)}>
                <div className="d-flex flex-column">
                    <h4 className="align-self-center">Simple Flight Check</h4>
                    <div className="d-flex flex-column">
                        <label htmlFor="email" className="form-label">
                            Логин:
                            <input id="email" className="form-control" type="email" onChange={(event) => setEmail(event.target.value)}/>
                        </label>
                    </div>
                    <div className="d-flex flex-column">
                        <label htmlFor="password" className="form-label">
                            Пароль:
                            <input id="password" className="form-control" type="password" onChange={(event) => setPassword(event.target.value)}/>
                    </label>
                    </div>
                <button type="submit" className="btn btn-primary align-self-end">Войти</button>
                </div>
            </form>
        </section>
    );
}
