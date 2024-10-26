import React, { useEffect,useState} from 'react';

import '../Header.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Swiperr=()=>{
  const [reviews,setReviews]=useState([]);

  useEffect(()=>{
    getReviews();
  },[]);

  const getReviews=async()=>{
    let result=await fetch(`https://ishaapi.onrender.com/reviews`)
    result=await result.json();
    setReviews(result);
  }
  
  return(
    <>
    <div className="container-fluid">
      <h2 className="page-header">Stories of Satisfaction</h2>
     </div>
     <div style={{textAlign:"right",margin:"9px"}}><Link to={'/Home/Review'}><h5 className="btn btn-light" style={{border:"2px solid black",fontFamily:"sofia",fontSize:"large"}}>Add your Review</h5></Link></div>
     <div className='container' id="review" style={{marginBottom:'50px'}}>
     <div className="swiper mySwiper">
     <div className="swiper-wrapper">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        // autoplay={{
        //   delay: 2500, 
        //   disableOnInteraction: false, 
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]} //Autoplay
        className="mySwiper"
      >
        {
          reviews.map((item)=>
          <SwiperSlide><div className="imgs" key={item.id}><h5>{item.name}</h5><p>{item.text}</p></div></SwiperSlide>
          )
        }
         

</Swiper>
</div>
      </div></div>

      <div className='container'>
        <h2 className='page-header'>Direction</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4371899811977!2d77.65326127577195!3d13.00780801408215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11d3b98501d9%3A0xcab9b571745f244f!2sISHA%20Events!5e0!3m2!1sen!2sin!4v1700988283445!5m2!1sen!2sin" width="100%" height="450" style={{border:'3px solid grey'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
      </div>
    
    </>
  )
}

export default Swiperr;