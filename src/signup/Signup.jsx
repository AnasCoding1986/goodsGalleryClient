import { useContext } from "react";
import login from "../assets/login.jpg"
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Signup = () => {

    const {createUser} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                // axiosPublic.post('/users', userInfo)
                //     .then(res => {
                //         if (res.data.insertedId) {
                //             Swal.fire({
                //                 position: "top-end",
                //                 icon: "success",
                //                 title: "Account created and updated successfully",
                //                 showConfirmButton: false,
                //                 timer: 1500
                //             });
                //             navigate('/');
                //         }
                //     })
                // console.log(user);
                // navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error);
                
              });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center w-1/2 flex justify-center items-center lg:text-left">
                        <img src={login} className="w-6/12 rounded-lg shadow-2xl" />
                    </div>
                    <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <h2 className="text-center text-xl font-bold mt-2">Sign Up</h2>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="Type the captcha" className="input input-bordered" required />
                            </div> */}
                            <div className="form-control mt-6">
                                <input className="btn bg-[#A7E6FF] text-black border-none font-bold btn-primary" type="submit" value="signup" />
                            </div>
                        </form>
                        {/* <div className='mb-5 mx-auto w-10/12'>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline border-[#3572EF] w-full"><span className='text-xl mr-2'><FcGoogle /></span><span className='text-[#3572EF] font-bold ml-2'>Google</span></button>
                        </div> */}
                        {/* <SocialLogin></SocialLogin> */}
                        <p className='text-center pb-3'><small>New Here? <Link className='text-[#3572EF] font-bold ml-1' to="/signin">Already have an account? Please login</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;