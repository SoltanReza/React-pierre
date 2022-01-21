import React, { useEffect, useRef } from 'react';
import './Animate.scss';

const Animate = ({ className, Tag = 'div', type = 'scale', children, delay = 0, ...props }) => {
    const ref = useRef();
    let timer;
    const onScroll = () => {
        const elm = ref.current;
        if (!elm) return;
        const rect = elm.getBoundingClientRect();
        const screenHeight = window.innerHeight || document.documentElement.clientHeight;
        const screenWidth = window.innerWidth || document.documentElement.clientWidth;
        if(elm.classList.contains('active')) return;
        if((rect.bottom + rect.top)/2 <= screenHeight) {
            if (rect.right <= screenWidth * 1.5) {
                elm.classList.add('active');
                window.removeEventListener('scroll', () => { });
                clearInterval(timer);
            }
            else elm.classList.add('vertical-active');
        }
    }
    useEffect(() => {
        onScroll();
        timer = setInterval(() => {
            onScroll();
        }, 200);
        return () => clearInterval(timer);
    }, [])

    return <Tag {...props} className={`${className} ${type} __Animate`} style={{ transitionDelay: `${delay}s`, animationDelay: `${delay}s` }} ref={ref}>{children}</Tag>;

}

export default Animate;