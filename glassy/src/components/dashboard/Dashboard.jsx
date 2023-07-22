import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import HomeProductTable from "./HomeProductTable";
import AdminHeader from "./AdminHeader";



function Dashboard() {

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

        if(response.status === 403) {
            navigate('/admin')
        }

        if(document.getElementById('admin-loader')) {
            document.getElementById('admin-loader').style.display = "none";
        }

    }

    //Run function everytime the link is /dashboard
    useEffect( () => {
        routerAuth();
    }, [])


    return (
        <>
            <div id='admin-loader' className="w-full min-h-screen bg-white flex justify-center items-center absolute top-0 left-0 z-50">
                <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
            <div className="admin-contanier min-h-screen bg-[#F5F5F5] overflow-hidden md:ml-[20rem]">
                <div className="min-h-screen flex flex-col">
                    <AdminHeader/>
                    <div className="admin-container-content w-full flex-grow p-2 lg:p-4 flex">
                        <HomeProductTable/>
                    </div>
                </div>


            </div>
        </>

    )
}

export default Dashboard