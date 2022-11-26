import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleAddProduct = data => {
        console.log(data);
    }


    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)} className='bg-white p-7 mt-4 shadow-xl rounded-lg'>

                {/* seller name */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" defaultValue={user?.displayName} {...register("name")} className="input input-bordered w-full max-w-xs" readOnly />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
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
                    <input type="text" {...register("description", {
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

                {/* Price */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Price</span></label>
                    <input type="number" {...register("price", {
                        required: "Price Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
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
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>

                <input className='btn btn-accent w-1/2 block mx-auto mt-4 bg-primary text-white border-none' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;