import React, { useEffect,useState} from 'react';
import '../Header.css';
import AdminHeader from '../AdminHeader';

import axios from 'axios';
const Gallerys=()=>{
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
    <AdminHeader/>
   

                <div className="container-fluid">
                    <h2 className="page-header">Gallery</h2>
                </div>

                <div className='container' >
     {
          images.map((image)=>
          <div className="imgs" key={image.id}>
            <img src={`https://sampleapi-adpi.onrender.com/image/${image.id}`} alt={image.filename} style={{height:'20%',width:'20%',margin:'2px'}}/>
            
          </div>
          )
        }
      </div>
            
      
    
    </>
  )
}

export default Gallerys;