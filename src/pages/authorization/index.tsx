import React, { useState, useEffect } from 'react';
import Link from "next/link";
import styles from './Authorization.module.scss';
import useFormState from "../../common/customHooks/useFormState";
import { AuthAPI } from "../../api/auth";
import { AxiosResponse, AxiosError } from "axios";
import { AuthResponse } from "../../api/models/response/auth.response";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import { setUser } from "../../store/actions/user-actions";
import InputMask from "react-input-mask";
import { LessonsAPI } from '../../api/lessons';
import { MaterialsResponse } from '../../api/models/response/materials.response';
import { setMaterials } from '../../store/actions/materials-actions';


const Authorization = ({store}) => {

    const login = useFormState('');
    const password = useFormState('');

    const [error,setError] = useState('');

    const router = useRouter();

    const authorize = (e:FormEvent) => {
        e.preventDefault();
        AuthAPI.auth(login.value.replace(/[\s\-\_\(\)]+/g, ''), password.value)
            .then((response:AxiosResponse<AuthResponse>) => {
                router.push('/registration/code/' + login.value.replace(/[\s\-\_\(\)]+/g, ''));
            })
            .catch((err:AxiosError) => {
                setError(err.response.data.en)
                setTimeout(() => {
                    setError('')
                }, 3000)
            })
    }
    
    return (
        <div className="auth-component">
            <form className="auth-form" onSubmit={authorize}>
                <h1>Sign In</h1>
                <InputMask mask="+9(999)999-99-9999" {...login} className="common-input" placeholder="+" />
                <input type="text" className="common-input" {...password} placeholder="Password" />
                <button className="common-btn">Log In</button>
                { error ? <span className="error">{error}</span> : null }
                <Link href="/registration">
                    <a className='create-account-link'>or create new account</a>
                </Link>
            </form>
            {/* <p className="terms">By registering for this website, you accept our <a href="">Terms of use</a> and out <a href="">Privacy Policy</a></p> */}
        </div>
    )
}

export default Authorization;