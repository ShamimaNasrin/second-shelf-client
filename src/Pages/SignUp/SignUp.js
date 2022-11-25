import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import signupImg from '../../images/sign-up.png';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    //scrolltop
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useTitle('Signup');

    //create user
    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const userRole = form.userRole.value;
        //console.log(name, photoURL, email, password, userRole);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                //console.log(user);
                setError('');
                form.reset();
                toast.success('Signup successfull');

                const profile = {
                    displayName: name,
                    photoURL: photoURL
                }
                updateUserProfile(profile)
                    .then(() => {
                        saveUserToDB(name, email, userRole);
                    })
                    .catch(error => console.error(error));

            })
            .catch(err => {
                console.error(err);
                setError(error.message);
                toast.error('Signup failed');
            });
    }




    //send user data to database
    const saveUserToDB = (name, email, userRole) => {
        const user = { name, email, userRole };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                //console.log('saved user details:', data);
                getUserJwtToken(email);
            })
    }

     //receive token
     const getUserJwtToken = (email) => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    console.log('token', data.accessToken);
                    localStorage.setItem('accessToken', data.accessToken);
                    navigate(from, { replace: true });
                }
            })
    }

    return (
        <div>
            <div className='bg-secondary rounded-lg p-6 lg:m-24 md:m-16 sm:m-9 m-5 flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center'>

                <div className='w-11/12 sm:w-10/12 md:w-1/2 lg:w-3/5 flex justify-center items-center'>
                    <img className='w-2/4' src={signupImg} alt="header img" />
                </div>
                <div className='mt-6 sm:mt-6 md:mt-0 lg:mt-0 flex justify-center items-center md:w-1/2 lg:w-2/5 card w-full max-w-sm shadow-2xl bg-base-100 py-12'>
                    <h1 className="text-5xl text-center font-bold mb-6">Signup</h1>

                    <form onSubmit={handleSignUp} className='w-11/12  p-0 sm:p-1 md:p-4 lg:p-7 mx-auto'>

                        <div className='grid grid-cols-1 gap-4'>

                            <div className="form-control">
                                <input type="text" name='name' placeholder="Your Name" className="input w-full bg-white border-primary" required />
                            </div>

                            <div className="form-control">
                                <input type="text" name='photoURL' placeholder="photo url" className="input w-full bg-white border-primary" />
                            </div>

                            <div className="form-control">
                                <input type="email" name='email' placeholder="email" className="input w-full bg-white border-primary" required />
                            </div>

                            <div className="form-control">
                                <select name='userRole' className="select w-full bg-white border-primary">
                                    <option>Buyer</option>
                                    <option>Seller</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <input type="password" name='password' placeholder="password" className="input w-full bg-white border-primary" required />
                            </div>

                        </div>

                        <input className='btn w-full mt-7 bg-primary text-white hover:bg-orange-400 border-0' type="submit" value="Signup" />

                        <p className='text-red-500 mt-3'>{error}</p>
                    </form>

                    <p className='text-center'>Already have an account? <Link className='text-info font-bold' to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;