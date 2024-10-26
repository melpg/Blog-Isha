import React from 'react';
import { useState, useEffect } from 'react';

import AdminHeader from '../AdminHeader';

import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify';
import { ToastContainer } from "react-toastify";
import'react-toastify/dist/ReactToastify.css';

const GalleryUpdate = () => {

   
   const [gallery, setGallery] = useState("");
   const [text, setText] = useState("");
   

   const handleImage = (e) => {
      const file = e.target.files[0];
      if (file) {
         setFileToBase(file);
      }
   }

   const setFileToBase = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
         setGallery(reader.result);
      }
   }


   const { id } = useParams();




   useEffect(() => {
      getGallery();
      // 👇️ disable the rule for a single line

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const updateGallery = async () => {


      let item = {  gallery, text  }
      let result = await fetch(`https://ishaapi.onrender.com/updatePhoto/${id}`, {
         method: 'PUT',

         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(item),

      });

      result = await result.json();
      console.log(result)
      //alert('updated');
      toast.success('Photo updated!', {
         //autoClose: 3000,
         position:toast.POSITION.TOP_CENTER,
         
       });

   }

   const getGallery = async () => {
      let result = await fetch(`https://ishaapi.onrender.com/gallery/${id}`);
      result = await result.json();
   
      setGallery(result.gallery );
      setText(result.text);
   }
   





   return (
      <>
         <AdminHeader/>
         <ToastContainer />
         <div className="col-sm-6 container p-5 "  >
            <center> <h1>update Details</h1><hr style={{
               content: "",
               background: '#cc0099',
               display: 'block',
               height: '3px',
               width: '100px',
               opacity: 'inherit'
            }} /></center>
            <br />


            
            <input type="file" className="form-control" onChange={handleImage} placeholder="Image url" /><br />
            <input type="text" className="form-control" onChange={(e) => setText(e.target.value)} placeholder="text" value={text} /><br />
            
            <center> <button onClick={updateGallery} className="btn btn-primary">Update Photo</button></center>
            <br />
         </div>

      </>
   )
}


export default GalleryUpdate;

