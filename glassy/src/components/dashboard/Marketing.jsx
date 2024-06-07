import React, {useEffect, useState} from 'react';
import AdminHeader from "./AdminHeader";
import Loader from "../Helpers/Loader";
import HomeProductTable from "./tables/HomeProductTable";
import HeroImg from '../../assets/img/hero.jpg'
import {SuccessPopUp} from "../Helpers";
import axios from "axios";


const Marketing = () => {

    const [image, setImage] = useState(''); // Initial image URL
    const [file, setFile] = useState(null); // File selected via input
    const [apiError, setApiError] = useState(false)
    const [loader, setLoader] = useState(true)
    const [apiSuccess, setApiSuccess] = useState(false)
    const [message, setMessage] = useState('')
    const API_URL = `${process.env.REACT_APP_API_URL}`

    useEffect(()=> {

        const fetchData = () => {
            axios.get(`${API_URL}/title-image`)
                .then(response => {
                    setLoader(false)
                    setImage(response.data[0].image_url)
                    console.log(response)
                })
                .catch(error => {
                    setApiError(true)
                })
        }

        fetchData()
    }, [])
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            setFile(selectedFile);

            const localImageUrl = URL.createObjectURL(selectedFile);
            setImage(localImageUrl);
        }
    }

    const saveImage = async (e) => {
        e.preventDefault()

        const payload = new FormData()

        payload.append('image', file)

       await axios.post(`${API_URL}/add-title-image`, payload)
           .then(response => {
               console.log(response)
           })
           .catch(error => {
               console.log(error)
           })

    }

    return (
        <>
            {apiSuccess && (
                <SuccessPopUp message={message}/>
            )}
            <div className="admin-contanier min-h-screen bg-gray-100 overflow-hidden md:ml-[20rem]">
                <div className="min-h-screen flex flex-col">
                    <AdminHeader/>
                    <div className="admin-container-content w-full flex-grow p-2 lg:p-4 flex">
                        <form encType="multipart/form-data" onSubmit={saveImage} className="admin-content-tabel-wrapper bg-white shadow w-full flex-grow rounded-md p-2 lg:p-4">
                            <div className="admin-content-table-head mb-8">
                                <h1 className="text-gray-500">Marketings</h1>
                            </div>
                            <div className="flex justify-center">
                                <div className="relative h-[30rem] w-full object-contain ">
                                    <img className="absolute h-[30rem] left-1/2 -translate-x-1/2 object-contain" src={image} alt=""/>
                                    <div className="flex h-[30rem] items-center justify-center bg-gray-100 bg-opacity-50 absolute w-full left-1/2 -translate-x-1/2 z-10 opacity-0 hover:opacity-100 duration-300">
                                        <label htmlFor="image" className="admin-btn">Mainīt bildi</label>
                                        <input
                                            type="file"
                                            name="image"
                                            id="image"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="flex">
                                <button className="admin-btn ml-auto mt-10" onClick={saveImage}>Saglabāt</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Marketing;