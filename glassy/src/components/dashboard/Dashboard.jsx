import {useEffect, useState} from "react";
import HomeProductTable from "./tables/HomeProductTable";
import AdminHeader from "./AdminHeader";
import axios from "axios";
import ErrorPopUp from "../Helpers/ErrorPopUp";
import Loader from "../Helpers/Loader";
import {SuccessPopUp} from "../Helpers";

const Dashboard = () => {

    const [data, setData] = useState([])
    const [apiError, setApiError] = useState(false)
    const [loader, setLoader] = useState(true)
    const API_URL = `${process.env.REACT_APP_API_URL}`
    const [message, setMessage] = useState('')
    const [apiSuccess, setApiSuccess] = useState(false)
    const success = localStorage.getItem('success')
    const [refresh, setRefresh] = useState(false);


    if(success === 'true') {
        setApiSuccess(true)
        setMessage(localStorage.getItem('success_msg'))
        localStorage.removeItem('success')
        localStorage.removeItem('success_msg')
    }

    useEffect(() => {

        const fetchData = () => {
            axios.get(`${API_URL}/product-data`)
                .then(response => {
                    setLoader(false)
                    setData(response.data)
                })
                .catch(error => {
                    setApiError(true)
                })
        }

        fetchData()

    }, [refresh])

    const handleDelete = async (id) => {
        axios.delete(`${API_URL}/delete-product/${id}`)
            .then(response => {
                setMessage(response.data.message)
                setApiSuccess(true)
                setRefresh(!refresh)
                setTimeout(() => {
                    setApiSuccess(false);
                }, 5000);
            })
            .catch((error) => {
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
            {apiSuccess && (
                <SuccessPopUp message={message}/>
            )}
            <div className="admin-contanier min-h-screen bg-gray-100 overflow-hidden md:ml-[20rem]">
                <div className="min-h-screen flex flex-col">
                    <AdminHeader/>
                    <div className="admin-container-content w-full flex-grow p-2 lg:p-4 flex">
                        <div className="admin-content-tabel-wrapper bg-white shadow w-full flex-grow rounded-md p-2 lg:p-4">
                            <div className="admin-content-table-head mb-8">
                                <h1 className="text-gray-500">Produktu saraksts</h1>
                            </div>
                            <div className={loader ? 'flex justify-center' : 'admin-content-table h-[75vh] overflow-scroll rounded-md' }>
                                {loader ? (
                                    <Loader />
                                ):(
                                    <HomeProductTable onDelete={handleDelete} data={data}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard