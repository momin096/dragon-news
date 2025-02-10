import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-5 items-center bg-base-200 p-2">
            <p className="bg-red-600 text-white py-2 px-4  text-xl">Latest</p>
            <Marquee pauseOnHover={true} speed={100} className=" space-x-10">
                <Link to='/news'>
                    <p className="font-semibold text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam et ipsam libero hic, sit recusandae sequi repudiandae ex quisquam?</p>
                </Link>
                <Link to='/news'>
                    <p className="font-semibold text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam et ipsam libero hic, sit recusandae sequi repudiandae ex quisquam?</p>
                </Link>
                <Link to='/news'>
                    <p className="font-semibold text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam et ipsam libero hic, sit recusandae sequi repudiandae ex quisquam?</p>
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;