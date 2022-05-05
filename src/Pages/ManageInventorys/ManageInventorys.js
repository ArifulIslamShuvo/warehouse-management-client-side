import React from 'react';
import UseInventory from '../../hooks/UseInventory';
import Manage from '../Manage/Manage';

const ManageInventorys = () => {
    const [inventorys, setInventorys] = UseInventory();
    // console.log(inventorys);
    return (
        <div>
            <h1 className='text-white text-center pt-5'><span className='sectionTitle'>Manage Inventorys</span></h1>
            <div className='row g-5 p-5'>
                {
                    inventorys.map(manage => <Manage key={manage._id}
                        manage={manage}
                    ></Manage>)
                }
            </div>
        </div>
    );
};

export default ManageInventorys;