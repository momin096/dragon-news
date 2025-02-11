import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";

const RightNav = () => {
    return (
        <div className="space-y-7">
            <SocialLogin />
            <FindUs />
        </div>
    );
};

export default RightNav;