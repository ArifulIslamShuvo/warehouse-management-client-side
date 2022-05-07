import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Update = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `https://fathomless-basin-03406.herokuapp.com/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [id,inventory]);
    //---------handleed-input-quantity-------
    const handleQuantity = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const newQuantity = parseInt(inventory.quantity) + parseInt(quantity);
        const updateQuantity = {newQuantity};
        console.log(newQuantity);

        const url = `https://fathomless-basin-03406.herokuapp.com/inventory/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateQuantity),
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data){
                toast("Quantity Added successfully!");
            }
            event.target.reset();
        })
    }

    const deliverQuantity = ()=>{
        const newQuantity = parseInt(inventory.quantity) - 1;
        const  updateQuantity = {newQuantity}
        console.log(newQuantity);

        const url = `https://fathomless-basin-03406.herokuapp.com/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateQuantity),
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data){
                toast("Quantity Deliverd successfully!");
            }
        })
    }

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
                        <button onClick={deliverQuantity} className='w-25 updateBtn'>Deliverd</button>
                        <form onSubmit={handleQuantity} className='d-flex align-aitems-center justify-content-between'>
                            <input className='w-75 mx-2 rounded-3 border-0' type="text" name="quantity"  placeholder='Add quantity'/>
                            <input className='w-75 updateBtn' type="submit" value="Add"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;