import {PiSignOutBold} from "react-icons/pi";
import {useLocation, useNavigate} from "react-router-dom";
import {HiOutlineMenuAlt2} from "react-icons/hi";
import Logo from "../../assets/img/logo_small.png";
import {AiOutlineDelete, AiOutlineEdit, AiOutlineHome, AiOutlinePlusSquare} from "react-icons/ai";
import {GrClose} from "react-icons/gr";

function AdminHeader() {

    const navigate = useNavigate();

    function logout() {

        localStorage.removeItem('token')
        navigate('/admin')

    }

    function toggleNav() {
        document.querySelector('.admin-header-main').classList.add('w-full')
        document.querySelector('.admin-header-main').classList.remove('hidden')
    }

    function closeNav() {
        document.querySelector('.admin-header-main').classList.add('hidden')
        document.querySelector('.admin-header-main').classList.remove('w-full')
    }

    const location = useLocation();

    // Function to check if the link matches the current URL
    const isActiveLink = (link) => {
        return link === location.pathname ? 'bg-white text-blue-400' : '';
    }

    return (
        <>
        <div className="admin-header-top bg-white flex gap-4 items-center justify-between  md:justify-end p-4 shadow">
            <HiOutlineMenuAlt2 className="text-2xl md:hidden select-none cursor-pointer" onClick={toggleNav}/>
            <div className="flex gap-2 items-center flex-wrap">
                <h3 className="text-[#485B69]">Sveiki, Marija</h3>
                <button className="admin-btn flex items-center gap-2" onClick={logout}>
                    <p>Iziet</p>
                    <PiSignOutBold />
                </button>
            </div>
        </div>
        <div className="admin-header-main absolute left-0 top-0 bg-blue-400 md:w-[20rem] min-h-screen z-0 px-4 pt-2 hidden md:block">
            <div className="admin-header-main-header flex items-center justify-between gap-2 rounded-md p-2 mb-10 bg-white">
                <div className="flex items-center gap-4">
                    <img className="h-[40px]" src={Logo} alt="Glassy Expression logo"/>
                    <h3 className="text-[#485B69]">Glassy Expression</h3>
                </div>
                <GrClose onClick={closeNav} className="md:hidden cursor-pointer"/>
            </div>
            <div className="admin-header-main-nav-box flex flex-col gap-4">
                <ul className="flex flex-col gap-4">
                    <a href="/dashboard">
                        <li className={`admin-nav-btn ${isActiveLink('/dashboard')}`}>
                            <AiOutlineHome />
                            <p>Sākums</p>
                        </li>
                    </a>
                    <a href="/dashboard/add">
                        <li className={`admin-nav-btn ${isActiveLink('/dashboard/add')}`}>
                            <AiOutlinePlusSquare/>
                            <p>Pievienot</p>
                        </li>
                    </a>
                    <a href="/dashboard/edit">
                        <li className={`admin-nav-btn ${isActiveLink('/dashboard/edit')}`}>
                            <AiOutlineEdit/>
                            <p>Rediģēt</p>
                        </li>
                    </a>
                    <a href="/dashboard/delete">
                        <li className={`admin-nav-btn ${isActiveLink('/dashboard/delete')}`}>
                            <AiOutlineDelete/>
                            <p>Dzēst</p>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
        </>
    )
}

export default AdminHeader