import useFormState from "../../../common/customHooks/useFormState"
import { FormEvent, useState } from "react"
import { AuthAPI } from "../../../api/auth"
import { useRouter } from "next/router"
import { AxiosResponse, AxiosError } from "axios"


const ActivationCode = () => {
    const code = useFormState('')
    const router = useRouter();

    const [error,toggleError] = useState(false);

    const checkCode = (e:FormEvent) => {
        e.preventDefault();
        AuthAPI.checkCode(router.query.login as string, code.value)
            .then((response:AxiosResponse) => {
                console.log(response.data)
                router.push('/authorization')
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
            <form className="auth-form" onSubmit={checkCode}>
                <h1>Activation Code</h1>
                <input type="text" {...code}  className="common-input" placeholder="Code" />
                <button type="submit" className="common-btn">Send</button>
                { error ? <span className="error">Incorrect code</span> : null }
            </form>
        </div>
    )
}

export default ActivationCode;