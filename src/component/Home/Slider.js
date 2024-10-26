import React, { Component } from 'react';
import '../Header.css';
import { Link } from 'react-router-dom';
import Time from './Time.js';
const getCurrentDay = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const now = new Date();
  return daysOfWeek[now.getDay()];
};

class Slider extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="banner">
            <img src="https://i.ibb.co/yhZPd4k/ban1.jpg" alt="image1" style={{ width: '100%', height: '800px', backgroundSize: 'cover' }} />
            <div className="top-left">🎉 Planning a big celebration? Let us take the stress out of the equation and make your event a resounding success. 🎉</div>
            <div className="centered">🌟 Unleash your imagination and let us craft a world where dreams become reality. It's not just an event;  it's an experience of a lifetime! 🌟<Time day={getCurrentDay()} /></div>
            {/* <div className='centered'><Time day={getCurrentDay()} /></div> */}
          </div>
        </div>

        <div className="container-fluid" id="services">
          <h2 className="page-header">Services</h2>
          <div className="row" >
            <div className="col-md-4">
              <div className="img left"><img src="https://i.ibb.co/TB511RN/corporate1.jpg" alt="corporate event" loading="eager" /></div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <div className="eventname">
                  <h3>Corporate Events</h3>
                </div>
                <div className="cont">
                  <h6>Corporate events are where ideas bloom, partnerships flourish, and businesses thrive.</h6>
                  <p>From conceptualizing your ideal event to choosing the right vendors and managing your budget, this ultimate guide will be your go-to resource for a seamless and successful corporate event planning experience.</p><Link to={'/Home/Gallery'} className="more" ><span>&#10238;</span></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax1" loading="eager"></div>
          <div className="row">
            <div className="col-md-6">
              <div className="content">
                <div className="eventname">
                  <h3>Social Events</h3>
                </div>
                <div className="cont">
                  <h6>Social events are where memories are made and bonds are strengthened, ensuring your gatherings are memorable.</h6>
                  <p>In this all-encompassing guide, Isha Events provides expert advice and crucial steps to assist you in planning your next social event. Whether you're envisioning a memorable birthday celebration, a fun-filled family reunion, or a spectacular holiday party, this ultimate guide will serve as your indispensable resource for a seamless and unforgettable social event planning experience.</p><Link to={'/Home/Gallery'} className="more" ><span>&#10238;</span></Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img left"><img src="https://i.ibb.co/BsfNBf7/soc1.jpg" alt="corporate event" loading="eager" /></div>
            </div>
          </div>
          <div className="parallax2" loading="eager"></div>
          <div className="row">
            <div className="col-md-4">
              <div className="img left"><img src="https://i.ibb.co/cvxR49t/cer1.jpg" alt="corporate event" loading="eager" /></div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <div className="eventname">
                  <h3>Ceremonial Events</h3>
                </div>
                <div className="cont">
                  <h6>Honoring traditions and embracing new beginnings, capture the essence of life's beautiful journey.</h6>
                  <p>In this definitive guide, Isha Events imparts expert wisdom and essential steps to guide you through the meticulous planning of your upcoming ceremonial event. Whether you're preparing for a grand inauguration, a prestigious award ceremony, or a momentous cultural celebration, this ultimate guide will be your trusted resource for orchestrating a distinguished and flawless ceremonial event.</p><Link to={'/Home/Gallery'} className="more" ><span>&#10238;</span></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax3" loading="eager"></div>
          <div className="row">
            <div className="col-md-6">
              <div className="content">
                <div className="eventname">
                  <h3> Wedding Events</h3>
                </div>
                <div className="cont">
                  <h6>Beautiful wedding that marks the beginning of a new chapter.</h6>
                  <p>In this well-crafted guide, Isha Events offers practical advice and distinctive tips to help you plan your wedding day with a professional touch. From imagining your perfect celebration to choosing great vendors and handling your budget wisely, this ultimate guide will be your essential resource for creating a seamless and remarkable wedding event.</p><Link to={'/Home/Gallery'} className="more" data-splitting=""><span>&#10238;</span></Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img left"><img src="https://i.ibb.co/1GCQmDN/wed1.jpg" alt="corporate event" loading="eager" /></div>
            </div>
          </div>
          <div className="parallax4" loading="eager"></div>
          <div className="row">
            <div className="col-md-4">
              <div className="img left"><img src="bra1.avif" alt="corporate event" loading="eager" /></div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <div className="eventname">
                  <h3>Brand Promotions</h3>
                </div>
                <div className="cont">
                  <h6>Stand out, be bold, and let your brand shine brighter.</h6>
                  <p>In this insightful guide, Isha Events delivers expert strategies and practical steps to help you enhance your brand's visibility and impact. From devising effective promotional campaigns to selecting the right marketing channels and managing your budget efficiently, this ultimate guide will be your primary resource for achieving successful brand promotions.</p><Link to={'/Home/Gallery'} className="more" data-splitting=""><span>&#10238;</span></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax5" loading="eager"></div></div>

        <div className="container" >
          <h2 className="page-header">Gallery</h2>
          <div className="row1">
            <div className="card col-md-4 col-lg-3 col-sm-6 m-1" style={{ width: '400px' }}>
              <img src="https://i.ibb.co/s5T1fsD/bir1.jpg" alt="image1" loading="eager" />
              
            </div>
            <div className="card col-md-4 col-lg-3 col-sm-6 m-1" style={{ width: '400px' }}>
              <img src="https://i.ibb.co/cvxR49t/cer1.jpg" alt="image1" loading="eager" />
            </div>
            <div className="card col-md-4 col-lg-3 col-sm-6 m-1" style={{ width: '400px' }}>
              <img src="https://i.ibb.co/Dk4k0KF/soc2.jpg" alt="image1" loading="eager" />
            </div>
            <div className="card col-md-4 col-lg-3 col-sm-6 m-1" style={{ width: '400px' }}>
              <img src="https://i.ibb.co/nsySW6d/wed2.jpg" alt="image1" loading="eager" />
            </div>
            <div className="card col-md-4 col-lg-3 col-sm-6 m-1" style={{ width: '400px' }}>
              <img src="https://i.ibb.co/Zdk089b/bir2.jpg" alt="image1" loading="eager" />
            </div>
            <div className="card col-md-4 col-lg-3 col-sm-6 m-1" style={{ width: '400px' }}>
              <img src="https://i.ibb.co/WpH3bwg/cer2.jpg" alt="image1" loading="eager" />
            </div></div>
        </div>

        <div className="container" id="about">
          <h2 className="page-header">About</h2>
          <div className="container about">
            <p>We are a team with organized & detail-oriented event planners.</p>
            <p>We are specialized in planning, designing, coordinating and setting up event spaces of any magnitude providing event services to make the event smoothly operational.</p>
            <span>Services we provide:</span>
            <p>Corporate Events, Social Events, Ceremonial Events, Wedding Events, Brand Promotions & much more....</p>
          </div>
        </div>

        {/* <div className='container' id="review">
          <h2 className='page-header'>Stories of Satisfaction</h2>
          <div className=''>
          <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/238857'  width='100%' height='400' border='2' title='review'></iframe>
          </div>
        </div> */}

        
       
      </>
    )
  }
}
export default Slider