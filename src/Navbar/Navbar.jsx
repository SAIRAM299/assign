import React, { useState } from 'react';
import './Navbar.css'
import { GiPirateFlag } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
const Navbar = () => {
    const[nav,setnav]=useState('navbar')
    const show=()=>{
        setnav('navbar activenavbar')
    }

const unshow=()=>{
        setnav('navbar')
    }

    return (
        <div>
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <a href='' className='logoname'>
                            <h1><GiPirateFlag className='icon'/>ZORO</h1>
                        </a>
                    </div>

                    <div className={nav}>
                        <ul className='navlist'>
                            <li className='navitem'><a href='' className=' navlink'>Home</a></li>
                            <li className='navitem'><a href='' className=' navlink'>About</a></li>
                            <li className='navitem'><a href='' className=' navlink'>Agent</a></li>
                            <li className='navitem'><a href='' className=' navlink'>Properties</a></li>
                            <li className='navitem'><a href='' className=' navlink'>Blog</a></li>
                            <li className='navitem'><a href='' className=' navlink'>Contact</a></li>
                        </ul>
                        <div className='end' onClick={unshow}>
                            < AiFillCloseCircle className='icon'/>
                        </div>
                    </div>
                    <div className='toggy' onClick={show}>
                    <TbGridDots className='icon'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
