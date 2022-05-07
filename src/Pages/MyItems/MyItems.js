import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState(0);

    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/inventory?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data)
        }
        getItems();

    }, [user])
    //---------------------------------
    const DeletItem = id => {
        const proceed = window.confirm("Are you sure You want to delete the data");
        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                const remaining = items.filter(inventory => inventory._id !== id);
                setItems(remaining); 
                if(result.insertedId){
                    toast("Delet successfully!");
                }
            })
        }
    }
    return (
        <div className=''>
            <h2 className=' sectionTitle text-center py-5'>Your Items: {items.length}</h2>
            {/* <div className='w-75 mx-auto'>
                {
                    items.map(item => <div key={item._id} className="d-flex align-aitems-center justify-content-between caedItems p-3 mb-4">
                        <div className=''>
                            <img style={{ width: '250px' }} src={item.img} alt="" />
                        </div>
                        <div className='mx-auto'>
                            <h5 className='text-white text-center'>{item.name}</h5>
                            <h6 className='text-white text-center'>Price : {item.price}</h6>
                            <hr />
                            <p className='text-white text-center'>{item.description}</p>
                            <h5 className='text-white text-center'>Supplier : {item.supplierName}</h5>
                            <h5 className='text-white text-center'>Quantity : {item.quantity}</h5>
                            <div className='d-flex align-aitems-center justify-content-center w-100'>
                                <button onClick={() => DeletItem(item._id)} className='w-50 mx-auto bg-danger updateBtn'>Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div> */}
        </div>
    );
};

export default MyItems;
