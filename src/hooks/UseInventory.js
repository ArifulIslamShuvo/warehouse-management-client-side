import React, { useEffect, useState } from 'react';

const UseInventory = () => {
    const [inventorys, setInventorys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventorys(data));
    }, [setInventorys]);
    return [inventorys, setInventorys]
};

export default UseInventory;