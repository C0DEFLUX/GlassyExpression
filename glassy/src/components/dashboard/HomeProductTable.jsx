import Img from "../../assets/img/hero.jpg";
import {useEffect, useState} from "react";

function HomeProductTable() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost/api/product-data')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log('Error fetching data:', error))
    }, [])

    return (
        <div className="admin-content-tabel-wrapper bg-white shadow w-full flex-grow rounded-md p-2 lg:p-4">
            <div className="admin-content-table-head mb-8">
                <h1 className="text-xl text-[#485B69]">Produktu saraksts</h1>
            </div>
            <div className="admin-content-table h-[75vh] overflow-scroll rounded-md">
                <table className="w-full font-light rounded-md">
                    <tr className="bg-blue-400 text-white">
                        <th className="px-4 py-4 text-start">Prokuts</th>
                        <th className="px-4 py-4 text-start">Produkta Titula Bilde</th>
                        <th className="px-4 py-4 text-start">Pievienošanas Datums</th>
                    </tr>
                    {data.map((item) => (
                        <tr key={item.id} className="bg-neutral-100 text-[#485B69] hover:bg-neutral-200 hover:text-black">
                            <td className="px-4 py-1 md:py-4 text-start">{item.product_title}</td>
                            <td className="px-4 py-2 text-start">
                                <img className="h-[9rem] object-contain max-w-[10rem] sm:max-w-full" src={item.main_img} alt=""/>
                            </td>
                            <td className="px-4 py-1 text-start">{item.created_at}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default HomeProductTable;