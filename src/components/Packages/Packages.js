import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Packages.css';

const Packages = () => {
    // data store
  const [packages, setPackages] = useState([]);
  const [list, setList] = useState([]);
  
// data load
useEffect(()=>{
    fetch('packages.json')
    .then(res => res.json())
    .then(data => setPackages(data))
}, [])
// button to click
const handleAddToListClick =() =>{
//  console.log(packages)
// array copy and add
   const newList = [...list, packages];
   setList(newList);
}
    return (
       <div className='shop-container'>
        
        <div className="packages-container">
        {/* <h2 >OUR HEALTH CARE PACKAGES: {packages.length} </h2> */}
        
            {
                packages.map(packag=> <Package 
                    key={packag.id}
                    package={packag}
                    handleAddToListClick={handleAddToListClick}
                ></Package>)
            }
        </div>
        <div className="cart-container">
     <h2>Person Profile</h2>
     <p>Selected List: {list.length}</p>
        </div>
       </div>
    );
};

export default Packages;