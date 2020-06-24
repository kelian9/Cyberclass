import React from 'react';
import styles from './LessonCard.module.scss';
import { useRef } from 'react';
import { LessonsResponse } from '../../../api/models/response/lessons.response';


const LessonCard = ({lesson, selectLesson, previewState}:{lesson: LessonsResponse, selectLesson?:Function, previewState?: boolean}) => {
    const frameRef = useRef();
    
    return(
        <div className={styles.lessonCard} onClick={() => selectLesson ? selectLesson(lesson.id) : null}>
            { !previewState ? <img src="/static/images/play-circle.svg" alt="" className={styles['play-icon']} /> : null }
            {lesson.preview ? <img src={lesson.preview.slice(0,7) !== '/static' ? 'http://194.177.23.9:577/' + lesson.preview : lesson.preview} alt=""/> : <div className={styles.emptyPath}></div>}
            {
                !previewState ?
                    <React.Fragment>
                        <span className={styles.duration}>{lesson.duration}:00</span>
                        <span className={styles['duration-line']}></span>
                    </React.Fragment> :
                    null
            }
            <h3>{lesson.name}</h3>
            <p>{lesson.description}</p>
        </div>
    )
}

export default LessonCard;