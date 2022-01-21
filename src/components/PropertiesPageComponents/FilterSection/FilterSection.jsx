import Option from "../../../ui/Option/Option";
import Select from "../../../ui/Select/Select";
import TextField from "../../../ui/TextField";
import useFilter from "../../../hooks/useFilter";
import styles from './FilterSection.module.scss';
import BoxField from '../../../ui/BoxField/BoxField';
import Chip from "../../../ui/Chip/Chip";
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import Expandable from "../../../ui/Expandable/Expandable";
import { useState } from "react";

const FilterSection = (props) => {
    const [filter, setFilter] = useFilter({
        country: '',
        louer: '',
        types: '',
        budget: ''
    });

    const [isOpen, setIsOpen] = useState(false);
    document.body.className = isOpen ? 'overflow-hidden' : '';


    const onChange = e => setFilter({ ...filter, [e.target.name]: e.target.value });
    const onDelete = key => setFilter({ ...filter, [key]: '' });
    return (
        <div className={`top-0 d-flex ${styles.root}`}>
            <button className="me-auto ms-md-4 ms-3 mt-4 btn-text d-block d-lg-none" type="button" onClick={() => setIsOpen(true)}>Filters</button>
            <form
                className={`
                    p-xl-5 p-md-4 p-3 scrollbar vh-100 bg-light d-flex flex-column gap-4 overflow-auto 
                    ${isOpen ? styles.active : ''} ${styles.main}
                `}
            >

                <div className="d-lg-none d-flex justify-content-between">
                    <button className="btn-icon no-spacing my-0" type="button"></button>
                    <Link to='/'><img alt="" src={logo} className={styles.logo} /></Link>
                    <button
                        type="button"
                        className="btn-icon no-spacing my-0"
                        onClick={() => setIsOpen(false)}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="d-grid gap-3">
                    <small className="d-flex smaller justify-content-between mb-2">EMPLACEMENT <i className="fas fa-map-marker-alt"></i></small>
                    <Select label='Country'>
                        <Option value='France'>France</Option>
                        <Option value='USA'>USA</Option>
                    </Select>
                    <TextField label='Ville, Code Postal' />
                </div>

                <Expandable title='Taper'>
                    <div className="d-grid gap-2">
                        <BoxField type="radio" label='Acheter' name='type' />
                        <BoxField type="radio" label='Louer' name='type' />
                        <BoxField type="radio" label='Location Saisonnière' name='type' />
                    </div>
                </Expandable>

                <Expandable title='Types de bien'>
                    <div className="d-grid gap-2">
                        <BoxField label='Maison, villa' name='property' />
                        <BoxField label='Appartement' name='property' />
                        <BoxField label='Immeuble' name='property' />
                        <BoxField label='Hôtel particulier' name='property' />
                        <BoxField label='Terrain' name='property' />
                        <BoxField label='Commerce' name='property' />
                        <BoxField label='Bureaux' name='property' />
                        <BoxField label='Loft' name='property' />
                        <BoxField label='Chalet' name='property' />
                        <BoxField label='Château et Manoir' name='property' />
                        <BoxField label='Propriété viticole' name='property' />
                        <BoxField label='Haras &amp; Domaine équestre' name='property' />
                        <BoxField label='Domaine de chasse' name='property' />
                        <BoxField label='Gite, ferme, moulin' name='property' />
                    </div>
                </Expandable>


                <div>
                    <small className="d-flex mb-4 justify-content-between">Price <i className="fas fa-euro-sign"></i></small>
                    <div className="d-grid gap-3 col-2">
                        <TextField type='number' label='Min' startEndorament='€' />
                        <TextField type='number' label='Max' startEndorament='€' />
                    </div>
                </div>
                <div className="my-5">
                    <small className="d-flex mb-4 justify-content-between">Chambers <i className="fas fa-bed"></i></small>
                    <div className={`${styles.chipsWrapper} d-flex justify-content-between`}>
                        <Chip label='1' name='chamber' type='radio' />
                        <Chip label='2' name='chamber' type='radio' />
                        <Chip label='3' name='chamber' type='radio' />
                        <Chip label='4' name='chamber' type='radio' />
                        <Chip label='5+' name='chamber' type='radio' />
                    </div>
                </div>
                <button className="btn-form w-100 mt-auto">RECHERCHER</button>
            </form>
        </div>
    )
}

export default FilterSection;