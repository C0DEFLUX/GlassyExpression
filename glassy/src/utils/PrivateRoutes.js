import {Outlet, Navigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const PrivateRoutes = () => {

    const [auth, setAuth] = useState(true)
    let token = localStorage.getItem('token')
    const API_URL = `${process.env.REACT_APP_API_URL}`

    const handleAuth = () => {

         axios.get(`${API_URL}/verify-user`, {
             headers: {
                 Authorization: `${token}`,
             },})
            .then(response => {
                if(response.data.status === 200){
                    setAuth(true)
                }
                if(response.data.status === 403) {
                    setAuth(false)
                }

            })
            .catch(error => {
                setAuth(false)
            });
    };

    useEffect(()=> {
        handleAuth()
        if(!token) {
            setAuth(false)
        }
    }, [])

    return (
        auth ? <Outlet/> : <Navigate to="/admin"/>
    )
}

export default PrivateRoutes