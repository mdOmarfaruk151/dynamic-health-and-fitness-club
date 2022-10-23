import React, { useState, useEffect } from "react";

const Time = ({ list }) => {
  // oo
  let total = 0;
  // const [minData, setMinData] =useState(0);
  for (const min of list) {
    total = total + min[0].time;
    // setMinData(total)
    // localStorage.setItem('min', total);
  }

  // useEffect(()=>{
  //   const data1 = localStorage.getItem('min');
  //  data1 && setMinData(data1);
  // },[]);

  return (
    <div>
      <p>Exercise Time: {total} Minutes</p>
    </div>
  );
};

export default Time;
