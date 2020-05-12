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
    const password = useFormState('');

    const [error,toggleError] = useState(false);

    const sendCode = () => {
        AuthAPI.sendActivationCode(phone.value)
            .then((response:AxiosResponse) => {
                router.push(`/registration/code/${phone.value}`)
            })
            .catch((err:AxiosError) => console.log(err))
    }

    const register = (e:FormEvent) => {
        e.preventDefault();
        AuthAPI.register(phone.value.replace(/[\s\-\(\)]+/g, ''), password.value)
            .then((response:AxiosResponse<RegisterResponse>) => {
                sendCode();
            })
            .catch((err:AxiosError) => {
                toggleError(true)
                setTimeout(() => {
                    toggleError(false)
                }, 3000)
            })
    }

    return (
        <div className="auth-component">
            <form className="auth-form" onSubmit={register}>
                <h1>Sign Up</h1>
                <InputMask mask="+7(999)999-99-99" {...phone} className="common-input" placeholder="+7(___)___-__-__" />
                <input type="text" className="common-input" {...password} placeholder="Password" />
                <button className="common-btn">Register</button>
                { error ? <span className="error">Incorrect code</span> : null }
                <Link href="/authorization">
                    <a className='authorize-link'>or sign in</a>
                </Link>
            </form>
            <p className="terms">By registering for this website, you accept our <a href="">Terms of use</a> and out <a href="">Privacy Policy</a></p>
        </div>
    )
}

export default Registration;