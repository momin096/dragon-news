import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/Layout-components/LeftNavbar";
import RightNav from "../components/Layout-components/RightNav";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            {/* Header Section */}
            <header className="container mx-auto">
                <Header />
                <section >
                    <LatestNews />
                </section>
            </header>

            {/* Navbar */}
            <nav className="container mx-auto">
                <Navbar />
            </nav>
            {/* Main layout */}
            <main className="container mx-auto pt-5 grid grid-cols-12 gap-5">
                {/* Left Aside */}
                <aside className="left col-span-3 ">
                    <LeftNavbar />
                </aside>

                {/* Main Content */}
                <aside className="col-span-6 ">
                    <h2 className="text-2xl font-semibold">Dragon News Home</h2>
                    <Outlet />
                </aside>

                {/* Right Aside */}
                <aside className="col-span-3 ">
                    <RightNav />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;