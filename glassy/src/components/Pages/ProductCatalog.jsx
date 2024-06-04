import React, {useEffect, useState} from 'react';
import Header from "../Header";
import axios from "axios";

const ProductCatalog = () => {

    const [loader, setLoader] = useState(true)
    const [data, setData] = useState([])
    const API_URL = `${process.env.REACT_APP_API_URL}`


    useEffect(() => {
        const fetchData = () => {
            axios.get(`${API_URL}/product-data`)
                .then(response => {
                    setLoader(false)
                    setData(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        fetchData()

    }, [])

    return (
        <>
            <Header/>
            <div className="flex justify-center mt-28">
                <div className="container p-2 sm:p-0 min-h-screen w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-5">
                    {data.map((item)=> (
                        <div className="h-[25rem] relative bg-red-500" key={item.id}>
                            <img className="w-full h-full object-cover" src={item.main_img} alt=""/>
                            <div className="absolute bottom-2 left-2">
                                <p className="bg-white rounded-xl p-2">{item.product_title_lv}</p>
                            </div>
                            <div className="absolute bottom-2 right-2">
                                <button className="admin-btn">Apskatīt</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
};

export default ProductCatalog;