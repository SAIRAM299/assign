import React from 'react';
import './About.css';
import nts from '../assets/nts.jpg';
const About = () => {
    return (
        <div className='contany'>
            <div className='fullbod'>
                <div className='texts'>
                    <div className='conty'>
<h1>What Happened Here? Nothing at all.</h1>
<p>NO MATTER HOW HARD OR IMPOSSIBLE IT IS, NEVER LOSE SIGHT OF YOUR GOAL.</p>
<h3>MONKEY D. LUFFY</h3>
                    </div>
</div>
                <div className='imbo'>
                <img src={nts}/>
                </div>
            </div>
            <div className="load">
            <div className="loader-container">
      <div className="loader"></div>
      </div>
            </div>
        </div>
    );
}

export default About;
