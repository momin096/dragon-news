import moment from 'moment';
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="container mx-auto">
            <div className=" flex flex-col justify-center items-center py-2">
                <div className="logo">
                    <img className="text-white" src={logo} alt="" />
                </div>
                <h2 className="text-gray-400 text-xl">Journalism Without Fear or Favour</h2>

                <p className='text-base'>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;