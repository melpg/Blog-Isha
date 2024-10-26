import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminHeader from '../AdminHeader';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  // const [allImage, setAllImage] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getImage();
  }, []);

  const handleImage = async (e) => {
    e.preventDefault();

    try {
      let item = { file, text };
      let result = await fetch(`https://ishaapi.onrender.com/updatePhoto/${id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
      });

      result = await result.json();
      console.log(result.data);
      toast.success('Photo updated!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      console.error('Error updating image:', error.message);
      toast.error('Error updating photo!', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const getImage = async () => {
   try {
     const result = await axios.get(`https://ishaapi.onrender.com/getImage/${id}`);
     const { file, text } = result.data.data;
 
     // Set the file and text states only if they are not undefined
     if (file) {
       setFile(file);
     }
 
     if (text) {
       setText(text);
     }
   } catch (error) {
     console.error('Error fetching image:', error.message);
   }
 };
 

  return (
    <>
      <AdminHeader />
      <ToastContainer />
      <div className="col-sm-6 container p-5">
        <center>
          <h1>Update Details</h1>
          <hr
            style={{
              content: '',
              background: '#cc0099',
              display: 'block',
              height: '3px',
              width: '100px',
              opacity: 'inherit',
            }}
          />
        </center>
        <br />
        <form onSubmit={handleImage}>
          <input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])} placeholder="Image url" /><br />
          <input type="text" className="form-control" value={text || ""} onChange={(e) => setText(e.target.value)} placeholder="Text" /><br />
          <br />
          <center>
            <button type="button" className="btn btn-primary" onClick={handleImage}>
              Add Details
            </button>
          </center>
          <br />
        </form>
      </div>
    </>
  );
};

export default Update;
