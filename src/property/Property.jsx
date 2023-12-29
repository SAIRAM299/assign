import React, { useState } from 'react';
import { GiPirateFlag } from "react-icons/gi";
import yo1 from '../assets/elder.webp';
import yo2 from '../assets/lufyy.jpg';
import yo3 from '../assets/shank.jpg';
import yo4 from '../assets/buggy.jpg';
import yo5 from '../assets/black.jpg';
import './Property.css'
const Property = () => {
    return (
        <div>
            <div className='propy'>
                <div className='prohead'>
                    <div className='proname'>
                        <h3 className='namy'>
<GiPirateFlag className='icon'/>ZORO
                        </h3>
                        <h1 className='ti'>Practice</h1>
                        <p>GRID TEMPLET AREAS AND COLUMN </p>
                    </div>
                </div>
            </div>
            <div className='gr'>
    <div className='content'>
<div className='pic1'><img src={yo1}/></div>
<div className='pic2'><img src={yo2}/></div>
<div className='pic3'><img src={yo3}/></div>
<div className='pic4'><img src={yo4}/></div>
<div className='pic5'><img src={yo5}/></div>
    </div>
    </div>
        </div>
    );
}

export default Property;
