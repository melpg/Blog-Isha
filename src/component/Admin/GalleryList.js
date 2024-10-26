import React, { useEffect, useState } from "react";
import "../Header.css";
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AdminHeader from "../AdminHeader";

const GalleryList = () => {
    const [allImage, setAllImage] = useState(null);

    useEffect(() => {
        getImage();
    }, []);

    const getImage = () => {
        axios.get("https://ishaapi.onrender.com/getImage")
            .then((result) => setAllImage(result.data.data))
            .catch((error) => console.error("Error fetching images:", error.message));
    };
    

    const deleteImage = (id) => {
        axios.delete(`https://ishaapi.onrender.com/deleteImage/${id}`, {
            method: "Delete"
        })
        .then(() => {
            getImage();
            toast.warn('Photo deleted!', {
                position: toast.POSITION.TOP_CENTER,
            });
        })
        .catch((error) => {
            console.error('Error deleting image:', error.message);
            toast.error('Error deleting photo!', {
                position: toast.POSITION.TOP_CENTER,
            });
        });
    };
    

    return (
        <>
            <AdminHeader />
            <ToastContainer />
            <div className="container mt-3">
                <center> <h2>Gallery Description</h2></center>
                <center> <p>Total {allImage ? allImage.length : 0} Photos</p></center>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Text</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allImage &&
                            allImage.map((data, data_name) => (
                                <tr key={data_name}>
                                    <td>{data.id}</td>
                                    <td><img src={`https://ishaapi.onrender.com/uploads/${data.image}`} alt="1" style={{ height: '89px' }} /></td>
                                    <td>{data.text}</td>
                                    <td>
                                        <button onClick={() => deleteImage(data._id)} className="btn btn-danger m-1">Delete</button>
                                        {/* <Link to={`/Admin/Update/${data.id}`} className="btn btn-primary m-1">Update</Link> */}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default GalleryList;
