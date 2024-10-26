import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Review = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const addReview = (e) => {
    e.preventDefault();

    axios
      .post("https://ishaapi.onrender.com/addreview", {
        name,
        text,
      })
      .then((response) => {
        toast.success("Review added successfully", {
          position: toast.POSITION.TOP_CENTER,
          onClose: () => {
            // Clear input fields after successful submission
            setName("");
            setText("");

            // Redirect to the home page after displaying success message
            history.push("/"); // Replace "/" with the path of your home page
          },
        });
        console.log("Response from server:", response.data);
      })
      .catch((error) => {
        console.error("Error adding review:", error);
        toast.error("Failed to add review", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <>
      <ToastContainer />

      <div className='container'>
        <h2 className='page-header'>Let us know your thoughts</h2>
        <div className="col-lg-10" style={{ width: '100%' }}>
          <div className="wrapper img" style={{ backgroundImage: 'url(../img.jpg)' }}>
            <div className="row4">
              <div className="col-md-9 col-lg-7">
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h4 className="mb-4" style={{ fontFamily: 'Diphylleia', fontStyle: 'italic', fontWeight: '600', padding: '15px', textAlign: 'center' }}> Excited to hear your thoughts! Leave a review and let us know how we're doing. Your feedback matters! </h4>

                  <form id="contactForm" name="contactForm" className="contactForm" onSubmit={addReview}>
                    <div className="row4">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" >Full Name</label>
                          <input type="text" className="form-control" name="name" id="name" onChange={(e) => setName(e.target.value)} placeholder="name" />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" >Share Your Experience</label>
                          <textarea name="text" className="form-control" cols="30" rows="4" onChange={(e) => setText(e.target.value)} placeholder="Text"></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group" id='button'>
                          <input type="submit" value="Send" className="btn btn-dark" />
                          <div className="submitting"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
