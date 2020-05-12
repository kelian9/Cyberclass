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

let testLessons = [
    {name: 'Введение', description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'},
    {name: 'Введение', description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'},
    {name: 'Введение', description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'},
    {name: 'Введение', description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'},
    {name: 'Введение', description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'},
    {name: 'Введение', description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'},
    {name: 'Введение', description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'},
    {name: 'Введение', description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'},
    {name: 'Введение', description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'}
]

const Lesson = ({store}) => {

    const router = useRouter();

    const materialState = store.getState().MaterialsReducer?.find(({id}) => id === +router.query.materialID);

    const lessonsState = store.getState().LessonsReducer;
    const [selectedLesson, selectLesson] = useState(null);

    const rateMaterial = (type:number) => {
        checkLoggedIn() && !materialState.myLike && !materialState.myDislike ?
            RatingAPI
                .rateMaterial(+router.query.materialID, type)
                .then((response:AxiosResponse) => {
                    store.dispatch(rateMaterialState({id:+router.query.materialID, ratingType:type}))
                    console.log(response)
                })
                .catch((err:AxiosError) => console.log(err)) : 
            null
    }

    const getLessons = (materialID:number) => {
        ( checkLoggedIn() ? 
            LessonsAPI.getLessons(materialID) : 
            LessonsAPI.getNotAuthorizeLessons(materialID)
        ).then((response:AxiosResponse<LessonsResponse[]>) => {
            store.dispatch(setLessons(response.data))
            selectLesson(response.data[0])
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
            getLessons(response.data[0].id);
        }).catch((err:AxiosError) => {
            console.log(err)
        });
    }

    useEffect(() => {
        !materialState ? getCourse() : null;
        lessonsState.length == 0 ? getLessons(+router.query.materialID) : null;
        !selectedLesson ? selectLesson(lessonsState[0]) : null;
        // window.location.replace(selectedLesson?.url + '&output=embed')
    })

    return (
        <>
            <div className={styles['selected-lesson']}>
                { selectedLesson?.url ? 
                    <iframe src={selectedLesson?.url} allow="autoplay; fullscreen; encrypted-media; gyroscope; picture-in-picture" frameBorder="0"></iframe> :
                    <div className={styles['selected-lesson_preview']}>
                        <img src={selectedLesson?.preview} alt="" />
                        <img src="/static/images/play-circle.svg" alt="" className={styles['play-icon']} />
                        <span className={styles.duration}>{selectedLesson?.duration}:00</span>
                        <span className={styles['duration-line']}></span>
                    </div> 
                }
                {/* <iframe src="https://www.youtube.com/embed/j44QIflzGFg" width="100%" height="691px" frameBorder="0"
                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                <div className={styles['selected-lesson_info']}>
                    <div className={styles['heading-row']}>
                        <img src="/static/images/fifa20.svg" alt=""/>
                        <a className="transparent-btn">Get access to all cources</a>
                    </div>
                    <h1>0{selectedLesson?.number}: {selectedLesson?.name}</h1>
                    <h2>от mozz и klenoff</h2>
                    <p className={styles.rating}>Rate this&nbsp;&nbsp;&nbsp;
                        {materialState?.likeCount} <img src="/static/images/like.svg" alt="" onClick={() => rateMaterial(0)} className={materialState?.myLike ? styles['rated'] : null} />&nbsp;&nbsp;
                        {materialState?.dislikeCount} <img src="/static/images/like.svg" alt="" onClick={() => rateMaterial(1)} className={materialState?.myDislike ? styles['rated'] : null} /></p>
                    <p>{selectedLesson?.description}</p>
                    <button className="common-btn">Open workbook</button>
                </div>
            </div>
            <div className="content-container">
                <div className={styles.tab}>
                    <div className={styles.tab_btns}>
                        <button>Free lessons</button>
                        <button>Buy lessons</button>
                    </div>
                    <div className={styles.tab_view}>
                        { lessonsState?.map((item,index) => <LessonCard lesson={item}  selectLesson={(id) => selectLesson(lessonsState.find(item => item.id === id))} key={index} />) }
                    </div>
                    { lessonsState?.length > 6 ? <button className="common-btn">Show more</button> : null}
                </div>
            </div>
        </>
    )
}

export default Lesson;