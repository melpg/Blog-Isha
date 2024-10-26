// ImageGallery.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [newTextValue, setNewTextValue] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadError, setUploadError] = useState('');

  useEffect(() => {
    // Fetch all images
    axios.get('https://ishaapi.onrender.com/api/images')
      .then(response => {
        setImages(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('text', newTextValue);

    try {
      // Upload image
      await axios.post('https://ishaapi.onrender.com/api/upload', formData);
      // Refresh images after successful upload
      const response = await axios.get('http://localhost:9000/api/images');
      setImages(response.data.data);
      // Clear form fields after upload
      setNewTextValue('');
      setSelectedFile(null);
      setUploadError('');
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploadError('Error uploading image. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      // Delete image
      await axios.delete(`https://ishaapi.onrender.com/api/images/${id}`);
      // Refresh images after successful delete
      const response = await axios.get('https://ishaapi.onrender.com/api/images');
      setImages(response.data.data);
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      // Update image text
      await axios.put(`https://ishaapi.onrender.com/api/images/${id}`, { text: newTextValue });
      // Refresh images after successful update
      const response = await axios.get('https://ishaapi.onrender.com/api/images');
      setImages(response.data.data);
    } catch (error) {
      console.error('Error updating image:', error);
    }
  };

  return (
    <div>
      <h1>Image Gallery</h1>
      <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
      <input type="text" value={newTextValue} onChange={(e) => setNewTextValue(e.target.value)} />
      <button onClick={handleUpload}>Upload</button>

      {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>}

      {images.map(image => (
        <div key={image._id}>
          <img src={`https://ishaapi.onrender.com/api/images/${image._id}`} alt={image.text} />
          <p>{image.text}</p>
          <button onClick={() => handleUpdate(image._id)}>Update</button>
          <button onClick={() => handleDelete(image._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
