import { useMemo, useState } from "react";
import Menu from "../Menu/Menu";
import SelectField from "../SelectField";
import styles from './select.module.scss';

const Select = ({ children, value, onFocus, onChange, onBlur, name, ...props }) => {
    const [{ isDropDown = false, newValue = value || '' }, setDropDown] = useState({});
    const onInputFocus = e => {
        setDropDown({ newValue, isDropDown: true });
        onFocus && onFocus(e);
    }
    const onInputChange = e => {
        setDropDown({ newValue: e.target.value, isDropDown: false });
        onChange && onChange(e)
    }
    return (
        <div className={styles.root}>
            {useMemo(() => <SelectField disabled={isDropDown} className='cursor-pointer' endEndorament={<i className='fas fa-angle-down'></i>} onFocus={onInputFocus} onChange={() => { }} {...props} value={newValue} />, [props, newValue])}
            {isDropDown && <Menu onClose={() => setDropDown({ isDropDown: false, newValue })} isNormal={props.isNormal} onChange={onInputChange} value={newValue} name={name}>{children}</Menu>}
        </div>
    )
}

export default Select;