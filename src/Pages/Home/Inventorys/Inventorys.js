import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import '../Inventorys/Inventorys.css'

const Inventorys = () => {
    const [inventorys, setInventorys] = useState([]);
    useEffect(() => {
        fetch('inventory.json')
            .then(res => res.json())
            .then(data => setInventorys(data));
    }, []);
    const sixinventorys = inventorys.slice(0, 6);
    return (
        <div className='bg-dark'>
            <h1 className='text-white text-center pt-5'><span className='sectionTitle'>warehouse Info</span></h1>
            <div className='row g-5 p-5'>
                    {
                        sixinventorys.map(inventory => <Inventory inventory={inventory}
                            key={inventory.id}
                        ></Inventory>)
                    }
            </div>
        </div>
    );
};

export default Inventorys;