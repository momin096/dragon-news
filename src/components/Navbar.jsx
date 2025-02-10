import { NavLink } from "react-router-dom";
import userIcon from  '../assets/user.png'

const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center py-5">
            <div></div>
            <div className="space-x-10">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="flex items-center gap-5">
                <img src={userIcon} alt="" />
                <NavLink className='bg-gray-700 text-white py-2 px-8' to='/login'>Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;