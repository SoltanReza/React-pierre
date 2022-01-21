import { cloneElement, useRef, useEffect } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Portal from "../../hoc/Portal/Portal";
import styles from './menu.module.scss';

const Menu = ({ children = [], value, onClose, isNormal, ...props }) => {
    const newChildren = children.map((child, index) => cloneElement(child, {
        key: index, 
        checked: value === child.props.value, 
        ...props,
    }));
    const childRef = useRef();
    const parentRef = useRef();
    const isMatched = useMediaQuery(991, isMatched => {
        if (isMatched) return;
        const child = childRef.current;
        const parent = parentRef.current;
        if (!child || !parent) return;
        const styles = child.style;
        const rect = parent.getBoundingClientRect();
        console.log(rect);
        styles.left = rect.left + 'px';
        styles.width = rect.width + 'px'
        styles.top = (rect.y - document.body.getBoundingClientRect().y) + 'px';
    });
    useEffect(() => {
        const child = childRef.current;
        const parent = parentRef.current;
        if (!child || !parent) return;
        if (isMatched) return document.body.className = 'overflow-hidden';
    }, [isMatched])
    useEffect(() => {
        const className = document.body.className;
        return () => document.body.className = className;
    }, [])
    return (
        <div ref={parentRef} className='position-relative cursor-pointer start-0 top-0 end-0 bottom-0'>
            <Portal onClick={onClose}>
                <div ref={childRef} className={`elevation-2 bg-light ${styles.root}`}>
                    {newChildren}
                </div>
            </Portal>
        </div>
    )
}

export default Menu;