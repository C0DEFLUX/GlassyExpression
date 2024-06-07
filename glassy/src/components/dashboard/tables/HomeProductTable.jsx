import { HiOutlineCog } from "react-icons/hi";
import { GoPencil } from "react-icons/go";
import {useNavigate} from "react-router-dom";
import {IoTrashOutline} from "react-icons/io5";
import React, {useState} from "react";
import axios from "axios";


const HomeProductTable = ({data, onDelete}) => {

    const navigate = useNavigate()
    const [deleteConfModal, setDeleteConfModal] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const API_URL = `${process.env.REACT_APP_API_URL}`


    const openEdit = (name) => {
        navigate(`rediģēt/${name}`)
    }

    const openDeleteConfModal = (id) => {
        setDeleteId(id)
        setDeleteConfModal(true)
    }

    const closeDeleteConfModal = () => {
        setDeleteConfModal(false)
        setDeleteId(null)
    }

    const handleDelete = async () => {
        onDelete(deleteId)
        setDeleteConfModal(false)
        setDeleteId(null)
    }

    return (
        <>
        <table className="w-full font-light rounded-md">
            <thead>
            <tr className="bg-blue-400 text-white">
                <th className="px-4 py-4 text-start">Produkts</th>
                <th className="px-4 py-4 text-start">Produkta Kategorija</th>
                <th className="px-4 py-4 text-start">Produkta Titula Bilde</th>
                <th className="px-4 py-4 text-start">Pievienošanas Datums</th>
                <th className="px-4 py-4 text-center flex justify-center text-2xl"><HiOutlineCog /></th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id} className="bg-neutral-100 text-[#485B69] hover:bg-neutral-200 hover:text-black">
                    <td className="px-4 py-1 md:py-4 text-start">{item.product_title_lv}</td>
                    <td className="px-4 py-1 text-start">{item.category.lv}</td>
                    <td className="px-4 py-2 text-start">
                        <img className="h-[9rem] object-contain max-w-[10rem] sm:max-w-full" src={item.main_img} alt=""/>
                    </td>
                    <td className="px-4 py-1 text-start">{item.created_at}</td>

                    <td className="px-4 py-2 flex items-center justify-center h-[160px] text-2xl space-x-2">
                        <GoPencil className="hover:text-blue-400 cursor-pointer" onClick={()=>openEdit(item.id)}/>
                        <IoTrashOutline className="hover:text-red-400 cursor-pointer" onClick={() => openDeleteConfModal(item.id)}/>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        {deleteConfModal && (
            <div className="fixed flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-40 h-screen w-full bg-opacity-50 bg-black ">
                <div className="flex flex-col items-center text-center max-w-[25rem] space-y-2 bg-white p-2 py-4 rounded">
                    <h1>Dzēst produktu!</h1>
                    <p>Vai tiešām vēlies dzēst šo produktu? Produkts tiks dzēsts uz visiem laikiem!</p>
                    <div className="flex space-x-2">
                        <div className="admin-btn bg-red-500 hover:bg-red-600 mt-4 ml-auto" onClick={handleDelete}>Dzēst</div>
                        <button className="admin-btn bg-gray-500 hover:bg-gray-600 mt-4 ml-auto" onClick={closeDeleteConfModal}>Atcelt</button>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default HomeProductTable;