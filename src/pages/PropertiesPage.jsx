import React from 'react';
import HeaderV2 from '../components/HeaderV2/HeaderV2';
import FilterSection from '../components/PropertiesPageComponents/FilterSection/FilterSection';
import PropertiesSection from '../components/PropertiesPageComponents/PropertiesSection/PropertiesSection';

const PropertiesPage = () => {
    return (
        <>
            <HeaderV2 transparent={false} />
            <div className='tx-dark flex-1 d-lg-flex nav-padding' >
                <FilterSection />
                <PropertiesSection />
            </div>
        </>
    )
}

export default PropertiesPage;