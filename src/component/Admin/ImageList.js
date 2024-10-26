// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminHeader from '../AdminHeader';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../Header.css';

const App = () => {
  const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
  const [metadata, setMetadata] = useState('');
  const [file, setFile] = useState(null);

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

//   const handleImageClick = (id) => {
//     setSelectedImage(id);
//   };

//   const handleMetadataChange = (e) => {
//     setMetadata(e.target.value);
//   };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('metadata', metadata);

      await axios.post('https://sampleapi-adpi.onrender.com/upload', formData);

      const response = await axios.get('https://sampleapi-adpi.onrender.com/images');
      setImages(response.data);

      setFile(null);
      console.log('Clearing metadata');
      setMetadata('');
      toast.success('Photo uploaded!', {
        position: toast.POSITION.TOP_CENTER,
    });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleDeleteImage = async (id) => {
    try {
      await axios.delete(`https://sampleapi-adpi.onrender.com/image/${id}`);
      const response = await axios.get('https://sampleapi-adpi.onrender.com/images');
      setImages(response.data);
      toast.warn('Photo deleted!', {
        position: toast.POSITION.TOP_CENTER,
    });
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <>
    <AdminHeader/>
    <ToastContainer/>
    <div className="container">
      {/* <h2 className="page-header">Gallery</h2> */}
      <center> <p style={{fontFamily:'Diphylleia',fontSize:'x-large',fontWeight:'600',padding:'22px',color:'#3c9497'}}>Total {images ? images.length : 0} Photos</p></center>
      </div>

      <div className='container' id="addImage">
        <h2 style={{margin:'revert'}}>Add Image</h2>
        <input key={file ? file.name : 'default'} type="file" onChange={handleFileChange} className='form-control'/>
        {/* <label>
          Metadata:
          <input type="text" value={metadata} onChange={handleMetadataChange} />
        </label> */}
        <center>
        <button onClick={handleUpload} className='btn btn-dark' type='submit' style={{margin:'25px'}}>Upload</button>
        </center>
      </div>

     
      <div className='row1' style={{padding:'20px'}}>
        {images.map((image) => (
          <div className='card col-md-4 col-lg-3 col-sm-6 m-1' key={image.id}>
            <img
              src={`https://sampleapi-adpi.onrender.com/image/${image.id}`}
              alt={image.filename}
              
            //   onClick={() => handleImageClick(image.id)}
            />
            <center>
            <button onClick={() => handleDeleteImage(image.id)} className='btn btn-dark' style={{margin:'20px'}}>Delete</button>
            <a id="livelinkbutton" type="button" class="btn btn-outline-light"
                href="/Admin/GalleryUpdate" ><span id="livelink">Update</span></a>
            </center>
            
            
            
          </div>
          
        ))}
      </div>
      
      {/* {selectedImage && (
        <div>
          <h2>Selected Image</h2>
          <img
            src={`https://sampleapi-adpi.onrender.com/image/${selectedImage}`}
            alt="Selected"
            style={{ maxWidth: '300px' }}
          />
        </div>
      )} */}
      
    
    </>
  );
};

export default App;
