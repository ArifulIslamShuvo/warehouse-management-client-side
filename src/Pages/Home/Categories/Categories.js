import React from 'react';
import item1 from '../../../images/categories/Center-Table.png';
import item2 from '../../../images/categories/Bed.png';
import item3 from '../../../images/categories/Dining-Set.png';
import item4 from '../../../images/categories/Dinner-Wagon.png';
import item5 from '../../../images/categories/Dressing-Table.png';
import item6 from '../../../images/categories/Open-Shelfl.png';
import item7 from '../../../images/categories/Sofa-set.png';
import item8 from '../../../images/categories/TV-Cabinet.png';

const Categories = () => {
    return (
        <div className='container p-3'>
            <hr />
            <h2 className='text-center  py-3'><u>Categories</u> </h2>
            <div className='row g-4'>
                <div className='col-4 col-md-3'>
                    <div className='d-flex align-aitems-center justify-content-center'>
                        <img className='w-25 mx-auto' src={item1} alt="" />
                    </div>
                    <p className='text-center'>Center-Table</p>
                </div>
                <div className='col-4 col-md-3'>
                    <div className='d-flex align-aitems-center justify-content-center'>
                        <img className='w-25 mx-auto' src={item2} alt="" />
                    </div>
                    <p className='text-center'>Bed</p>
                </div>
                <div className='col-4 col-md-3'>
                    <div className='d-flex align-aitems-center justify-content-center'>
                        <img className='w-25 mx-auto' src={item3} alt="" />
                    </div>
                    <p className='text-center'>Dining-Set</p>
                </div>
                <div className='col-4 col-md-3'>
                    <div className='d-flex align-aitems-center justify-content-center'>
                        <img className='w-25 mx-auto' src={item4} alt="" />
                    </div>
                    <p className='text-center'>Dinner-Wagon</p>
                </div>
                <div className='col-4 col-md-3'>
                    <div className='d-flex align-aitems-center justify-content-center'>
                        <img className='w-25 mx-auto' src={item5} alt="" />
                    </div>
                    <p className='text-center'>Dressing-Table</p>
                </div>
                <div className='col-4 col-md-3'>
                    <div className='d-flex align-aitems-center justify-content-center'>
                        <img className='w-25 mx-auto' src={item6} alt="" />
                    </div>
                    <p className='text-center'>Open-Shelfl</p>
                </div>
                <div className='col-4 col-md-3'>
                    <div className='d-flex align-aitems-center justify-content-center'>
                        <img className='w-25 mx-auto' src={item7} alt="" />
                    </div>
                    <p className='text-center'>Sofa-set</p>
                </div>
                <div className='col-4 col-md-3'>
                    <div className='d-flex align-aitems-center justify-content-center'>
                        <img className='w-25 mx-auto' src={item8} alt="" />
                    </div>
                    <p className='text-center'>TV-Cabinet</p>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Categories;