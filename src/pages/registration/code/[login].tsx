import React, { useEffect } from 'react';
import useFormState from "../../../common/customHooks/useFormState"
import { FormEvent, useState } from "react"
import { AuthAPI } from "../../../api/auth"
import { useRouter } from "next/router"
import { AxiosResponse, AxiosError } from "axios"
import { LessonsAPI } from '../../../api/lessons';
import { MaterialsResponse } from '../../../api/models/response/materials.response';


const ActivationCode = () => {
    const code = useFormState('')
    const router = useRouter();

    const [error,toggleError] = useState(false);

    const [lessonsURL, setLessonURL] = useState('')

    const getCourse = () => {
        LessonsAPI.getNotAuthorizeMaterials()
            .then((response:AxiosResponse<MaterialsResponse[]>) => {
                setLessonURL('/lesson/' + response.data[0].id)
            }).catch((err:AxiosError) => {
                console.log(err)
            });
    }

    const checkCode = (e:FormEvent) => {
        e.preventDefault();
        AuthAPI.checkCode(router.query.login as string, code.value)
            .then((response:AxiosResponse) => {
                console.log(response.data)
                localStorage.setItem('token', JSON.stringify(response.data.token))
                localStorage.setItem('user', JSON.stringify(response.data.user))
                router.push(lessonsURL)
            })
            .catch((err:AxiosError) => {
                toggleError(true)
                setTimeout(() => {
                    toggleError(false)
                }, 3000)
            })
    }

    useEffect(() => {
        !lessonsURL ? getCourse() : null;
    })

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