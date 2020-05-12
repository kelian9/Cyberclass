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


const Authorization = ({store}) => {

    const login = useFormState('');
    const password = useFormState('');

    const router = useRouter();

    const authorize = (e:FormEvent) => {
        e.preventDefault();
        AuthAPI.auth(login.value.replace(/[\s\-\(\)]+/g, ''), password.value)
            .then((response:AxiosResponse<AuthResponse>) => {
                store.dispatch(setUser(response.data.user))
                localStorage.setItem('token', JSON.stringify(response.data.token));
                router.push('/main')
                console.log('done')
            })
            .catch((err:AxiosError) => console.log(err))
    }
    
    return (
        <div className="auth-component">
            <form className="auth-form" onSubmit={authorize}>
                <h1>Sign In</h1>
                <InputMask mask="+7(999)999-99-99" {...login} className="common-input" placeholder="+7(___)___-__-__" />
                <input type="text" className="common-input" {...password} placeholder="Password" />
                <button className="common-btn">Log In</button>
                <Link href="/registration">
                    <a className='create-account-link'>or create new account</a>
                </Link>
            </form>
            {/* <p className="terms">By registering for this website, you accept our <a href="">Terms of use</a> and out <a href="">Privacy Policy</a></p> */}
        </div>
    )
}

export default Authorization;