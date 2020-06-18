import React from 'react';
import Link from "next/link";
import useFormState from "../../common/customHooks/useFormState";
import { FormEvent, useState } from "react";
import { AuthAPI } from "../../api/auth";
import { AxiosResponse, AxiosError } from "axios";
import { RegisterResponse } from "../../api/models/response/auth.response";
import { useRouter } from "next/router";
import InputMask from "react-input-mask";


const Registration = () => {

    const router = useRouter();

    const phone = useFormState('');
    const nickname = useFormState('');
    const email = useFormState('');
    const password = useFormState('');
    const confirmPassword = useFormState('');

    const [error,setError] = useState('');

    const sendCode = () => {
        AuthAPI.sendActivationCode(phone.value.replace(/[\s\-\(\)]+/g, ''))
            .then((response:AxiosResponse) => {
                router.push(`/registration/code/${phone.value.replace(/[\s\-\(\)]+/g, '')}`)
            })
            .catch((err:AxiosError) => console.log(err))
    }

    const register = (e:FormEvent) => {
        e.preventDefault();
        if (confirmPassword.value !== password.value) {
            setError('Confirm your password')
            setTimeout(() => {
                setError('')
            }, 3000)
            return
        }
        AuthAPI.register(phone.value.replace(/[\s\-\(\)]+/g, ''), password.value, email.value, nickname.value)
            .then((response:AxiosResponse<RegisterResponse>) => {
                sendCode();
            })
            .catch((err:AxiosError<any>) => {
                setError(err.response.data.en)
                setTimeout(() => {
                    setError('')
                }, 3000)
            })
    }

    return (
        <div className="auth-component">
            <form className="auth-form" onSubmit={register}>
                <h1>Sign Up</h1>
                <input type="text" name="nickname" className="common-input" {...nickname} placeholder="Nickname" required />
                <InputMask mask="+7(999)999-99-99" {...phone} className="common-input" placeholder="+7(___)___-__-__" required minLength={16} />
                <input type="email" name="email" className="common-input" {...email} placeholder="Email" required />
                <input type="password" className="common-input" {...password} placeholder="Password" required />
                <input type="password" className="common-input" {...confirmPassword} placeholder="Confirm Password" required />
                <button className="common-btn">Register</button>
                { error ? <span className="error">{error}</span> : null }
                <Link href="/authorization">
                    <a className='authorize-link'>or sign in</a>
                </Link>
                <p className="terms">By registering for this website, you accept our <a href="">Terms of use</a> and out <a href="">Privacy Policy</a></p>
            </form>
        </div>
    )
}

export default Registration;