import { useRef } from 'react';
import styles from './styles.module.scss';

const Carousel = ({ children, className, component, isSmoothScrolling = true, isTouchScrolling = true, showArrows = false, ...props }) => {
    const slider = useRef(null);
    let isDown = false;
    let startX;
    let scrollLeft;
    let endX;
    let walk = 0;
    const onMouseDown = (e) => {
        if(!isTouchScrolling) return;
        const elm = slider.current;
        if (!elm) return
        isDown = true;
        startX = e.pageX;
        scrollLeft = elm.scrollLeft;
        walk = 0;
        elm.classList.remove(styles.active);
    }
    const onMouseUp = (e) => {
        isDown = false;
        if (!isSmoothScrolling) return;
        const elm = slider.current;
        const { classList, offsetWidth } = elm;
        const minWalk = offsetWidth * 0.02;
        classList.add(styles.active);
        if (walk < minWalk && walk > -minWalk) return elm.scrollLeft = +(scrollLeft / offsetWidth).toFixed() * offsetWidth;
        if (startX > endX) return elm.scrollLeft = (+(scrollLeft / offsetWidth).toFixed() + 1) * offsetWidth;
        if (startX < endX) return elm.scrollLeft = (+(scrollLeft / offsetWidth).toFixed() - 1) * offsetWidth;
    }
    const onMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const elm = slider.current;
        endX = e.pageX;
        const x = endX - elm.offsetLeft;
        walk = x - startX;
        elm.scrollLeft = scrollLeft - walk;
    }
    const onNext = () => {
        const elm = slider.current;
        const { scrollLeft, offsetWidth, classList } = elm;
        classList.add(styles.active);
        elm.scrollLeft = (+(scrollLeft / offsetWidth).toFixed() + 1) * offsetWidth;
        isDown = false;
        classList.remove(styles.active)
    }
    const onPrevious = () => {
        const elm = slider.current;
        const { scrollLeft, offsetWidth, classList } = elm;
        classList.add(styles.active);
        elm.scrollLeft = (+(scrollLeft / offsetWidth).toFixed() - 1) * offsetWidth;
        isDown = false;
        classList.remove(styles.active)
    }
    const sliderProps = { ref: slider, className: `${styles.root} position-relative ${className}` }
    if (!showArrows) {
        sliderProps.onPointerDown = onMouseDown;
        sliderProps.onPointerLeave = onMouseUp;
        sliderProps.onPointerMove = onMouseMove
        sliderProps.onPointerUp = onMouseUp;
    }
    return (
        <div className='position-relative' {...props}>
            <div {...sliderProps}>
                {children}
                {component && component({ onNext, onPrevious })}
            </div>
            {showArrows && (
                <>
                    <button className='btn-icon bg-light position-absolute top-50 translate-middle-y end-0 h6 me-3 me-lg-5' onClick={onPrevious}>
                        <i className='fas fa-arrow-left'></i>
                    </button>
                    <button className='btn-icon bg-light position-absolute top-50 translate-middle-y start-0 h6 ms-3 ms-lg-5' onClick={onNext}>
                        <i className='fas fa-arrow-right'></i>
                    </button>
                </>
            )}
        </div>
    )
}

export default Carousel;