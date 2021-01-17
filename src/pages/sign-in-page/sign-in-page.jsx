import React   from 'react';
import {FormLogin} from "../../components/form-login/form-login";

export const SignInPage = () => {
    return (
        <section className="wrapper-auth d-flex h-100 align-self-center justify-content-center">
            <FormLogin/>
        </section>
    );
}
