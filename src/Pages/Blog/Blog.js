import React from 'react';
import useTitle from '../../Hooks/useTitle';
import './Blog.css';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='py-10'>
            <div className="rounded grid grid-cols-1 gap-4 justify-center">
                <div className='bg-blue-100 p-5 blog-card w-3/5 mx-auto rounded-lg'>
                    <div className="card-body">
                        <h2 className="card-title">Q</h2>
                        <p>Ans</p>

                    </div>
                </div>
                
                <div className='bg-blue-100 p-5 blog-card w-3/5 mx-auto rounded-lg'>
                    <div className="card-body">
                        <h2 className="card-title">Q</h2>

                        <p>Ans</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;