import React, { useEffect,useState} from 'react';
import axios from 'axios';
import '../Header.css';
import Header from '../Header';
import Footer from '../Footer';


const Gallery=()=>{
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://sampleapi-adpi.onrender.com/images');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);
 
  return(
    <>
    <Header/>
    <div className="container">
      <h2 className="page-header">Gallery</h2>
      <center> <p style={{fontFamily:'Diphylleia',fontSize:'x-large',fontWeight:'600',color:'#3c9497'}}>Total {images ? images.length : 0} Photos</p></center>
     </div>
     
     
      <div className='row1' style={{backgroundImage:'url(https://i.ibb.co/MPHrvRx/bg-creme-pattern.webp)'}}>
        
     {
          images.map((image)=>
          <div className='card col-md-4 col-lg-3 col-sm-6 m-1' key={image.id}>
            <img src={`https://sampleapi-adpi.onrender.com/image/${image.id}`} alt={image.filename} style={{ width: '400px' }}/>
            <div className='bottom'>
            <p>Isha Events</p>
            </div>
          </div>
          
          )
        }
        </div>
     
      
      <Footer/>
    
    </>
  )
}

export default Gallery;