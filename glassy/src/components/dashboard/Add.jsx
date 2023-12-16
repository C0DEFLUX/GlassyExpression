import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import AdminHeader from "./AdminHeader";
import axios from "axios";

function Add() {

    const [productTitle, setProductTitle] = useState('')
    const [mainImg, setMainImg] = useState('')
    const [loader, setLoader] = useState(true)
    const API_URL = `${process.env.REACT_APP_API_URL}`

    const handleChange = (file) => {
        setMainImg(file[0])
    }

    async function submitData(e) {
        e.preventDefault()
        const formData = new FormData()

        formData.append('image', mainImg)
        formData.append('product_title', productTitle)

        let cleanData = {formData, productTitle}

        axios.post(`${API_URL}/image-upload`, cleanData)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {

            })

    }

    return (
        <>
            <div className="admin-contanier md:ml-[20rem] min-h-screen bg-gray-100 overflow-hidden">
                <div className="min-h-screen flex flex-col">
                    <AdminHeader/>
                    <div className="admin-container-content w-full flex-grow p-4 flex">
                        <div>
                            <form onSubmit={submitData}>
                                <input
                                    value={productTitle}
                                    type="text"
                                    name="productTitle"
                                    onChange={(e) => setProductTitle(e.target.value)}
                                    placeholder="Produkta nosaukums"
                                />
                                <span id="prodTitleErr"></span>
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    onChange={e => handleChange(e.target.files)}
                                    placeholder="Produkta nosaukums"
                                />
                                <span id="mainImgErr"></span>
                                <button type="submit" className="admin-btn" onClick={submitData}>Send</button>
                            </form>

                        </div>

                    </div>
                </div>


            </div>
        </>

    )
}

export default Add
