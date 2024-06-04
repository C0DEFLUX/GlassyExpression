import React, {useEffect, useState} from 'react';
import {ErrorPopUp, SuccessPopUp} from "../Helpers";
import AdminHeader from "./AdminHeader";
import axios from "axios";
import Loader from "../Helpers/Loader";
import HomeProductTable from "./tables/HomeProductTable";
import loader from "../Helpers/Loader";
import CategoryTable from "./tables/CategoryTable";

const CategoryAdd = () => {
    const [apiError, setApiError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState(false)
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState('')

    const [loader, setLoader] = useState(true)
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(false);

    const [categoryNameLv, setCategoryNameLv] = useState('')
    const [categoryNameEng, setCategoryNameEng] = useState('')
    const [categoryNameRu, setCategoryNameRu] = useState('')

    const API_URL = `${process.env.REACT_APP_API_URL}`
    const fetchData = () => {
        axios.get(`${API_URL}/category-data`)
            .then(response => {
                setLoader(false)
                setData(response.data)
            })
            .catch(error => {
                setApiError(true)
            })
    }

    useEffect(() => {
        fetchData()
    }, [refresh])

    const addCategory = () => {
        let payload = {
            category_name_lv: categoryNameLv,
            category_name_eng: categoryNameEng,
            category_name_ru: categoryNameRu
        }

        axios.post(`${API_URL}/add-category`, payload)
            .then(response => {
                setApiSuccess(true)
                setMessage(response.data.success_msg)
                setCategoryNameLv('')
                setCategoryNameEng('')
                setCategoryNameRu('')
                setErrors('')
                setRefresh(!refresh)
                setTimeout(() => {
                    setApiSuccess(false);
                }, 5000);
            })
            .catch(error => {
                if(error.response.status === 404) {
                    setApiError(true)
                }
                if(error.response.status === 422) {
                    setErrors(error.response.data.errors)

                }
            })
        }

    const deleteCategory = async (categoryId) => {
        axios.delete(`${API_URL}/delete-category/${categoryId}`)
            .then((response) => {
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
            <div className="admin-contanier md:ml-[20rem] h-screen bg-gray-100 overflow-scroll">
                <div className="min-h-screen flex flex-col">
                    <AdminHeader/>
                    <div className="admin-container-content w-full flex-grow p-4 flex ">
                        <div className="flex flex-col w-full bg-white p-2 rounded-md lg:p-4">
                            <div className="admin-content-table-head mb-8">
                                <h1 className="text-gray-500">Kategorijas</h1>
                            </div>
                            <div className="mb-5">
                                <div className="mb-4 text-gray-600">
                                    <h2>Pievienot kategoriju</h2>
                                </div>
                                <div className="lg:flex lg:space-x-2">
                                    <div className="flex lg:w-1/3 flex-col space-y-1">
                                        <label className="text-gray-500" htmlFor="cat-lv">Kategorija (LV)</label>
                                        <input
                                            className="h-11 outline-none resize-none rounded-md p-2 border-[1px] border-gray-300"
                                            type="text"
                                            value={categoryNameLv}
                                            onChange={(e) => setCategoryNameLv(e.target.value)}
                                            id="cat-lv"
                                        />
                                        {errors.category_name_lv && (
                                            <span className="err-msg">{errors.category_name_lv[0]}</span>
                                        )}
                                    </div>
                                    <div className="flex lg:w-1/3 flex-col space-y-1">
                                        <label className="text-gray-500" htmlFor="cat-eng">Kategorija (ENG)</label>
                                        <input
                                            className="h-11 outline-none resize-none rounded-md p-2 border-[1px] border-gray-300"
                                            type="text"
                                            value={categoryNameEng}
                                            onChange={(e) => setCategoryNameEng(e.target.value)}
                                            id="cat-eng"
                                        />
                                        {errors.category_name_eng && (
                                            <span className="err-msg">{errors.category_name_eng[0]}</span>
                                        )}
                                    </div>
                                    <div className="flex lg:w-1/3 flex-col space-y-1">
                                        <label className="text-gray-500" htmlFor="cat-ru">Kategorija (RU)</label>
                                        <input
                                            className="h-11 outline-none resize-none rounded-md p-2 border-[1px] border-gray-300 "
                                            type="text"
                                            value={categoryNameRu}
                                            onChange={(e) => setCategoryNameRu(e.target.value)}
                                            id="cat-ru"
                                        />
                                        {errors.category_name_ru && (
                                            <span className="err-msg">{errors.category_name_ru[0]}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button onClick={addCategory} className="admin-btn mt-2">Pievienot</button>
                                </div>
                            </div>
                            <div className={loader ? 'flex justify-center' : 'admin-content-table h-[28rem] overflow-scroll rounded-md' }>
                                {loader ? (
                                    <Loader />
                                ):(
                                    <CategoryTable data={data} setData={setData} onDelete={deleteCategory}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </>
    );
};

export default CategoryAdd;