import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[calc(100vh-81px)]">
                <div className="hero-content">
                    <div className="card bg-base-100 w-full min-w-sm md:min-w-lg max-w-2xl shrink-0  shadow-2xl">
                        <div className="card-body">
                            <h2 className="text-3xl text-center font-semibold text-gray-600 py-10 mb-8 border-b-2 border-gray-200">Login your account</h2>
                            <fieldset className="fieldset space-y-3">
                                <label className="fieldset-label font-bold text-lg">Email</label>
                                <input type="email" className="input w-full bg-base-200 border-none py-6" placeholder="Email" />
                                <label className="fieldset-label font-bold text-lg">Password</label>
                                <input type="password" className="input w-full bg-base-200 border-none py-6" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                <p className="text-base font-semibold text-center">Don’t Have An Account ? <Link to='/auth/register' className="text-red-600">Register</Link> </p>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;