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
                <aside className="left col-span-3 border">
                    <LeftNavbar />
                </aside>
                <aside className="col-span-6 border">Main Content</aside>
                <aside className="col-span-3 border">
                    <RightNav />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;