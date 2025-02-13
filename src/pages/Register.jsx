import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const { createNewUser , setUser  } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        // const name = e.target.name.value;
        // const photo = e.target.photo.value;
        // const email = e.target.email.value;
        // const password = e.target.password.value;

        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        createNewUser(email, password)
        .then((result) =>{
            const user = result.user;
            setUser(user);
        })
        .catch((error) => console.log(error));


    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="hero bg-base-200 min-h-[calc(100vh-81px)]">
                <div className="hero-content">
                    <div className="card bg-base-100 w-full min-w-sm md:min-w-lg max-w-2xl shrink-0  shadow-2xl">
                        <div className="card-body">
                            <h2 className="text-3xl text-center font-semibold text-gray-600 py-4 mb-4 border-b-2 border-gray-200">Register your account</h2>
                            <fieldset className="fieldset space-y-2">
                                <label className="fieldset-label font-bold text-lg">Your Name</label>
                                <input name="name" type="text" className="input w-full bg-base-200 border-none py-6" placeholder="Enter Your Name" />

                                <label className="fieldset-label font-bold text-lg">Photo URL</label>
                                <input name="photo" type="text" className="input w-full bg-base-200 border-none py-6" placeholder="Photo URL" />

                                <label className="fieldset-label font-bold text-lg">Email</label>
                                <input name="email" type="email" className="input w-full bg-base-200 border-none py-6" placeholder="Email" />

                                <label className="fieldset-label font-bold text-lg">Password</label>
                                <input name="password" type="password" className="input w-full bg-base-200 border-none py-6" placeholder="Password" />

                                <button className="btn btn-neutral mt-4">Register</button>
                                <p className="text-base font-semibold text-center">Already have An Account ? <Link to='/auth/login' className="text-red-600">Login</Link> </p>

                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;