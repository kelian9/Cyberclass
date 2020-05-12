import styles from './LessonCard.module.scss';
import { useRef } from 'react';
import { LessonsResponse } from '../../../api/models/response/lessons.response';


const LessonCard = ({lesson, selectLesson}:{lesson: LessonsResponse, selectLesson?:Function}) => {
    const frameRef = useRef();
    
    return(
        <div className={styles.lessonCard} onClick={() => selectLesson ? selectLesson(lesson.id) : null}>
            <img src="/static/images/play-circle.svg" alt="" className={styles['play-icon']} />
            {lesson.preview ? <img src={lesson.preview} alt=""/> : <div className={styles.emptyPath}></div>}
            <span className={styles.duration}>{lesson.duration}:00</span>
            <span className={styles['duration-line']}></span>
            <h3>{lesson.name}</h3>
            <p>{lesson.description}</p>
        </div>
    )
}

export default LessonCard;