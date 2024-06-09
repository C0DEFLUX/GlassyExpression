import React, {useState} from 'react';
import {HiOutlineCog} from "react-icons/hi";
import {GoPencil} from "react-icons/go";
import {FaRegTrashAlt} from "react-icons/fa";
import {IoTrashOutline} from "react-icons/io5";
import axios from "axios";
import {ErrorPopUp, SuccessPopUp} from "../../Helpers";
import {IoMdCheckmark, IoMdClose} from "react-icons/io";

const CategoryTable = ({data, setData, onDelete}) => {

    const[deleteModalConf, setDeleteModalConf] = useState(false)
    const [deleteCatId, setDeleteCatId] = useState(null)
    const [message, setMessage] = useState('')
    const [apiError, setApiError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState(false)
    const API_URL = `${process.env.REACT_APP_API_URL}`
    const [editableRowId, setEditableRowId] = useState(null)
    const [newValues, setNewValues] = useState({})
    const token = localStorage.getItem('token')
    const [error, setError] = useState([])



    //Set category id to be deleted and show the delete modal
    const openCategoryDeleteConfModal = (id) => {
        setDeleteCatId(id)
        setDeleteModalConf(true)
    }
    //Close the delete modal and set category id to null
    const closeCategoryDeleteConfModal = () => {
        setDeleteModalConf(false)
        setDeleteCatId(null)
    }

    //Call the delete api and close the modal set the id to null
    const deleteCategory = () => {
        onDelete(deleteCatId)
        setDeleteModalConf(false)
        setDeleteCatId(null)
    }

    const showEditFields = (id) => {
        setEditableRowId(id);
        const item = data.find((item) => item.id === id);
        setNewValues({
            category_name_lv: item.category_name_lv,
            category_name_eng: item.category_name_eng,
            category_name_ru: item.category_name_ru,
        });
    }

    const hideEditFields = () => {
        setEditableRowId(null);
        setNewValues({});
        setError([]);
    };

    const handleInputChange = (e, field) => {
        setNewValues({ ...newValues, [field]: e.target.value });
    };

    const handleSubmit = async(id) => {
        await axios.post(`${API_URL}/edit-category/${id}`, {
            id,
            ...newValues

        },{
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                setApiSuccess(true)
                setMessage(response.data.success_msg)

                if (response.status === 201) {
                    const updatedCategory = response.data.data;
                    const updatedData = data.map(cat => cat.id === id ? updatedCategory : cat);
                    setData(updatedData);

                    hideEditFields();
                }
            })
            .catch(error => {
                if(error.response.status === 422) {
                    setError(error.response.data.errors)
                }
                if(error.response.status === 404) {
                    setApiError(true)
                }
                if(error.response.status === 403) {
                    setApiError(true)
                }
            })
        // hideEditFields()
    }

    return (
        <>
            {apiError && (
                <ErrorPopUp/>
            )}
            {apiSuccess && (
                <SuccessPopUp message={message}/>
            )}
            <table className="w-full font-light rounded-md">
                <thead>
                <tr className="bg-blue-400 text-white">
                    <th className="px-4 py-4 text-start">Kategorija (LV)</th>
                    <th className="px-4 py-4 text-start">Kategorija (ENG)</th>
                    <th className="px-4 py-4 text-start">Kategorija (RU)</th>
                    <th className="px-4 py-4 text-start">Pievienošanas Datums</th>
                    <th className="px-4 py-4 text-center flex justify-center text-2xl"><HiOutlineCog /></th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id} id={item.id} className="bg-neutral-100 text-[#485B69] hover:bg-neutral-200 hover:text-black">
                        <td className="px-4 py-2 text-start">
                            {editableRowId === item.id ? (
                                <>
                                    <input
                                        className="p-2 rounded-xl outline-none bg-white"
                                        value={newValues.category_name_lv}
                                        type="text"
                                        onChange={(e) => handleInputChange(e, 'category_name_lv')}
                                    />
                                    {error.category_name_lv && (
                                        <span className="err-msg">{error.category_name_lv[0]}</span>
                                    )}
                                </>
                            ) : (
                                item.category_name_lv
                            )}
                        </td>
                        <td className="px-4 py-2 text-start">
                            {editableRowId === item.id ? (
                                <>
                                    <input
                                    className="p-2 rounded-xl outline-none bg-white"
                                    value={newValues.category_name_eng}
                                        type="text"
                                        onChange={(e) => handleInputChange(e, 'category_name_eng')}
                                    />
                                    {error.category_name_eng && (
                                        <span className="err-msg">{error.category_name_eng[0]}</span>
                                    )}
                                </>
                            ) : (
                                item.category_name_eng
                            )}
                        </td>
                        <td className="px-4 py-2 text-start">
                            {editableRowId === item.id ? (
                                <>
                                    <input
                                        className="p-2 rounded-xl outline-none bg-white"
                                        value={newValues.category_name_ru}
                                        type="text"
                                        onChange={(e) => handleInputChange(e, 'category_name_ru')}
                                    />
                                    {error.category_name_ru && (
                                        <span className="err-msg">{error.category_name_ru[0]}</span>
                                    )}
                                </>
                            ) : (
                                item.category_name_ru
                            )}
                        </td>
                        <td className="px-4 py-1 text-start">{item.created_at}</td>
                        <td className="px-4 py-2 flex items-center justify-center h-[160px] text-2xl space-x-2">
                            {editableRowId === item.id ? (
                                <div className="flex space-x-2">
                                    <IoMdCheckmark className="hover:text-green-500 cursor-pointer" onClick={()=> handleSubmit(item.id)}/>
                                    <IoMdClose className="hover:text-blue-400 cursor-pointer" onClick={hideEditFields} />
                                </div>
                            ) : (
                                <GoPencil
                                    className="hover:text-blue-400 cursor-pointer"
                                    onClick={() => showEditFields(item.id)}
                                />
                            )}
                            <IoTrashOutline className="hover:text-red-500 text-2xl cursor-pointer" onClick={() => openCategoryDeleteConfModal(item.id)}/>
                        </td>

                    </tr>

                ))}
                </tbody>
            </table>
            {deleteModalConf && (
                <div className="fixed flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-40 h-screen w-full bg-opacity-50 bg-black ">
                    <div className="flex flex-col items-center text-center max-w-[25rem] space-y-2 bg-white p-2 py-4 rounded">
                        <h1>Dzēst kategoriju</h1>
                        <p>Vai tiešām vēlies dzēst šo kategoriju? Kategorija un <span className="font-semibold">visi produkti zem kategorijas</span> tiks dzēsti uz visiem laikiem!</p>
                        <div className="flex space-x-2">
                            <div className="admin-btn bg-red-500 hover:bg-red-600 mt-4 ml-auto" onClick={deleteCategory}>Dzēst</div>
                            <button className="admin-btn bg-gray-500 hover:bg-gray-600 mt-4 ml-auto" onClick={closeCategoryDeleteConfModal}>Atcelt</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CategoryTable;