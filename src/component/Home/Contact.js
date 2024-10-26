import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../Header.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_number: "",
        message: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("https://formspree.io/f/mgveoelw", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                toast.success('Message sent successfully! Thank You', {
                    position: toast.POSITION.TOP_CENTER
                });
                setFormData({
                    user_name: "",
                    user_email: "",
                    user_number: "",
                    message: ""
                });
            } else {
                toast.error('Failed to send message.', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        })
        .catch(error => {
            console.error("Error sending message:", error);
            toast.error('An error occurred. Please try again.', {
                position: toast.POSITION.TOP_CENTER
            });
        });
    };

    return (
        <>
            <ToastContainer /> {/* Toast container to display toasts */}
            <div className='container' id='contact'>
                <h2 className='page-header'>Contact</h2>
                <div className="col-lg-10" style={{ width: '100%' }}>
                    <div className="wrapper img" style={{ backgroundImage: 'url(img.jpg)' }}>
                        <div className="row4">
                            <div className="col-md-9 col-lg-7">
                                <div className="contact-wrap w-100 p-md-5 p-4">
                                    <h3 className="mb-4">Get In Touch</h3>
                                    <form
                                        id="contactForm"
                                        name="contactForm"
                                        className="contactForm"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="row4">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label">Full Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="user_name"
                                                        placeholder="Name"
                                                        value={formData.user_name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label">Email Address</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="user_email"
                                                        placeholder="Email"
                                                        value={formData.user_email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="label">Number</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        name="user_number"
                                                        placeholder="Subject"
                                                        value={formData.user_number}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="label">Message</label>
                                                    <textarea
                                                        name="message"
                                                        className="form-control"
                                                        cols="30"
                                                        rows="4"
                                                        placeholder="Message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group" id='button'>
                                                    <input type="submit" value="Send Message" className="btn btn-dark" />
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
}

export default Contact;
