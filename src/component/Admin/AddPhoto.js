import React, { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddPhoto = () => {
    const [id, setId] = useState("");
    const [gallery, setGallery] = useState("");
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);

    const handleImage = (e) => {
        const file = e.target.files[0];
        setFileToBase(file);
    }

    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setGallery(reader.result);
        }
    }

    const addPhoto = async () => {
        try {
            setLoading(true);
            const response = await axios.post(`https://ishaapi.onrender.com/uploadFile`, {
                id,
                gallery,
                text,
            });

            if (response.data.status === "ok") {
                toast.success('Data saved!', {
                    position: toast.POSITION.TOP_CENTER,
                });
            } else {
                toast.error('Failed to save data');
            }
        } catch (error) {
            console.error("Error adding photo:", error.message);
            toast.error('Error adding photo');
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <ToastContainer />
            <div className="col-sm-6 container p-4 " >
                <center>
                    <h1>Add Details</h1>
                    <hr style={{
                        content: "",
                        background: '#cc0099',
                        display: 'block',
                        height: '3px',
                        width: '100px',
                        opacity: 'inherit'
                    }} />
                </center>
                <br />
                <input type="number" className="form-control" onChange={(e) => setId(e.target.valueAsNumber)} placeholder="Photo id" /><br />
                <input type="file" className="form-control" onChange={handleImage} />
                {gallery && <img src={gallery} alt="Selected" style={{ maxWidth: '100%', marginTop: '10px' }} />}
                <br />
                <input type="text" className="form-control" onChange={(e) => setText(e.target.value)} placeholder="Text" /><br />
                <center>
                    <button onClick={addPhoto} className="btn btn-primary" disabled={loading}>
                        {loading ? "Saving..." : "Add Details"}
                    </button>
                </center>
                <br />
            </div>
        </>
    );
}

export default AddPhoto;
