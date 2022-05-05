import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState();

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [id]);
    // console.log(inventory);
    return (
        <div className='container'>
            <h2>Stock Update</h2>
            <div className='w-75 mx-auto py-5 container'>
                <div className='caedItems'>
                    <img className='w-100' src={inventory?.img} alt="" />
                    <h4 className='text-white pt-2 text-center'>{inventory?.name}</h4>
                    <h6 className='text-white text-center'>Price : {inventory?.price}</h6>
                    <hr />
                    <p className='text-white mx-3'>{inventory?.description}</p>
                    <h5 className='text-white mx-3'>Supplier : {inventory?.supplierName}</h5>
                    <h5 className='text-white mx-3'>Quantity : {inventory?.quantity}</h5>
                    <hr />
                    <div className='d-flex align-aitems-center justify-content-between w-100'>
                        <button className='w-25 updateBtn'>Deliverd</button>
                        <div className='d-flex align-aitems-center justify-content-between'>
                            <input className='w-75 mx-2 rounded-3 border-0' type="text"  placeholder='Add quantity'/>
                            <button className='w-75 updateBtn'>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;