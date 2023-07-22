import {PiSignOutBold} from "react-icons/pi";
import {useNavigate} from "react-router-dom";

function AdminSmallHeader() {

    const navigate = useNavigate();

    function logout() {

        localStorage.removeItem('token')
        navigate('/admin')

    }

    return (
        <div className="admin-header-top bg-white flex gap-4 items-center justify-end p-4 shadow">
            <h3 className="text-[#485B69]">Sveiki, Marija</h3>
            <button className="admin-btn flex items-center gap-2" onClick={logout}>
                <p>Iziet</p>
                <PiSignOutBold />
            </button>
        </div>
    )
}

export default AdminSmallHeader