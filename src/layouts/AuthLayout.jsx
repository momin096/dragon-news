import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="font-poppins bg-[#f3f3f3]">
            <div className="container mx-auto">
                <header>
                    <Navbar />
                </header>
                <main>

                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AuthLayout;