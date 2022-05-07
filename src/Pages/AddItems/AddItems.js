import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const AddItems = () => {
    const [user] = useAuthState(auth);
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if(result.insertedId){
                    toast("Item Added successfully!");
                }
                
            })
    }
    return (
        <div className='container w-50 my-5'>
            <div className="form w-10">
                <h2 className='py-3 text-center'>Please add a items</h2>
                <hr className='h-line' />
                <form className="d-flex flex-column align-items-center pb-5" onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2'readOnly placeholder='Email' {...register("email")} value={user?.email}></input>
                    <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea style={{width:'80%'}} className='mb-2' placeholder='Discription' {...register("description")} />
                    <input className='mb-2' placeholder='Price' type="text" {...register("price")} />
                    <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                    <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                    <input className='mb-2' placeholder='SupplierName' {...register("supplierName", { required: true, maxLength: 20 })} />
                    <input className='text-center p-1' type="submit" value="Add items" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;