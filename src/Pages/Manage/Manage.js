// import React from 'react';
// import UseInventory from '../../hooks/UseInventory';

// const Manage = ({ manage }) => {
//     const { _id, name, img, description, price, quantity, supplierName } = manage;
//     const [inventorys, setInventorys] = UseInventory();

//     const DeletItem = id => {
//         const proceed = window.confirm("Are you sure You want to delete the data");
//         if(proceed){
//             const url = `http://localhost:5000/inventory/${id}`;
//             fetch(url, {
//                 method: 'DELETE'
//             })
//             .then(res => res.json())
//             .then(result => {
//                 console.log(result)
//                 const remaining = inventorys.filter(inventory => inventory._id !== id);
//                 setInventorys(remaining); 
//             })
//         }
//     }

//     return (
//         <div className='col-lg-4 col-12 cards'>
//             <div className='caedItems'>
//                 <img className='w-100' src={img} alt="" />
//                 <h4 className='text-white pt-2 text-center'>{name}</h4>
//                 <h6 className='text-white text-center'>Price : {price}</h6>
//                 <hr />
//                 <p className='text-white mx-3'>{description}</p>
//                 <h5 className='text-white mx-3'>Supplier : {supplierName}</h5>
//                 <h5 className='text-white mx-3'>Quantity : {quantity}</h5>
//                 <hr />
//                 <div className='d-flex align-aitems-center justify-content-between w-100'>
//                     <button className='w-50 mx-1 bg-danger updateBtn' onClick={()=> DeletItem(_id)}>Delete</button>
//                     <button className='w-75 mx-1 updateBtn'>Add new items</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Manage;

// // const url = `http://localhost:5000/inventory/${id}`;
// //             fetch(url, {
// //                 method: 'DELETE'
// //             })
// //             .then(res => res.json())
// //             .then(result => {
// //                 console.log(result)
// //                 const remaining = inventorys.filter(inventory => inventory._id !== id);
// //                 setInventorys(remaining);
// //             })