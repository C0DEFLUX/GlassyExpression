import Logo from "../../assets/img/logo_small.png";
import {AiOutlineDelete, AiOutlineEdit, AiOutlineHome, AiOutlinePlusSquare} from "react-icons/ai";
import {useLocation} from "react-router-dom";

function AdminMainHeader() {

        const location = useLocation();

        // Function to check if the link matches the current URL
        const isActiveLink = (link) => {
            return link === location.pathname ? 'bg-white text-blue-400' : '';
        }


    return (
        <div className="admin-header-main absolute left-0 top-0 bg-blue-400 w-[20rem] min-h-screen z-0 px-4 pt-2">
            <div className="admin-header-main-header flex items-center gap-2 rounded-md p-2 mb-10 bg-white">
                <img className="h-[40px]" src={Logo} alt="Glassy Expression logo"/>
                <h3 className="text-[#485B69]">Glassy Expression</h3>
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
    )
}

export default AdminMainHeader