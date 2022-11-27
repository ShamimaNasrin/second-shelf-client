import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const MyProducts = () => {

    const { data: books, isLoading, refetch } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {

            try {
                const res = await fetch('http://localhost:5000/books', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }

            catch (error) {
                console.log(error);
            }
        }
    })

    //Advertise a Book
    const handleAdvertise = id => {
        //console.log(id);
        fetch(`http://localhost:5000/books/advertise/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Book add to advertise')
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className="text-3xl">My Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Advertise</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books &&
                            books.map((book, i) => <tr key={book._id}>
                                <th>{i + 1}</th>
                                <td>{book.bookName}</td>
                                <td>{book.resalePrice}</td>
                                <td>
                                    <label className="btn btn-sm text-white">Available</label>
                                </td>
                                <td>
                                    {book.advertise ? <span>advertised</span> : <button onClick={() => handleAdvertise(book._id)} className='btn btn-xs btn-primary'>Advertise it</button>}
                                </td>
                                <td>
                                    <label htmlFor="confirmation-modal" className="btn btn-sm btn-error text-white">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyProducts;