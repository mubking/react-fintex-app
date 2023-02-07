import './Third.css'
import React from 'react';
// import review from './images'
import review from './images/review.jpg'
import integration from './images/integration.png'
import play from './images/google-play.png'
import store from './images/app-store.png'
import dash from './images/dashboard3.png'



function Third(){
    return(
        <>
     {/* client section */}
    <section className='client'>
     <div className="story">
        <h1>Client story</h1>

           <div className="egos">
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="white" class="bi bi-twitter" viewBox="0 0 16 16">
        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
        </svg>
           </div>
         <div className="ego">
            <p>"Tenete ergo quod si servitus quae natura liber, et aliena tua tunc</p>  
            <p> impeditur. Dolebis, et turbabuntur, et invenietis, cum culpa tam dis</p>
            <p> hominibusque. Quod si tibi tantum sit propria et aliena"</p>
         </div>

        <img src={review} alt="" />
        <h2>John Krasinsky</h2>
        <h4>Lightbulb CO-Founder</h4>
     </div>
    </section> 
    {/* another section */}
    <section className='see '>
        <div className="great">
        <div className="own">
            <img src={integration} alt="" />
        </div>
        <div className="other">
            <div className="to">
            <h1>Great on its own. Or 
            connect to one of 75+
             other systems.</h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <a href=".">See all 75+ systems connects with</a>
        </div>
        </div>
    </section>
    {/* another section */}
    <section className='ready'>
     <div className="free">
     <div className="freee">
  <h1>Ready for payments to be frustration-free?</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcor.</p>
  <div className="googlee">
            <img src={store} alt="Logo" />
            <img src={play} alt="Logo" />

            </div>

     </div>
     <div className="freeee">
        <img src={dash} alt="" />
     </div>
     </div>
    </section>
    {/* footer section */}
    

    
    
    
    
    
    
    
    
    
    
    </>
    )
}




export default Third;