import  './Hero.css';
import React from 'react';
import bitcoin from './images/screen.png'
import fav from './images/feature1.png'
import fave from './images/feature3.png'
import faves from './images/feature2.png'


function Hero(){
    return(
        
        <div className="container">
            <div className="number">
            <div className="crew">
            <img src={bitcoin} alt="Logo" />

            </div>
            <div className="red">
                <div className="fut">
                <h1>Payments and data</h1>
                <h1>future-proofed</h1>
                </div>
                <div className="four">
                    <div className="six">
                   

                    <img src={fav} alt="" />
                    </div>
                    <div className="seven">
                        <h3>End late payments</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum sunt odit nihil, sapiente perferendis.</p>
                    </div>
                </div>
                <div className="four">
                    <div className="six">
                    
                        <img src={fave} alt="" />
                    </div>
                    <div className="seven">
                        <h3>Automate admin</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum sunt odit nihil, sapiente perferendis.</p>
                    </div>
                </div>
                <div className="four">
                    <div className="six">
                        <img src={faves} alt="" />
                    </div>
                    <div className="seven">
                        <h3>Forget Expensive fees</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum sunt odit nihil, sapiente perferendis.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}




export default Hero;