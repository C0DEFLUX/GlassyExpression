import Img from "../../assets/img/hero.jpg";

function HomeProductTable() {


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
                    <tr className="bg-neutral-100 text-[#485B69] hover:bg-neutral-300 hover:text-black">
                        <td className="px-4 py-1 text-start">dogs</td>
                        <td className="px-4 py-1 text-start"><img className="h-[10rem] object-contain max-w-[10rem] sm:max-w-full" src={Img} alt=""/></td>
                        <td className="px-4 py-1 text-start">dogs</td>
                    </tr>
                    <tr className="bg-neutral-200  text-[#485B69] hover:bg-neutral-300 hover:text-black">
                        <td className="px-4 py-2 text-start">Dog</td>
                        <td className="px-4 py-2 text-start"><img className="h-[10rem] object-contain max-w-[10rem] sm:max-w-full" src={Img} alt=""/></td>
                        <td className="px-4 py-2 text-start">dogs</td>
                    </tr>
                    <tr className="bg-neutral-100 text-[#485B69] hover:bg-neutral-300 hover:text-black">
                        <td className="px-4 py-1 text-start">dogs</td>
                        <td className="px-4 py-1 text-start"><img className="h-[10rem] object-contain max-w-[10rem] sm:max-w-full" src={Img} alt=""/></td>
                        <td className="px-4 py-1 text-start">dogs</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default HomeProductTable;