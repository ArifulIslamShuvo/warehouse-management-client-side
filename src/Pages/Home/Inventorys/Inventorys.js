import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ManageInventorys from '../../ManageInventorys/ManageInventorys';
import Inventory from '../Inventory/Inventory';
import '../Inventorys/Inventorys.css'

const Inventorys = () => {
    const navigate = useNavigate();
    const [inventorys, setInventorys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventorys(data));
    }, []);
    const sixinventorys = inventorys.slice(0, 6);
    return (
        <div className=''>
            <h1 className='text-white text-center pt-5'><span className='sectionTitle'>warehouse Info</span></h1>
            <div className='row g-5 p-5'>
                {
                    sixinventorys.map(inventory => <Inventory inventory={inventory}
                        key={inventory._id}
                    ></Inventory>)
                }
            </div>
            <div className='d-flex align-aitems-center justify-content-center w-100'>
                <button className='w-25 text-white updateBtn my-5' onClick={() => navigate(`/manageInventorys`)}>Manage Inventorys</button>
            </div>
        </div>
    );
};

export default Inventorys;