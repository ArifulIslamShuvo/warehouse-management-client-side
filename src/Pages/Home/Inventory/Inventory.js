import React from 'react';
import '../Inventory/Inventory.css'

const Inventory = ({ inventory }) => {
    const { name, img, description, price, quantity, supplierName } = inventory;
    console.log();
    return (
        <div className='col-lg-4 col-12 cards'>
            <div className='caedItems'>
                <img className='w-100' src={img} alt="" />
                <h4 className='text-white pt-2 text-center'>{name}</h4>
                <h6 className='text-white text-center'>Price : {price}</h6>
                <hr />
                <p className='text-white mx-3'>{description}</p>
                <h5 className='text-white mx-3'>Supplier : {supplierName}</h5>
                <h5 className='text-white mx-3'>Quantity : {quantity}</h5>
                <hr />
            </div>
        </div>
    );
};

export default Inventory;