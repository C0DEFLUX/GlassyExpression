import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import ErrorPopUp from "../Helpers/ErrorPopUp";
import AdminHeader from "./AdminHeader";
import {SuccessPopUp} from "../Helpers";

const Edit = () => {
    const [productTitle, setProductTitle] = useState('')
    const [productDesc, setProductDesc] = useState('')
    const [id, setId] = useState('')
    const [image, setImage] = useState(''); // Initial image URL
    const [file, setFile] = useState(null); // File selected via input
    const [apiError, setApiError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState(false)
    const [message, setMessage] = useState('')
    const API_URL = `${process.env.REACT_APP_API_URL}`
    const navigate = useNavigate();
    const [error, setError] = useState({
        product_title: '',
        product_desc: '',
        image: ''
    })
    const params = useParams()

    useEffect(() => {
        const fetchData = () => {
            axios.get(`${API_URL}/product-by-name/${params.name}`)
                .then(response => {
                    setProductTitle(response.data.product_title)
                    setProductDesc(response.data.product_desc)
                    setImage(response.data.main_img)
                    setId(response.data.id)
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

    const submitData = async (e) => {
        e.preventDefault()
        const formData = new FormData()

        formData.append('image', file)
        formData.append('product_title', productTitle)
        formData.append('product_desc', productDesc)

        axios.post(`${API_URL}/edit-product/${params.name}`, formData)
            .then(response => {
                setMessage(response.data.success_msg)
                navigate('/panelis')
                localStorage.setItem('success', 'true')
                localStorage.setItem('success_msg' , 'Produkts vieksmīgi atjaunots!')
            })
            .catch(error => {
                if(error.response.status === 404) {
                    setApiError(true)
                }
                if(error.response.status === 422) {
                    setError(error.response.data.errors)
                }
            })
    }

    const deleteProduct = () => {
        axios.delete(`${API_URL}/delete-product/${id}`)
            .then((response)=> {
                setMessage(response.data.message)
                navigate('/panelis')
                localStorage.setItem('success', 'true')
                localStorage.setItem('success_msg' , 'Produkts vieksmīgi dzēsts!')
            }).catch((error)=>{
                if(error.response.status === 404) {
                    setApiError(true)
                }
            })
    }

    return (
        <>
            {apiError && (
                <ErrorPopUp/>
            )}
            <div className="admin-contanier md:ml-[20rem] h-screen bg-gray-100 overflow-scroll">
                <div className="min-h-screen flex flex-col">
                    <AdminHeader/>
                    <div className="admin-container-content w-full flex-grow p-4 flex">
                        <div className="flex w-full">
                            <form encType="multipart/form-data" className="flex flex-col w-full bg-white p-2 rounded-md lg:p-4">
                                <div className="flex w-full flex-grow lg:space-x-12 flex-col lg:flex-row">
                                    <div className="flex flex-col space-y-4 lg:w-1/2">
                                        <div className="flex flex-col space-y-1 lg:h-1/6">
                                            <label className="text-gray-500" htmlFor="">Proukta nosaukums</label>
                                            <input
                                                value={productTitle}
                                                type="text"
                                                name="productTitle"
                                                className="flex-grow outline-none resize-none rounded-md p-2 border-[1px] border-gray-300"
                                                onChange={(e) => setProductTitle(e.target.value)}
                                            />
                                            {error.product_title && (
                                                <span className="err-msg">{error.product_title}</span>
                                            )}
                                        </div>
                                        <div className="flex flex-col space-y-1 h-96 lg:h-full">
                                            <label className="text-gray-500" htmlFor="">Produkta apraksts</label>
                                            <textarea
                                                value={productDesc}
                                                name="productTitle"
                                                className="flex-grow outline-none resize-none rounded-md p-2 border-[1px] border-gray-300"
                                                onChange={(e) => setProductDesc(e.target.value)}
                                            >
                                            </textarea>
                                            {error.product_desc && (
                                                <span className="err-msg">{error.product_desc}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-1 lg:w-1/2">
                                        <label htmlFor="" className="text-gray-500">Titula bilde</label>
                                        <div className="flex items-center justify-center w-full h-full">
                                            <div className="relative h-96 lg:h-full w-full object-contain ">
                                                <img className="absolute h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain" src={image} alt=""/>
                                                <div className="flex items-center justify-center bg-gray-100 bg-opacity-50 absolute h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 hover:opacity-100 duration-300">
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
                                        {error.image && (
                                            <span className="err-msg">{error.image}</span>
                                        )}
                                    </div>

                                </div>
                                <div className="flex w-fit ml-auto space-x-1">

                                <div className="admin-btn bg-red-500 hover:bg-red-600 mt-4 ml-auto" onClick={deleteProduct}>Dzēst</div>
                                <button type="submit" className="admin-btn mt-4 ml-auto" onClick={submitData}>Rediģēt</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;