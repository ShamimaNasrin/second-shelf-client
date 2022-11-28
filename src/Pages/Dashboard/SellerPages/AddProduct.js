import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    //todays date
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleAddProduct = data => {
        //console.log(data);

        //upload img to imgBB
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=99c331b71834a99f52c624a3733c73cb`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                //console.log(imgData);
                if (imgData.success) {
                    //console.log(imgData.data.url);

                    //send Book info to server
                    const Book = {
                        name: data.name,
                        email: data.email,
                        phone: data.phone,
                        bookName: data.bookName,
                        author: data.author,
                        category: data.category,
                        condition: data.condition,
                        description: data.description,
                        buyingPrice: data.buyingP,
                        resalePrice: data.resaleP,
                        yearsOfUse: data.useYear,
                        postDate: data.postDate,
                        location: data.location,
                        image: imgData.data.url
                    }

                    console.log(Book);

                    fetch('http://localhost:5000/books', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(Book)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success('Book added successfully');
                            navigate('/dashboard/myproducts')
                        })

                }

            })
    }

    return (
        <div className='p-7'>
            <h2 className="text-3xl font-extrabold text-center my-10">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)} className='bg-white p-7 mt-4 shadow-xl rounded-lg
            lg:w-[75%] mx-auto'>

                <div className="grid lg:grid-cols-2 md:grid-cols-2 justify-items-center gap-3">
                    {/* seller name */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" defaultValue={user?.displayName} {...register("name")} className="input input-bordered w-full max-w-xs" readOnly />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                {/* seller email */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" defaultValue={user?.email} {...register("email")} className="input input-bordered w-full max-w-xs" readOnly />
                </div>

                {/* seller phone */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Phone</span></label>
                    <input type="number" {...register("phone", {
                        required: "Your Phone number is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                </div>

                {/* Book Name */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Book Name</span></label>
                    <input type="text" {...register("bookName", {
                        required: "Book Name Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.bookName && <p className='text-red-500'>{errors.bookName.message}</p>}
                </div>

                {/* Author Name */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Author Name</span></label>
                    <input type="text" {...register("author", {
                        required: "Author Name Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.author && <p className='text-red-500'>{errors.author.message}</p>}
                </div>

                {/* Book category */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select
                        {...register('category')}
                        className="select input-bordered w-full max-w-xs">
                        <option>Children</option>
                        <option>Business</option>
                        <option>Literature</option>
                    </select>
                </div>

                {/* Book Condition */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Book Condition</span></label>
                    <select
                        {...register('condition')}
                        className="select input-bordered w-full max-w-xs">
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>

                {/* Description */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <textarea type="text" {...register("description", {
                        required: "Description Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                </div>

                {/* Buying Price */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Buying Price</span></label>
                    <input type="number" {...register("buyingP", {
                        required: "Buying Price Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.buyingP && <p className='text-red-500'>{errors.buyingP.message}</p>}
                </div>

                {/* Resale Price */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Resale Price</span></label>
                    <input type="number" {...register("resaleP", {
                        required: "Price Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.resaleP && <p className='text-red-500'>{errors.resaleP.message}</p>}
                </div>

                {/* Years of use */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Years of use</span></label>
                    <input type="text" {...register("useYear", {
                        required: "Years of use Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.useYear && <p className='text-red-500'>{errors.useYear.message}</p>}
                </div>

                {/* Posted Date */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Posted Date</span></label>
                    <input type="text" {...register("postDate")} defaultValue={date} className="input input-bordered w-full max-w-xs" readOnly />

                </div>

                {/* Location */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: "Location Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>

                {/* Book Photo */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Book Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                </div>
                </div>

                <input className='btn btn-accent w-1/2 block mx-auto mt-8 bg-primary hover:bg-primary text-white border-none' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;