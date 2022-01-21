import { useEffect } from "react";

const useCSSHeightListener = ({ key, value, ref }) => {
    function cb() {
        if ((ref && !ref.current) && !value) return;
        const doc = document.documentElement
        doc.style.setProperty(key, `${value || ref.current.offsetHeight}px`);
    }
    useEffect(() => {
        window.addEventListener('resize', cb);
        cb();
        return () => window.removeEventListener('resize', cb)
    }, []);
}

export default useCSSHeightListener;