
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {ButtonLoader, ErrorPopUp, SuccessPopUp} from "../Helpers";

const Login = () => {

    //Get input values
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [apiError, setApiError] = useState('')
    const [submitLoader, setSubmitLoader] = useState(false)
    const [error, setError] = useState([])
    const API_URL = `${process.env.REACT_APP_API_URL}`


    //Navigate
    const navigate = useNavigate()

    const login = async () => {
        let payload = {username, password}
        setSubmitLoader(true)
        await axios.post(`${API_URL}/login`, payload)
            .then(response => {
                if(response.status === 200) {
                    localStorage.setItem('token', response.data.token)
                    navigate('/panelis');
                }
                setSubmitLoader(false)
            })
            .catch(error => {
                if(error.response.status === 404) {
                    setApiError(true)
                    setSubmitLoader(false)
                }
                if(error.response.status === 422) {
                    setError(error.response.data.errors)
                    setSubmitLoader(false)
                }
            })
    }

    return (
        <>
            {apiError && (
                <ErrorPopUp/>
            )}
            <div className="login-container min-h-screen md:flex-row flex-col flex justify-center items-center p-2 bg-[#F5F5F5]">
                <div className="md:min-h-[30rem]">
                    <div className="bg-white md:mr-3 md:mb-0 mb-3 rounded-xl shadow p-2">
                        <h1 className="mb-2">Test Account</h1>
                        <p><span className="text-gray-500">Username:</span> TestUser</p>
                        <p><span className="text-gray-500">Password:</span> TestPassword</p>
                    </div>
                </div>
                <div className="login-box flex flex-col gap-3 bg-white shadow rounded-xl p-2 py-8 w-full md:w-[30rem] md:p-20 md:min-h-[30rem] ">
                    <h1 className="text-2xl text-center mb-4 text-[#485B69]">Admin Login</h1>
                    <input className="p-4 bg-[#F5F5F5] rounded-md outline-blue-400"
                        value={username}
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Lietoājvārds"
                    />
                    {error.username && (
                        <span className="text-red-600" >{error.username[0]}</span>
                    )}
                    <input className="p-4 bg-[#F5F5F5] rounded-md outline-blue-400"
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Parole"
                    />
                    {error.password && (
                        <span className="text-red-600">{error.password[0]}</span>
                    )}
                    {submitLoader ? (
                        <button type="submit" className="bg-blue-400 p-4 text-xl text-white rounded-md cursor-auto">
                            <ButtonLoader/>
                        </button>
                    ) :(
                        <button className="bg-blue-500 p-4 text-xl text-white rounded-md hover:bg-blue-400" onClick={login}>LOGIN</button>
                    )}
                </div>
            </div>

        </>

    )
}

export default Login
