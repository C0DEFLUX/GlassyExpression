import {useEffect, useState} from "react";
import AdminHeader from "./AdminHeader";
import axios from "axios";
import {ErrorPopUp, SuccessPopUp} from "../Helpers";


const Add = () => {

    const [productTitle, setProductTitle] = useState('')
    const [productDesc, setProductDesc] = useState('')
    const [mainImg, setMainImg] = useState(null)
    const [apiError, setApiError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState(false)
    const [message, setMessage] = useState('')
    const API_URL = `${process.env.REACT_APP_API_URL}`
    const [error, setError] = useState({
        product_title: '',
        product_desc: '',
        image: ''
    })

    const handleChange = (file) => {
        setMainImg(file[0])
    }

    const submitData = async (e) => {
        e.preventDefault()
        const formData = new FormData()

        formData.append('image', mainImg)
        formData.append('product_title', productTitle)
        formData.append('product_desc', productDesc)


        axios.post(`${API_URL}/add-product`, formData)
            .then(response => {
                setApiSuccess(true)
                setMessage(response.data.success_msg)
                setProductDesc('')
                setProductTitle('')
                setMainImg('')

            })
            .catch(error => {
                console.log(error)
                if(error.response.status === 404) {
                    setApiError(true)
                }
                if(error.response.status === 422) {
                    setError(error.response.data.errors)
                }
            })
    }

    return (
        <>
            {apiError && (
                <ErrorPopUp/>
            )}
            {apiSuccess && (
                <SuccessPopUp message={message}/>
            )}
            <div className="admin-contanier md:ml-[20rem] h-screen bg-gray-100 overflow-scroll">
                <div className="min-h-screen flex flex-col">
                    <AdminHeader/>
                    <div className="admin-container-content w-full flex-grow p-4 flex">
                        <div className="flex w-full">
                            <form encType="multipart/form-data" onSubmit={submitData} className="flex flex-col w-full bg-white p-2 rounded-md lg:p-4">
                            <div className="admin-content-table-head mb-8">
                                <h1 className="text-gray-500">Pievienot produktu</h1>
                            </div>
                                <div className="flex w-full flex-grow flex-col">
                                    <div className="flex lg:space-x-2 flex-col lg:flex-row">
                                        <div className="lg:w-1/2 w-full">
                                            <div className="flex flex-col space-y-1 ">
                                                <label className="text-gray-500" htmlFor="">Proukta nosaukums (LV)</label>
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
                                            <div className="flex flex-col space-y-1 ">
                                                <label className="text-gray-500" htmlFor="">Proukta nosaukums (ENG)</label>
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
                                        </div>
                                        <div className="lg:w-1/2 w-full">
                                            <div className="flex flex-col space-y-1 ">
                                                <label className="text-gray-500" htmlFor="">Proukta nosaukums (RU)</label>
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
                                            <div className="flex flex-col space-y-1 ">
                                                <label className="text-gray-500" htmlFor="">Kategorija</label>
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
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-1 h-72 mt-8">
                                        <label className="text-gray-500" htmlFor="">Produkta apraksts (LV)</label>
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
                                    <div className="flex flex-col space-y-1 h-72 mt-8">
                                        <label className="text-gray-500" htmlFor="">Produkta apraksts (ENG)</label>
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
                                    <div className="flex flex-col space-y-1 h-72 mt-8">
                                        <label className="text-gray-500" htmlFor="">Produkta apraksts (RU)</label>
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
                                    <div className="flex flex-col space-y-1 lg:w-1/2">
                                        <label htmlFor="" className="text-gray-500">Titula bilde</label>
                                        <div className="flex items-center justify-center w-full h-96">
                                            {mainImg ? (
                                                <div className="relative h-96 w-full object-contain ">
                                                    <img className="absolute h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain" src={URL.createObjectURL(mainImg)} alt=""/>
                                                    <div className="flex items-center justify-center bg-gray-100 bg-opacity-50 absolute h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 hover:opacity-100 duration-300">
                                                        <label htmlFor="image" className="admin-btn">Mainīt bildi</label>
                                                        <input
                                                            type="file"
                                                            name="image"
                                                            id="image"
                                                            className="hidden"
                                                            onChange={e => handleChange(e.target.files)}
                                                        />
                                                    </div>

                                                </div>
                                            ) : (
                                            <label htmlFor="image"
                                                   className="flex flex-col items-center justify-center w-full h-96 lg:h-full border-[1.5px] border-gray-300 border-dashed rounded-lg cursor-pointer">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                                    </svg>
                                                    <p className="mb-2 text-sm text-gray-500 text-center">Noklikšķiniet, lai augšupielādētu.</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">PNG,
                                                        JPG vai JPEG</p>
                                                </div>
                                                <input
                                                    type="file"
                                                    name="image"
                                                    id="image"
                                                    className="hidden"
                                                    onChange={e => handleChange(e.target.files)}
                                                />
                                            </label>
                                            )}
                                        </div>
                                        {error.image && (
                                            <span className="err-msg">{error.image[0]}</span>
                                        )}
                                    </div>
                                </div>
                                <button type="submit" className="admin-btn mt-4 ml-auto" onClick={submitData}>Pievienot</button>
                            </form>

                        </div>

                    </div>
                </div>


            </div>
        </>

    )
}

export default Add
