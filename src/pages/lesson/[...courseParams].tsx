import React from 'react';
import styles  from './Lesson.module.scss';
import LessonCard from "../../components/ui/LessonCard/LessonCard";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import checkLoggedIn from '../../common/checkLoggedIn';
import { LessonsAPI } from '../../api/lessons';
import { AxiosResponse, AxiosError } from 'axios';
import { LessonsResponse } from '../../api/models/response/lessons.response';
import { setLessons } from '../../store/actions/lessons-actions';
import { RatingAPI } from '../../api/rating';
import { MaterialsResponse } from '../../api/models/response/materials.response';
import { setMaterials, rateMaterialState } from '../../store/actions/materials-actions';
import { OrderAPI } from '../../api/order';
import pay from '../../../static/cloudpayments';
import Head from 'next/head';

const Lesson = ({store}) => {

    const router = useRouter();

    const materialState = store.getState().MaterialsReducer?.find(({id}) => id === +router.query.courseParams[0]);
    const [material, setMaterialState] = useState(null)
    const [lessons, setLessonsState] = useState(null)

    const lessonsState = store.getState()?.LessonsReducer;
    const [selectedLesson, selectLesson] = useState(null);
    const [lessonsCount, setLessonsCount] = useState(6);

    const [tab, changeTab] = useState(0);

    const setLesson = (id:number) => {
        selectLesson(lessonsState?.find(item => item.id === id))
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const rateMaterial = (type:number) => {
        checkLoggedIn() && !material.myLike && !material.myDislike ?
            RatingAPI
                .rateMaterial(+router.query.materialID, type)
                .then((response:AxiosResponse) => {
                    store.dispatch(rateMaterialState({id:+router.query.materialID, ratingType:type}))
                })
                .catch((err:AxiosError) => console.log(err)) : 
            null
    }

    const getPaidLessons = (matId:number = material?.id) => {
        if(localStorage.getItem('token') == undefined) {
            return;
        }
        LessonsAPI.getPaidLessons(matId)
            .then((response:AxiosResponse<LessonsResponse[]>) => {
                store.dispatch(setLessons(response.data))
                setLessonsState(response.data)
                selectLesson(response.data[0])
                changeTab(1)
            }).catch((err:AxiosError) => {
                console.log(err)
            })
    }

    const getLessons = (materialID:number) => {
        ( checkLoggedIn() ? 
            LessonsAPI.getLessons(materialID) : 
            LessonsAPI.getNotAuthorizeLessons(materialID)
        ).then((response:AxiosResponse<LessonsResponse[]>) => {
            store.dispatch(setLessons(response.data))
            setLessonsState(response.data)
            changeTab(0)
        }).catch((err:AxiosError) => {
            console.log(err)
        });
    }

    const getCourse = () => {
        ( checkLoggedIn() ? 
            LessonsAPI.getMaterials() : 
            LessonsAPI.getNotAuthorizeMaterials()
        ).then((response:AxiosResponse<MaterialsResponse[]>) => {
            store.dispatch(setMaterials(response.data))
            setMaterialState(response.data[0])
            getLessons(+router.query.courseParams[0])
        }).catch((err:AxiosError) => {
            console.log(err)
        });
    }

    const createOrder = () => {
        OrderAPI.createOrder(material.id)
            .then((response:AxiosResponse) => {
                setTimeout(() => {
                    getPaidLessons(material.id)
                }, 3000)
            })
            .catch((err:AxiosError) => console.log(err))
    }

    const buyCourse = () => {
        checkLoggedIn() ?
            pay(material?.price, createOrder) :
            (() => {
                router.push('/registration')
                // setResponseModal({error: true, response: 'Войдите для совершения покупки'})
                // setTimeout(() => setResponseModal({error: false, response: ''}), 3000)
            })()
    }

    useEffect(() => {
        !material ? getCourse() : null;
        if(!selectedLesson) {
            router.query.courseParams[1] === undefined ? selectLesson(lessonsState[0]) : setLesson(+router.query.courseParams[1])
        }
        // !selectedLesson && router.query.courseParams[1] === undefined ? selectLesson(lessonsState[0]) : null;
        // if(router.query.courseParams[1] !== undefined && !selectedLesson) {
        //     selectLesson(+router.query.courseParams[1])
        // } else if (!selectedLesson) {
        //     selectLesson(lessonsState[0].id)
        // }
        // selectedLesson?.url.slice(0,8) + 'player.' + selectedLesson?.url.slice(8,18) + 'video/' + selectedLesson?.url.slice(18)
    })

    return (
        <>
            <Head>
                <title>Lessons</title>
                <script src="https://widget.cloudpayments.ru/bundles/cloudpayments"></script>
            </Head>
            <div className={styles['selected-lesson']}>
                { selectedLesson?.url ? 
                    // <iframe src={selectedLesson?.url} allow="autoplay; fullscreen" frameBorder="0"></iframe>
                    // '//playercdn.cdnvideo.ru/aloha/players/cyberclass_player1.html?source=//cyberclass-cache.cdnvideo.ru/cyberclass/1.%20Osnovi_mst.mp4'
                    <iframe src={selectedLesson?.url} frameBorder="0" scrolling="no" style={{overflow: "hidden"}} allowFullScreen></iframe> :
                    <div className={styles['selected-lesson_preview']}>
                        <img src={selectedLesson?.preview} alt="" />
                        <img src="/static/images/play-circle.svg" alt="" className={styles['play-icon']} />
                        <span className={styles.duration}>{selectedLesson?.duration}:00</span>
                        <span className={styles['duration-line']}></span>
                    </div> 
                }
                <div className={styles['selected-lesson_info']}>
                    <div className={styles['heading-row']}>
                        <img src="/static/images/fifa20.svg" alt=""/>
                        { material && !material.isPaid ? <a onClick={buyCourse} className="transparent-btn">Get access to all cources</a> : null}
                    </div>
                    <h1>0{selectedLesson?.number}: {selectedLesson?.name}</h1>
                    <h2>от mozz и klenoff</h2>
                    <p className={styles.rating}>Rate this&nbsp;&nbsp;&nbsp;
                        {material?.likeCount} <img src="/static/images/like.svg" alt="" onClick={() => rateMaterial(0)} className={material?.myLike ? styles['rated'] : null} />&nbsp;&nbsp;
                        {material?.dislikeCount} <img src="/static/images/like.svg" alt="" onClick={() => rateMaterial(1)} className={material?.myDislike ? styles['rated'] : null} /></p>
                    <p>{selectedLesson?.description}</p>
                    <button className="common-btn">Open workbook</button>
                </div>
            </div>
            {/* <div className="content-container"> */}
                <div className={styles.tab}>
                    <div className={styles.tab_btns}>
                        <button className={ !tab ? styles['tab-btn_active'] : null} onClick={() => getLessons(+router.query.courseParams[0])}>Free lessons</button>
                        <button className={ tab ? styles['tab-btn_active'] : null} onClick={() => getPaidLessons()}>Buy lessons</button>
                    </div>
                    <div className={styles.tab_view}>
                        { lessonsState.length !== 0 ? lessonsState.slice(0, lessonsState.length >= lessonsCount ? lessonsCount : lessonsState.length)?.map((item,index) => <LessonCard lesson={item} selectLesson={setLesson} key={index} /> ) : null }
                    </div>
                    { lessonsState?.length > 6 ? 
                        <button 
                            className="common-btn" 
                            onClick={() => lessonsState.length > lessonsCount ? setLessonsCount(lessonsCount + 3) : setLessonsCount(6)}>
                                {lessonsState.length > lessonsCount ? 'Show more' : 'Hide'}
                        </button> :
                        null
                    }
                </div>
            {/* </div> */}
        </>
    )
}

export default Lesson;