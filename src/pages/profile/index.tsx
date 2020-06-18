import React, { useState, FormEvent, useEffect } from 'react';
import styles from './Profile.module.scss';
import Link from 'next/link';
import { ProfileAPI } from '../../api/profile';
import { ProfileResponse } from '../../api/models/response/profile.response';
import { AxiosResponse, AxiosError } from 'axios';
import useFormState from '../../common/customHooks/useFormState';
import { setMaterials } from '../../store/actions/materials-actions';
import { LessonsAPI } from '../../api/lessons';
import { MaterialsResponse } from '../../api/models/response/materials.response';

const Profile = ({store}) => {

    const materialsState = store.getState().MaterialsReducer;
    const [lessonsURL, setLessonURL] = useState('')

    const [avatar, setAvatarState] = useState(null);
    const profileData = {
        nickName: useFormState(''),
        email: useFormState(''),
        // vk: useFormState(''),
        // facebook: useFormState(''),
        // instagram: useFormState(''),
        // twitch: useFormState('')
    }

    const setLocalState = (profile: ProfileResponse) => {
        profileData.nickName.onChange({target: {value: profile.nickName}})
        profileData.email.onChange({target: {value: profile.email}})
        // profileData.vk.onChange({target: {value: profile.vk}})
        // profileData.facebook.onChange({target: {value: profile.facebook}})
        // profileData.instagram.onChange({target: {value: profile.instagram}})
        // profileData.twitch.onChange({target: {value: profile.twitch}})
    }


    const getProfile = () => {
        ProfileAPI.getProfileData()
            .then((response:AxiosResponse<ProfileResponse>) => {
                setAvatarState(response.data.avatar)
                setLocalState({...response.data})
            })
            .catch((err:AxiosError) => console.log(err))
    }

    const onSelectFile = (e:any) => {
        if (e.target.files && e.target.files[0]) {
            const form = new FormData();
            form.append('file', e.target.files[0]);
            ProfileAPI.setAvatar(form)
                .then((response:AxiosResponse<ProfileResponse>) => {
                    setAvatarState(response.data.avatar)
                    const user = JSON.parse(localStorage.getItem('user'))
                    localStorage.setItem('user', JSON.stringify({...user, avatar: response.data.avatar}))
                })
                .catch((err:AxiosError) => console.log(err))
        }
    }

    const editProfile = (e:FormEvent) => {
        e.preventDefault();
        ProfileAPI.editProfileData({
                nickName: profileData.nickName.value,
                email: profileData.email.value,
                // facebook: profileData.facebook.value,
                // vk: profileData.vk.value,
                // instagram: profileData.instagram.value,
                // twitch: profileData.twitch.value
            }).then((response:AxiosResponse<ProfileResponse>) => {
                const user = JSON.parse(localStorage.getItem('user'))
                localStorage.setItem('user', JSON.stringify({...user, nickName:response.data.nickName}))
            }).catch((err:AxiosError) => console.log(err))
    }

    const getCourse = () => {
        LessonsAPI.getMaterials()
            .then((response:AxiosResponse<MaterialsResponse[]>) => {
                store.dispatch(setMaterials(response.data))
                setLessonURL('/lesson/' + response.data[0].id)
            }).catch((err:AxiosError) => {
                console.log(err)
            });
    }

    useEffect(() => {
        !materialsState ? getCourse() : null;
        avatar === null ? getProfile() : null;
        !lessonsURL && materialsState ? setLessonURL('/lesson/' + materialsState[0].id) : null
    })

    return (
        <div className={styles.profile}>
            <h1>Profile</h1>
            <form className={styles['profile-form']} onSubmit={editProfile}>
                <div className={styles['avatar-container']}>
                    <img src={ avatar ? 'http://194.177.23.9:577/' + avatar : '/static/images/avatar.svg'} className={styles.avatar} />
                    <button type="button" className={styles['change-photo-btn']}>
                        Change photo
                        <input type="file" accept="image/x-png,image/gif,image/jpeg" onChange={onSelectFile} />
                    </button>
                    <Link href={lessonsURL}>
                        <button className={styles['courses-link'] + ' common-btn'}>Мои курсы</button>
                    </Link>
                </div>
                <fieldset>
                    <input type="text" className="common-input" {...profileData.nickName} placeholder="Your Nickname" />
                    <input type="text" className="common-input" {...profileData.email} placeholder="Your Email" />
                    {/* <div className={'social-input ' + styles.social}>
                        <img src="/static/images/facebook.svg" alt=""/>
                        <input type="text" className="common-input" {...profileData.facebook} placeholder="Facebook" />
                    </div>
                    <div className={'social-input ' + styles.social}>
                        <img src="/static/images/vk.svg" alt=""/>
                        <input type="text" className="common-input" {...profileData.vk} placeholder="http://vk.bobik.com" />
                    </div>
                    <div className={'social-input ' + styles.social}>
                        <img src="/static/images/instagram.svg" alt=""/>
                        <input type="text" className="common-input" {...profileData.instagram} placeholder="Instagram" />
                    </div>
                    <div className={'social-input ' + styles.social}>
                        <img src="/static/images/twitch.svg" alt=""/>
                        <input type="text" className="common-input" {...profileData.twitch} placeholder="Twitch" />
                    </div> */}
                    <button type="submit" className="purple-btn">Save</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Profile;