import React from 'react';
import styles from './Slider.module.scss';
import { useRef, useState, useEffect } from 'react';

const Slider = (props) => {
    const sliderRef = useRef(null);
    const slideRef = useRef(null);

    let touches = [];
    let slideWidth = null;
    let slidesCount = null;
    const [slideIndex, changeSlideIndex] = useState(0);
    const [slideStyle,changeSlideStyle] = useState({});

    const handleBack = () => {
        if(slideIndex !== 0) {
            changeSlideStyle({
                transform: 'translateX(' + (-slideWidth - 30) * (slideIndex-1) + 'px)'
            })
            changeSlideIndex(slideIndex - 1)
        }
    }

    const handleNext = () => {
        if(slideIndex !== slidesCount - 1) {
            changeSlideStyle({
                transform: 'translateX(' + (-slideWidth - 30) * (slideIndex + 1) + 'px)'
            })
            changeSlideIndex(slideIndex + 1)
        }
    }

    const handleTouch = (e:any) => {
        e.preventDefault()
        touches.push(e.changedTouches[0])
    }

    const handleTouchEnd = () => {
        const touchDivision = touches[touches.length - 1].clientX - touches[0].clientX;
        if(touchDivision > slideWidth/3) {
            handleBack()
        } else if (touchDivision < -slideWidth/3 && touchDivision < 0) {
            handleNext()
        }
        touches = [];
    }

    useEffect(() => {
        if(slideRef) {
            slideWidth = slideRef.current.getBoundingClientRect().width;
            slidesCount = Math.ceil((slideRef.current.scrollWidth - 30 * (props.itemsCount - 1)) / sliderRef.current.getBoundingClientRect().width);
        }
    })

    return(
        <div className={styles.slider} ref={sliderRef}>
            <div className={styles.slider__btnWrap}>
                <button className={styles.slider__btn + ' ' + styles.slider__btnPrev} onClick={handleBack}>
                    <img src="/static/images/arrow-left.svg" alt=""/>
                </button>
                <button className={styles.slider__btn + ' ' + styles.slider__btnNext} onClick={handleNext}>
                    <img src="/static/images/arrow-left.svg" alt=""/>
                </button>
            </div>
            <div className={styles.slider__container} ref={slideRef} style={slideStyle} onTouchMove={handleTouch} onTouchEnd={handleTouchEnd}>
                {/* <div className={styles.slider__innerContainer}> */}
                    { props.children }
                {/* </div> */}
            </div>
        </div>
    );
}

export default Slider;