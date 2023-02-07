import  './Fintex.css';
import React from 'react';
import fintex from './images/fintex2.png'
import download from './images/whit.png'
import ipsum from './images/logo3.png'
import lorem from './images/logo5.png'
import pips from './images/logo6.png'
import bird from './images/logo7.png'
import mobile from './images/Screenshot (53).png'
import logo from './images/logo-white11.png'




function Fintex() {
    function handleShow(){
        document.querySelector(".mobile-nav").classList.toggle("mobile-show");
        document.querySelector(".btn-1").classList.toggle("active-nav");
    }
    return(
        <>
     <section>
         <div className="one">
                <img src={fintex} alt="Logo" />

                <nav>

                    <ol>
                        <div className="home">
                        <li ><i>Home</i></li>
                        </div>
                        <li><i>About Us</i></li>
                        <li><i>Features</i></li>
                        <li><i>pages</i></li>
                        <li><i>Contact Us</i></li>
                        <button><i>Get Started</i></button>
                    </ol>
                <button className='btn-1' onClick={handleShow}></button>

                </nav>
            </div>
            <ul className="mobile-nav">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Our Project</li>
                    <li>Blogs</li>
                    <li>Contact Us</li>
                    <button>sign in</button>
                </ul>
            <div className="two">
                <div className="three">
                    <div className="fast">
                    <h1>Fast Payment</h1>
                    <h1>Gateway Solution</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque nam eum! Labore ullam possimus aliquid laboriosam natus perferendis inventore.</p>
                    <div className="learn">
                    <button>Get Started</button>
                  
                    <button className='color' id='color'>Learn More  <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg></span></button>
                    </div>
                </div>
                <div className="four">
                    <img src={mobile} alt="logo" />
                </div>
            </div>
            <footer>
                <div className="first5">
                <div className="first1">
                <img src={download} alt="Logo" />
                <img src={ipsum} alt="Logo" />
                <img src={lorem} alt="Logo" />
            
                </div>
                <div className="first2">
                <img src={pips} alt="Logo" />
                <img src={bird} alt="Logo" />
                <img src={logo} alt="Logo" />
                    
                </div>
                </div>
            </footer>
     </section>
     {/* <section> */}
        
     {/* </section> */}
     </>
    )
}
export default Fintex;