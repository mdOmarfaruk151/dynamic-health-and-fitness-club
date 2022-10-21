import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Packages.css';

const Packages = () => {
    // data store
  const [packages, setPackages] = useState([])
// data load
useEffect(()=>{
    fetch('packages.json')
    .then(res => res.json())
    .then(data => setPackages(data))
}, [])

    return (
       <div className='shop-container'>
        
        <div className="packages-container">
        {/* <h2 >OUR HEALTH CARE PACKAGES: {packages.length} </h2> */}
        
            {
                packages.map(packag=> <Package 
                    package={packag}
                    key={packag.id}
                ></Package>)
            }
        </div>
        <div className="cart-container">
     <h2>Person Profile</h2>
        </div>
       </div>
    );
};

export default Packages;