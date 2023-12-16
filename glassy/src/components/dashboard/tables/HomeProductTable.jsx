const HomeProductTable = ({data}) => {

    console.log(data)

    return (
        <table className="w-full font-light rounded-md">
            <thead>
            <tr className="bg-blue-400 text-white">
                <th className="px-4 py-4 text-start">Produkts</th>
                <th className="px-4 py-4 text-start">Produkta Titula Bilde</th>
                <th className="px-4 py-4 text-start">Pievienošanas Datums</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id} className="bg-neutral-100 text-[#485B69] hover:bg-neutral-200 hover:text-black">
                    <td className="px-4 py-1 md:py-4 text-start">{item.product_title}</td>
                    <td className="px-4 py-2 text-start">
                        <img className="h-[9rem] object-contain max-w-[10rem] sm:max-w-full" src={item.main_img} alt=""/>
                    </td>
                    <td className="px-4 py-1 text-start">{item.created_at}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default HomeProductTable;