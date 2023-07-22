
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Login() {

    //Get input values
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //Navigate
    const navigate = useNavigate()

    //Get input error spans
    const userErr = document.getElementById('user-err')
    let passErr = document.getElementById('pass-err')

    async function login() {


        let cleanData = {username, password}

        let response = await fetch('http://localhost/api/login', {

            method: 'POST',
            body: JSON.stringify(cleanData),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }

        })



        response = await response.json()

        // console.log(response.passErr)

        if(response.passErr !== '') {
            document.getElementById('pass-err').innerHTML = ''
            document.getElementById('pass-err').append(response.passErr)
        }else {
            document.getElementById('pass-err').innerHTML = ''
        }

        if(response.userErr !== '') {
            document.getElementById('user-err').innerHTML = ''
            document.getElementById('user-err').append(response.userErr)
        }else {
            document.getElementById('user-err').innerHTML = ''
        }

        if(response.status === 200) {

            localStorage.setItem('token', response.token)
            navigate('/dashboard');
        }

    }

    return (
        <div className="login-container min-h-screen flex justify-center items-center p-2 bg-[#F5F5F5]">
            <div className="login-box flex flex-col gap-3 bg-white shadow rounded-md p-2 py-8 w-full md:w-[30rem] md:p-20 md:min-h-[30rem] ">
                <h1 className="text-2xl text-center mb-4 text-[#485B69]">Admin Login</h1>
                <input className="p-4 bg-[#F5F5F5] rounded-md outline-blue-400"
                    value={username}
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Lietoājvārds"
                />
                <span className="text-red-600" id="user-err" ></span>
                <input className="p-4 bg-[#F5F5F5] rounded-md outline-blue-400"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Parole"
                />
                <span className="text-red-600" id="pass-err" ></span>
                <button className="bg-blue-400 p-4 text-xl text-white rounded-md" onClick={login}>LOGIN</button>
            </div>
        </div>
    )
}

export default Login
