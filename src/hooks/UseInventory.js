import React, { useEffect, useState } from 'react';

const UseInventory = () => {
    const [inventorys, setInventorys] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-basin-03406.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventorys(data));
    }, [setInventorys]);
    return [inventorys, setInventorys]
};

export default UseInventory;
