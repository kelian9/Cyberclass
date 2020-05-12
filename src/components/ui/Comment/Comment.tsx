import React from 'react';
import styles from './Comment.module.scss';

const Comment = ({comment}) => {
    return (
        <div className={styles.quote}>
            <div className={styles.quote__profile}>
                <div className={styles.quote__avatar}>
                    <img src="" alt="" />
                </div>
                <span className={styles.quote__name}>- Justin Regelvio</span>
            </div>
            <blockquote className={styles.quote__text}>
                I used to struggle alot while gaming one day i saw an ad called gamerzclass i clicked on it and opened it and bought course of Ivan Lapanje aka BorasLegend my whole gameplay changed since then my winning streak is going up up and up gameplay is getting on the level of pros!влалав
            </blockquote>
        </div>
    );
}

export default Comment;