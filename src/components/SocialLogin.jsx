import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold text-2xl mb-2">Login With</h2>
            <div className="flex flex-col gap-4">
                <button className="btn text-xl">
                    <FaGoogle />
                    Login with Google
                </button>
                <button className="btn text-xl">
                    <FaGithub />
                    Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;