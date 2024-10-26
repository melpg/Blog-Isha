import React from "react";
import './Header.css';

const Footer = ()=>{
    return(
        <div className="container-fluid">
    <div className="bg-black">
      <div className="footer">
       <div className="fheader">
        <h4>Isha Events</h4>
        <span>Address<sub> <i className="fa fa-arrow-right" style={{color:'white'}}></i></sub></span>
        <p>#1, Building No 4, Sri LV Nest</p>
        <p>5th Cross Road</p>  
         <p>East of NGEF Layout, Kasturi Nagar</p> 
         <p>Bengaluru, Karnataka 560043</p> 
         <p>India</p> 
       </div>
       <div className="">
       <h4>Timings</h4>
          <p>Mon:	10:30 AM - 4:30 PM</p>
          <p>Tue:	10:30 AM - 4:30 PM</p>
          <p>Wed:	10:30 AM - 4:30 PM</p>
          <p>Thu:	10:30 AM - 4:30 PM</p>
          <p>Fri:	10:30 AM - 4:30 PM</p>
          <p>Sat:	10:30 AM - 4:30 PM</p>
          <p>Sun:	10:30 AM - 4:30 PM</p>
       </div>

      </div>
    </div>
  </div>
    )
}
export default Footer;