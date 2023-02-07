import  './footer.css';
import React from 'react';
import app2 from './images/app2.png'
import app3 from './images/app3.png'
import app4 from './images/app4.png'
// import the from './images/Screenshot (51).png'
// import review from './images/review.jpg'
// import fintexx from './images/fintex-logo.png'
// import dash from './images/dashboard3.png'


function footer() {
  return(
    <>
 <section className='footer'>
    <div className="feature">
   <h1>All the features you need</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quas, hic reprehenderit voluptas aperiam maiores optio sint repudiandae nam eum atque dolore soluta excepturi omnis.</p>
   </div>

<div className="pay">
    <div className="pink">
        <h1>Payment Management</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa.</p>
        <h3 className='more'>Learn More <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg></span></h3> 
        <img src={app2} alt="" />
    </div>
    <div className="orange">
    <h1>Personal Dashboard</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa.</p>
        <h3 className='more'>Learn More <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg></span></h3> 
        <img src={app3} alt="" />
    </div>
    <div className="purple">
    <h1>Business Tracking</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa.</p>
        <h3 className='more'>Learn More <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg></span></h3> 
        <img src={app4} alt="" />
    </div>
</div>

   
 </section>

 </>
  )

}

export default footer;
