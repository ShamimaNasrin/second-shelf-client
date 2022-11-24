import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import loginImg from '../../images/login.png';

const Login = () => {
    const { signIn, loading, setLoading, providerLoginGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    //scrolltop
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useTitle('Login');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                toast('Login successfull');
                // navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })

    }

    //creating googleProvider & handle login with google
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLoginGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className='bg-secondary rounded-lg p-6 lg:m-24 md:m-16 sm:m-9 m-5 flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center'>

                <div className='w-11/12 sm:w-10/12 md:w-1/2 lg:w-3/5 flex justify-center items-center'>
                    <img className='w-2/4' src={loginImg} alt="header img" />
                </div>
                <div className='mt-6 sm:mt-6 md:mt-0 lg:mt-0 flex justify-center items-center md:w-1/2 lg:w-2/5 card w-full max-w-sm shadow-2xl bg-base-100 py-12'>
                    <h1 className="text-5xl text-center font-bold mb-6">Login</h1>

                    <form onSubmit={handleSubmit} className='w-11/12  p-0 sm:p-1 md:p-4 lg:p-7 mx-auto'>

                        <div className='grid grid-cols-1 gap-4'>

                            <div className="form-control">

                                <input type="text" name='email' placeholder="email" className="input w-full bg-white border-primary" />
                            </div>
                            <div className="form-control">

                                <input type="password" name='password' placeholder="password" className="input w-full bg-white border-primary" />
                            </div>

                        </div>

                        <input className='btn w-full mt-7 bg-primary text-white hover:bg-orange-400 border-0' type="submit" value="Login" />

                        <p className='text-center font-bold mt-3'>OR</p>

                        <button onClick={handleGoogleSignIn} className='btn w-full mt-2 bg-transparent border-red-500 border-2 hover:bg-red-500 text-red-500 hover:text-white hover:border-red-500'>Google</button>

                        <p className='text-red-500 mt-3'>{error}</p>
                    </form>

                    <p className='text-center'>No account? <Link className='text-info font-bold' to="/signup">Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;