import React from 'react';
import styles from './Main.module.scss';
import { useEffect, useState } from "react";
import LessonCard from '../../components/ui/LessonCard/LessonCard';
import Slider from '../../components/ui/Slider/Slider';
import Comment from '../../components/ui/Comment/Comment';
import { LessonsAPI } from '../../api/lessons';
import checkLoggedIn from '../../common/checkLoggedIn';
import { AxiosResponse, AxiosError } from 'axios';
import { MaterialsResponse } from '../../api/models/response/materials.response';
import { setMaterials } from '../../store/actions/materials-actions';
import { LessonsResponse } from '../../api/models/response/lessons.response';
import { setLessons } from '../../store/actions/lessons-actions';
import Link from 'next/link';
import Head from 'next/head';
import pay from '../../../static/cloudpayments.js';
import { OrderAPI } from '../../api/order';
import { useRouter } from 'next/router';

let testLessons = [
    {name: 'Введение', description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'},
    {name: 'Введение', description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'},
    {name: 'Введение', description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'},
    {name: 'Введение', description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'},
    {name: 'Введение', description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'},
    {name: 'Введение', description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'}
]

const Main = ({pageWidth, store}) => {

    const router = useRouter();

    const materialsState = store.getState().MaterialsReducer;
    const lessonsState = store.getState().LessonsReducer;

    const [lessonsURL, setLessonURL] = useState('')

    const [responseModal, setResponseModal] = useState({error: false, response: ''})

    const [ballShift, changeBallShift] = useState(0);
    const listener = (e:any) => {
        if(pageYOffset < 600) {
            changeBallShift(pageYOffset / 5)
        }
    }

    const createOrder = () => {
        OrderAPI.createOrder(materialsState[0].id)
            .then((response:AxiosResponse) => {
                setResponseModal({error: false, response: 'Заказ получен'})
                setTimeout(() => {
                    setResponseModal({error: false, response: ''})
                    router.push(lessonsURL);
                }, 3000)
            })
            .catch((err:AxiosError) => console.log(err))
    }

    const buyCourse = () => {
        checkLoggedIn() ?
            pay(materialsState[0]?.price, createOrder) :
            (() => {
                router.push('/registration')
                // setResponseModal({error: true, response: 'Войдите для совершения покупки'})
                // setTimeout(() => setResponseModal({error: false, response: ''}), 3000)
            })()
    }

    const getCourse = () => {
        ( checkLoggedIn() ? 
            LessonsAPI.getMaterials() : 
            LessonsAPI.getNotAuthorizeMaterials()
        ).then((response:AxiosResponse<MaterialsResponse[]>) => {
            store.dispatch(setMaterials(response.data))
            getLessons(response.data[0].id);
            setLessonURL('/lesson/' + response.data[0].id)
        }).catch((err:AxiosError) => {
            console.log(err)
        });
    }

    const getLessons = (materialID:number) => {
        ( checkLoggedIn() ? 
            LessonsAPI.getLessons(materialID) : 
            LessonsAPI.getNotAuthorizeLessons(materialID)
        ).then((response:AxiosResponse<LessonsResponse[]>) => {
            store.dispatch(setLessons(response.data))
        }).catch((err:AxiosError) => {
            console.log(err)
        });
    }
    
    useEffect(() => {
        !materialsState ? getCourse() : null;
        !lessonsURL && materialsState ? setLessonURL('/lesson/' + materialsState[0].id) : null
        document.body.scrollTop < 1 ? document.addEventListener('scroll', listener) : document.removeEventListener('scroll', listener);
        return () => {
            document.body.scrollTop > 1 ? document.removeEventListener('scroll', listener) : null
        }
    })
    
    return (
        <>
            <Head>
                <title>Main Page</title>
                <script src="https://widget.cloudpayments.ru/bundles/cloudpayments"></script>
            </Head>
            { responseModal.response ?
                <div className="response-modal"
                    style={{
                        borderColor: responseModal.error ? 'rgb(231, 102, 102)' : '#5BE066'
                    }}
                >
                    <img src={responseModal.error ? '/static/images/warning.svg' : '/static/images/success.svg'} alt=""/>
                    <span>{responseModal.response}</span>
                </div> :
                null
            }
            <header className={styles.header}>
                { pageWidth > 768 ? 
                    <div className={styles.headerBg}>
                        <img src="static/images/female.svg" alt=""/>
                        <img src="static/images/ball.svg" alt="" style={{
                            right: `${120+ballShift}px`,
                            transform: `rotate(${-ballShift*1.5}deg)`
                        }} />
                        <img src="static/images/male.svg" alt=""/>
                    </div> : null
                }
                <div className={styles.heading}>
                    <h3>Teaches FIFA 20</h3>
                    <h1>cyberclass: FIFA 20</h1>
                    <span className="topSeller">Top seller</span>
                    <img src="static/images/fifa20.svg" alt=""/>
                </div>
            </header>
            <div className="what">
                <div className="what__content">
                    <h2 className="what__title">ЧЕМУ ВЫ НАУЧИТЕСЬ?</h2>
                    <h3 className="what__subtitle">Имейте в виду, что это лишь первая часть из 5, и начнем мы с основ</h3>
                    <div className="what__group">
                        <div className="what__block">
                            <h3 className="what__block-title">УПРАВЛЕНИЕ</h3>
                            <p className="what__block-text">Настройте игру по параметрам профессиональных киберспортсменов</p>
                        </div>
                        <div className="what__block">
                            <h3 className="what__block-title">игра вратарём</h3>
                            <p className="what__block-text">Ключевые фишки игры вратарем.
                                Мы научим отбивать даже “мёртвые” удары!</p>
                        </div>
                        <div className="what__block">
                            <h3 className="what__block-title">схемы</h3>
                            <p className="what__block-text">Самые эффективные формации FIFA 20 и перестроения в зависимости от счёта</p>
                        </div>
                        <div className="what__block">
                            <h3 className="what__block-title">задачи игрокам</h3>
                            <p className="what__block-text">Каждая установка имеет свой эффект.
                                И ты узнаешь, как сделать так, чтобы команда работала на 100%</p>
                        </div>
                        <div className="what__block">
                            <h3 className="what__block-title">защита</h3>
                            <p className="what__block-text">Подбор лучших защитников и разбор самых эффективных тактик при обороне</p>
                        </div>
                        <div className="what__block">
                            <h3 className="what__block-title">контроль мяча</h3>
                            <p className="what__block-text">Владение = полный контроль над игрой, даже при высоком прессинге соперника</p>
                        </div>
                    </div>
                </div>
                <div className="what__buy">
                    <div className="what__price-wrap">
                        <span className="what__price-finish">599₽</span>
                        <span className="what__price-full">999₽</span>
                        <span className="what__price-sale">Save 40%</span>
                    </div>
                    <div className="what__offer">SPECIAL OFFER</div>
                    <div className="what__btn-group">
                        <a className="what__btn common-btn" onClick={buyCourse}>Buy course (₽{materialsState && materialsState[0]?.price}.00)</a>
                        <Link href={lessonsURL}>
                            <a className="what__btn transparent-btn">Watch free episodes</a>
                        </Link>
                    </div>
                    <span className="what__guard">
                        Satisfaction guaranteed
                    </span>
                </div>
            </div>
            <div className="content-container">
                <div className="course">
                    <div className="course__wrap">
                        <h2 className="course__title">ОБУЧЕНИЕ ОТ ЛУЧШИХ – это:</h2>
                        <div className="course__group">
                            <div className="course__block">
                                <div className="course__block-icon">
                                    <img src="/static/images/course/1.svg" alt=""/>
                                </div>
                                <h4 className="course__block-title">НАСТРАИВАТЬ ИГРУ КАК ПРО</h4>
                                <p className="course__block-text">Правильные настройки помогут лучше чувствовать и понимать механику игры</p>
                            </div>
                            <div className="course__block">
                                <div className="course__block-icon">
                                    <img src="/static/images/course/2.svg" alt=""/>
                                </div>
                                <h4 className="course__block-title">ИГРАТЬ В ЗАЩИТЕ КАК ПРО</h4>
                                <p className="course__block-text">Эффективная игра в обороне – ключ для ваших будущих побед!</p>
                            </div>
                            <div className="course__block">
                                <div className="course__block-icon">
                                    <img src="/static/images/course/3.svg" alt=""/>
                                </div>
                                <h4 className="course__block-title">ВОЗМОЖНОСТЬ СТАТЬ ПРО</h4>
                                <p className="course__block-text">Наш курс поможет вам добиться лучших результатов на любом уровне!</p>
                            </div>
                        </div>
                        <div className="course__desc">
                            <h3 className="course__desc-title">Описание курса</h3>
                            <p className="course__desc-text">
                                Самый сильный киберспортсмен России Антон Кленов [KLENOFF] и лучший автор гайдов по FIFA 
                                Артём Красулин [MOZZ] поделятся с вами самой ценной информацией и фишками по ФИФА.
                                Мы поможем правильно настроить игру, подобрать лучших игроков
                                на каждую позицию и детально разобрать ваши действия в защите, при игре вратарём,
                                а также расскажем ключевые моменты по контролю мяча.
                                {/* {materialsState && materialsState[0]?.description} */}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.firstPart}>
                    <h2>ЧТО ВАС ЖДЕТ В ПЕРВОЙ ЧАСТИ?</h2>
                    <div className={styles.cardsContainer}>
                        { lessonsState?.slice(0,3).map((item, index) => <LessonCard lesson={item} key={index} />)}
                    </div>
                    <Link href={lessonsURL}>
                        <a className="common-btn">Show more</a>
                    </Link>
                </div>
                {/* <h2 className={styles['section-heading']}>TESTIMONIALS</h2>
                <Slider itemsCount={9}>
                    { [1,2,3,4,5,6,7,8,9].map(item => <Comment comment={item} key={item} />) }
                </Slider> */}
                <h2 className={styles['section-heading']}>НОВЫЙ КУРС – КАЖДЫЙ МЕСЯЦ</h2>
                <Slider itemsCount={testLessons.length}>
                    { testLessons.map((item:LessonsResponse, index) => <LessonCard lesson={item} key={index} />) }
                </Slider>
            </div>
            <div className={styles.ready}>
                <div className={styles.ready__wrap}>
                    <h2 className={styles.ready__title}>ГОТОВ НАЧАТЬ?</h2>
                    <h3 className={styles.ready__subtitle}>УЧИСЬ У ЛУЧШИХ В МИРЕ!</h3>
                    <div className={styles.ready__icon}>
                        <img src="/static/images/fifa20.svg" alt=""/>
                    </div>
                    <Link href="/registration">
                        <a className={styles.ready__btn + ' common-btn'}>Get started</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Main;