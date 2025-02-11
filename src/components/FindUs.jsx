import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-3">Find Us On</h2>
            <div className="flex flex-col ">
                <div className="join join-vertical">
                    <button className="bg-base-100 btn join-item text-xl py-7 justify-start ">
                        <FaFacebook />
                        Facebook
                    </button>
                    <button className="bg-base-100 btn join-item text-xl py-7 justify-start ">
                        <FaXTwitter />
                        Twitter
                    </button>
                    <button className="bg-base-100 btn join-item text-xl py-7 justify-start ">
                        <FaInstagram />
                        Instagram
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;