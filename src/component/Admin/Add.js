import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {
    const [id, setId] = useState('');
    const [file, setFile] = useState(null);
    const [text, setText] = useState('');
    const [allImage, setAllImage] = useState(null);

    useEffect(() => {
        getImage();
    }, []);

    const getImage = async () => {
        try {
            const result = await axios.get("https://ishaapi.onrender.com/getImage");
            setAllImage(result.data.data);
        } catch (error) {
            console.error("Error fetching images:", error.message);
        }
    };

    const handleImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("id", id);
        formData.append("file", file);
        formData.append("text", text);

        try {
            // Upload the image
            const result = await axios.post("https://ishaapi.onrender.com/uploadFile", formData, {
                headers: { "Content-Type": "multipart/form-data",
                withCredentials: true,
                "Access-Control-Allow-Origin": "http://localhost:3000"
             },
            });

            // Check if the upload was successful
            if (result.data.status === "ok") {
                // Fetch the updated list of images
                getImage();

                // Clear input fields
                setId('');
                setFile(null);
                setText('');

                toast.success('Image uploaded successfully', {
                    position: toast.POSITION.TOP_CENTER,
                });
            } else {
                toast.error('Error uploading image');
            }
        } catch (error) {
            console.error("Error uploading image:", error.message);
            toast.error('Error uploading image');
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="col-sm-6 container p-4">
                <center>
                    <h1>Add Details</h1>
                    <hr
                        style={{
                            content: "",
                            background: '#cc0099',
                            display: 'block',
                            height: '3px',
                            width: '100px',
                            opacity: 'inherit'
                        }}
                    />
                </center>
                <br />
                <form onSubmit={handleImage}>
                    <input type="number" className="form-control" value={id} onChange={(e) => setId(e.target.valueAsNumber)} placeholder="Photo id" /><br />
                    <input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])} placeholder="Image url" /><br />
                    <input type="text" className="form-control" value={text} onChange={(e) => setText(e.target.value)} placeholder="Text" /><br />
                    <br />
                    <center>
                        <button type="submit" className="btn btn-primary">Add Details</button>
                    </center>
                    <br />
                </form>

                </div>
        </>
    );
};

export default Add;
