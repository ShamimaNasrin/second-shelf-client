import React from 'react';

const Contact = () => {
    return (
        <div className='p-6'>
            <div className='bg-secondary rounded-lg p-6 lg:m-24 md:m-16 sm:m-9 m-5 flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center'>

                <div className='mt-6 sm:mt-6 md:mt-0 lg:mt-0 flex justify-center items-center md:w-1/2 lg:w-2/5 card w-full max-w-md shadow-2xl bg-base-100 py-12'>
                    <form className='w-11/12 sm:w-11/12 md:w-11/12 lg:w-11/12 p-0 sm:p-1 md:p-4 lg:p-7'>
                        <h2 className="text-4xl font-bold mb-6">Contact</h2>

                        <div className='grid grid-cols-1 gap-4'>
                            <input name="Name" type="text" placeholder="Name" className="input input-ghost w-full bg-white border-primary" />
                            <input name="phone" type="text" placeholder="Phone" className="input input-ghost w-full bg-white border-primary" required />
                            <input name="email" type="text" placeholder="email" className="input input-ghost w-full bg-white border-primary" />
                            <textarea name="message" className="textarea bg-white h-24 w-full border-primary" placeholder="Message" required></textarea>
                        </div>


                        <input className='btn w-full mt-7 bg-primary text-white hover:bg-orange-400 border-0' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;