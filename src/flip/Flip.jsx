import React, { useState } from 'react';
import fp1 from "../assets/fp1.jpg";
import fb1 from "../assets/fb1.jpg";
import fp2 from "../assets/ac.jpg";
import fb2 from "../assets/av.png";
import fp3 from "../assets/sab.png";
import fb3 from "../assets/sabi.jpg";
import './Flip.css'
const Flip = () => {
const[fliper,setfliper]=useState([
    {
        id:1,
        fimg:fp1,
        bimg:fb1
    },
    {
        id:2,
        fimg:fp2,
        bimg:fb2
    },
    {
        id:3,
        fimg:fp3,
        bimg:fb3
    },
])

    return (
        <div className='fully'>
            <h1>Flipping cards</h1>
            <div className='maincontainy'>
{
fliper.map((dd,i)=>(
<div className='cardbox' key={i}>
    <div className='innerbox'>
<div className='front'>
<img src={dd.fimg}/>
</div>
<div className='back'>
<img src={dd.bimg}/>
</div>
    </div>

</div>
))
}
            </div>
        </div>
    );
}

export default Flip;
