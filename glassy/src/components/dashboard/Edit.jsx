import {useEffect, useRef, useState} from "react";
import AdminHeader from "./AdminHeader";
import axios from "axios";
import {ErrorPopUp, SuccessPopUp, ButtonLoader} from "../Helpers";
import {GrClose} from "react-icons/gr";
import {useParams} from "react-router-dom";


const Edit = () => {

    const [titleLv, setTitleLv] = useState('')
    const [titleEng, setTitleEng] = useState('')
    const [titleRu, setTitleRu] = useState('')

    const [descLv, setDescLv] = useState('')
    const [descEng, setDescEng] = useState('')
    const [descRu, setDescRu] = useState('')

    const [category, setCategory] = useState('')

    const [mainImg, setMainImg] = useState('')
    const [mainImgUrl, setMainImgUrl] = useState('');

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
    const fileInputRef = useRef(null);

    const [apiError, setApiError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState(false)
    const [message, setMessage] = useState('')
    const API_URL = `${process.env.REACT_APP_API_URL}`
    const [data, setData] = useState([])
    const [error, setError] = useState([])
    const [submitLoader, setSubmitLoader] = useState(false)
    const params = useParams()

    useEffect(() => {
        const fetchCategories = () => {
            axios.get(`${API_URL}/category-data`)
                .then(response => {
                    setData(response.data)
                })
                .catch(error => {
                    setApiError(true)
                })
        }

        const fetchData = () => {
            axios.get(`${API_URL}/product-by-name/${params.name}`)
                .then(response => {
                    setTitleLv(response.data.product_title_lv)
                    setTitleEng(response.data.product_title_eng)
                    setTitleRu(response.data.product_title_ru)
                    setDescLv(response.data.product_desc_lv)
                    setDescEng(response.data.product_desc_eng)
                    setDescRu(response.data.product_desc_ru)
                    setCategory(response.data.category_id)
                    setMainImgUrl(response.data.main_img)
                    setPreviews(response.data.gallery || [])
                })
                .catch(error => {
                    setApiError(true)
                    console.log(error)
                })
        }

        fetchData()
        fetchCategories()
    }, [])

    //FIX
    //Need to add the current product gallery images to newly added gallery images otherwise
    //it removes the current gallery images and only saves the newly added images

    const handleFileChange = (event) => {
        const newFiles = Array.from(event.target.files);

        if (selectedFiles.length + newFiles.length > 8) {
            return;
        }

        // Append new images to existing images
        setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);

        // Make previews for new images
        const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
        setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
    };

    const handleRemove = (index) => {
        //Remove images and preview at the given index
        setSelectedFiles((prevFiles) => {
            const updatedFiles = prevFiles.filter((_, i) => i !== index);
            if (updatedFiles.length === 0) {
                fileInputRef.current.value = '';
            }
            return updatedFiles;
        });

        setPreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
    };


    const handleCategorySelect = (event) => {
        setCategory(event.target.value)
    }

    //FIX
    //Doesn't pass new image file to the backend.
    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setMainImg(file);
            setMainImgUrl(URL.createObjectURL(file));
        }
    };

    const submitData = async (e) => {
        e.preventDefault()
        const payload = new FormData()

        payload.append('product_title_lv', titleLv)
        payload.append('product_title_eng', titleEng)
        payload.append('product_title_ru', titleRu)

        payload.append('product_desc_lv', descLv)
        payload.append('product_desc_eng', descEng)
        payload.append('product_desc_ru', descRu)

        payload.append('category_id', category)

        payload.append('image', mainImg)

        selectedFiles.forEach((file) => {
            payload.append('images[]', file);
        });

        setSubmitLoader(true)

        axios.post(`${API_URL}/edit-product/${params.name}`, payload)
            .then(response => {
                setApiSuccess(true)
                setMessage(response.data.success_msg)
                setSubmitLoader(false)
            })
            .catch(error => {
                console.log(error)
                if(error.response.status === 404) {
                    setApiError(true)
                    setSubmitLoader(false)
                }
                if(error.response.status === 422) {
                    setError(error.response.data.errors)
                    setSubmitLoader(false)
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
                            <form encType="multipart/form-data"  onSubmit={submitData} className="flex flex-col w-full bg-white p-2 rounded-md lg:p-4">
                                <div className="admin-content-table-head mb-8">
                                    <h1 className="text-gray-500">Rediģēt produktu</h1>
                                </div>
                                <div className="flex w-full flex-grow flex-col">
                                    <div className="flex lg:space-x-2 flex-col lg:flex-row">
                                        <div className="lg:w-1/2 w-full">
                                            <div className="flex flex-col space-y-1 ">
                                                <label className="text-gray-500" htmlFor="">Proukta nosaukums (LV)</label>
                                                <input
                                                    value={titleLv}
                                                    type="text"
                                                    name="productTitle"
                                                    className="flex-grow outline-none resize-none rounded-md p-2 border-[1px] border-gray-300"
                                                    onChange={(e) => setTitleLv(e.target.value)}
                                                />
                                                {error.product_title_lv && (
                                                    <span className="err-msg">{error.product_title_lv[0]}</span>
                                                )}
                                            </div>
                                            <div className="flex flex-col space-y-1 ">
                                                <label className="text-gray-500" htmlFor="">Proukta nosaukums (ENG)</label>
                                                <input
                                                    value={titleEng}
                                                    type="text"
                                                    name="productTitle"
                                                    className="flex-grow outline-none resize-none rounded-md p-2 border-[1px] border-gray-300"
                                                    onChange={(e) => setTitleEng(e.target.value)}
                                                />
                                                {error.product_title_eng && (
                                                    <span className="err-msg">{error.product_title_eng[0]}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="lg:w-1/2 w-full">
                                            <div className="flex flex-col space-y-1 ">
                                                <label className="text-gray-500" htmlFor="">Proukta nosaukums (RU)</label>
                                                <input
                                                    value={titleRu}
                                                    type="text"
                                                    name="productTitle"
                                                    className="flex-grow outline-none resize-none rounded-md p-2 border-[1px] border-gray-300"
                                                    onChange={(e) => setTitleRu(e.target.value)}
                                                />
                                                {error.product_title_ru && (
                                                    <span className="err-msg">{error.product_title_ru[0]}</span>
                                                )}
                                            </div>
                                            <div className="flex flex-col space-y-1 ">
                                                <label className="text-gray-500" htmlFor="">Kategorija</label>
                                                <select
                                                    name="productTitle"
                                                    className="flex-grow outline-none resize-none rounded-md p-2 border-[1px] border-gray-300"
                                                    value={category}
                                                    onChange={handleCategorySelect}
                                                >
                                                    <option value=""></option>
                                                    {data.map((item)=> (
                                                        <option value={item.id} >{item.category_name_lv}</option>
                                                    ))}
                                                </select>
                                                {error.category_id && (
                                                    <span className="err-msg">{error.category_id[0]}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex lg:flex-row flex-col space-x-2">
                                        <div className="flex flex-col space-y-1 h-80 mt-8 lg:w-1/3">
                                            <label className="text-gray-500" htmlFor="">Produkta apraksts (LV)</label>
                                            <textarea
                                                value={descLv}
                                                name="productTitle"
                                                className="flex-grow outline-none resize-none rounded-md p-2 border-[1px] border-gray-300"
                                                onChange={(e) => setDescLv(e.target.value)}
                                            >
                                                </textarea>
                                            {error.product_desc_lv && (
                                                <span className="err-msg">{error.product_desc_lv}</span>
                                            )}
                                        </div>
                                        <div className="flex flex-col space-y-1 h-80 mt-8 lg:w-1/3">
                                            <label className="text-gray-500" htmlFor="">Produkta apraksts (ENG)</label>
                                            <textarea
                                                value={descEng}
                                                name="productTitle"
                                                className="flex-grow outline-none resize-none rounded-md p-2 border-[1px] border-gray-300"
                                                onChange={(e) => setDescEng(e.target.value)}
                                            >
                                                </textarea>
                                            {error.product_desc_eng && (
                                                <span className="err-msg">{error.product_desc_eng}</span>
                                            )}
                                        </div>
                                        <div className="flex flex-col space-y-1 h-80 mt-8 lg:w-1/3">
                                            <label className="text-gray-500" htmlFor="">Produkta apraksts (RU)</label>
                                            <textarea
                                                value={descRu}
                                                name="productTitle"
                                                className="flex-grow outline-none resize-none rounded-md p-2 border-[1px] border-gray-300"
                                                onChange={(e) => setDescRu(e.target.value)}
                                            >
                                                </textarea>
                                            {error.product_desc_ru && (
                                                <span className="err-msg">{error.product_desc_ru}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex lg:flex-row flex-col space-x-2 mt-8">
                                        <div className="flex flex-col space-y-1 lg:w-1/3">
                                            <label htmlFor="" className="text-gray-500">Titula bilde</label>
                                            <div className="flex items-center justify-center w-full h-96">
                                                {mainImgUrl ? (
                                                    <div className="relative h-96 w-full object-contain ">
                                                        <img className="absolute h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain" src={mainImgUrl} alt=""/>
                                                        <div className="flex items-center justify-center bg-gray-100 bg-opacity-50 absolute h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 hover:opacity-100 duration-300">
                                                            <label htmlFor="image" className="admin-btn">Mainīt bildi</label>
                                                            <input
                                                                type="file"
                                                                name="image"
                                                                id="image"
                                                                className="hidden"
                                                                onChange={handleChange}
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
                                        <div className="flex flex-col space-y-1 lg:w-2/3">
                                            <div className="flex justify-between">
                                                <label htmlFor="" className="text-gray-500">Papildus bildes</label>
                                                <label htmlFor="multipleImg" className="underline text-blue-400 cursor-pointer hover:text-blue-600">Pievienot bildes</label>
                                                <input className="hidden" ref={fileInputRef} type="file" id="multipleImg" onChange={handleFileChange} multiple accept="image/*" />
                                            </div>
                                            <div className="grid h-96 lg:grid-cols-4 lg:grid-rows-2 gap-2">
                                                {previews.map((preview, index) => (
                                                    <div className="relative">
                                                        <img className="object-cover h-full w-full" key={index} src={preview} alt={`Preview ${index}`} />
                                                        <div className="absolute cursor-pointer flex items-center justify-center top-0 right-0 bg-white mt-2 mr-2 rounded-full h-6 w-6" onClick={() => handleRemove(index)}>
                                                            <GrClose />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {error.images && (
                                                <span className="err-msg">{error.images[0]}</span>
                                            )}
                                        </div>

                                    </div>
                                </div>
                                {submitLoader ? (
                                    <button type="submit" className="admin-btn mt-4 ml-auto cursor-auto hover:blue-400">
                                        <ButtonLoader/>
                                    </button>
                                ):(
                                    <button type="submit" className="admin-btn mt-4 ml-auto" onClick={submitData}>Saglabāt</button>
                                )}
                            </form>
                        </div>

                    </div>
                </div>


            </div>
        </>

    )
}

export default Edit
