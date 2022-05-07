import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseInventory from '../../hooks/UseInventory';

const ManageInventorys = () => {
    const [inventorys, setInventorys] = UseInventory();
    const navigate = useNavigate();

    const DeletItem = id => {
        const proceed = window.confirm("Are you sure You want to delete the data");
        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(result => {
                const remaining = inventorys.filter(inventory => inventory._id !== id);
                setInventorys(remaining); 
                if(result.insertedId){
                    toast("Delet successfully!");
                }
            })
        }
    }
    return (
        <div>
            <h1 className='text-white text-center pt-5'><span className='sectionTitle'>Manage Inventorys</span></h1>
            <div className='row g-5 m-3'>
                {
                    inventorys.map(manage => <div className='col-lg-4 col-12 cards' key={manage._id}>
                            <div className='caedItems'>
                                <img className='w-100' src={manage.img} alt="" />
                                <h4 className='text-white pt-2 text-center'>{manage.name}</h4>
                                <h6 className='text-white text-center'>Price : {manage.price}</h6>
                                <hr />
                                <p className='text-white mx-3'>{manage.description}</p>
                                <h5 className='text-white mx-3'>Supplier : {manage.supplierName}</h5>
                                <h5 className='text-white mx-3'>Quantity : {manage.quantity}</h5>
                                <hr />
                                <div className='d-flex align-aitems-center justify-content-between w-100'>
                                    <button className='w-50 mx-1 bg-danger updateBtn' onClick={() => DeletItem(manage._id)}>Delete</button>
                                    <button className='w-75 mx-1 updateBtn' onClick={()=>navigate('/additems')}>Add new items</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default ManageInventorys;
