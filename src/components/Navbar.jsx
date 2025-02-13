import { Link, NavLink } from "react-router-dom";
import userIcon from  '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const {user , logOut} = useContext(AuthContext);


    return (
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center py-5">
            <div className="text-2xl">{user?.name}</div>
            <div className="space-x-10">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="flex items-center gap-5">
                <img src={userIcon} alt="" />
                {
                    user && user?.email ? 
                    <button onClick={logOut} className='bg-gray-700 font-medium text-white py-2 px-8'>Log Out</button>
                     : <Link to='/auth/login' className='bg-gray-700 font-medium text-white py-2 px-8'>Login</Link>

                }
            </div>
        </div>
    );
};

export default Navbar;