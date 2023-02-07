import React from "react";
import './last.css'
import play from './images/google-play.png'
import store from './images/app-store.png'
import fintexx from './images/fintex-logo.png'



function Last(){
  return(
    <section className='faq'>
    <div className="fintex">
        <div className="page">
        <img src={fintexx} alt="Logo" />
        <p>Lorem ipsum dolor sit amet, conetur adiscing elit. Ut elit tellus.</p>
        <div className="google">
        <img src={store} alt="Logo" />
        <img src={play} alt="Logo" />

        </div>

        </div>
        <div className="page1">
          <h1>Other pages </h1>
           <li><a href=".">Home</a></li> 
           <li><a href=".">About Us</a></li> 
           <li><a href=".">Features</a></li> 
           <li><a href=".">Pricing</a></li> 
           <li><a href=".">Partners</a></li> 
        </div>
        <div className="page2">
            <h1>Quick links</h1>
           <li><a href=".">Privacy Policy</a></li> 
           <li><a href=".">Terms of Service</a></li> 
           <li><a href=".">Disclaimer</a></li> 
           <li><a href=".">Credits</a></li> 
           <li><a href=".">Faq</a></li> 
        </div>
        <div className="page3">
            <h1>Contact us</h1>
           <li>Our Support and Sales team is available 24 /7 to answer your queries</li>
           <li></li>
           <li></li>
           <li className='span'><a href="."> <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#000543" class="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg></span> +1 234 567 89 10</a></li>
                        <li> <a href="."> <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#000543" class="bi bi-envelope-fill" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
            </svg></span> support@admin.com</a></li>
        </div>
    </div>
    <div className="empty">
    <h2>Copyright © 2022 Fintex. All rights reserved.</h2>

    </div>
</section>
  )

  }

export default Last;