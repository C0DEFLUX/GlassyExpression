import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import AdminHeader from "./AdminHeader";



function Add() {

    const [productTitle, setProductTitle] = useState('')
    const [mainImg, setMainImg] = useState('')

    let token = localStorage.getItem('token')

    const navigate = useNavigate();

    async function routerAuth() {
        let cleanData = {token}
        let response = await fetch('http://localhost/api/router-auth', {
            method: 'POST',
            body: JSON.stringify(cleanData),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        response = await response.json()

        if(response.status === 403) navigate('/admin')

        if(document.getElementById('admin-loader')) document.getElementById('admin-loader').style.display = "none";

    }

    //Run function everytime the link is /dashboard
    useEffect( () => {
        routerAuth();
    }, [])

    const handleChange = (file) => {
        setMainImg(file[0])
    }

    async function submitData(e) {
        e.preventDefault()
        const formData = new FormData()

        formData.append('image', mainImg)
        formData.append('product_title', productTitle)

        let cleanData = {formData, productTitle}

        let response = await fetch('http://localhost/api/image-upload', {
            method: 'POST',
            body: formData,
        })
        response = await response.json()

        console.log(response)
    }


    return (
        <>
            <div id='admin-loader' className="w-full min-h-screen bg-white flex justify-center items-center absolute top-0 left-0 z-50">
                <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
            <div className="admin-contanier md:ml-[20rem] min-h-screen bg-[#F5F5F5] overflow-hidden">
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
