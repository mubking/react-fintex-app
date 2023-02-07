import './Second.css'
import the from './images/Screenshot (51).png'




function Second(){
    return(
    <section className='All'>
 <div className="container">
    <div className="div-with-border">
        <div className="b">
    <h1>Online Payments. But without the hassle.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
         <button>Learn More</button>
         </div>
         <div className="c">
    <img src={the} alt="" />
    </div> 

    </div>
    <div className="user">
    <div className="best">
    <h1>User friendly</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem acctium.</p>
 </div>
 <div className="secure">
    <h1>Best Support</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem acctium.</p>
 </div>
 <div className="support">
    <h1>Secure payment</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem acctium.</p>
 </div>
 
    </div>
    
  </div>
    </section>
    
    )
}







export default Second;