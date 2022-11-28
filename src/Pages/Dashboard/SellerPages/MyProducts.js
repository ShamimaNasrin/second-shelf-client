import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal';

const MyProducts = () => {
    const [deleteBook, setDeleteBook] = useState(null);
    const { user } = useContext(AuthContext);

    //get books acording to seller
    const { data: books, isLoading, refetch } = useQuery({
        queryKey: ['books', user?.email],
        queryFn: async () => {

            try {
                const res = await fetch(`https://second-shelf-server.vercel.app/books?email=${user?.email}`, {
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
        fetch(`https://second-shelf-server.vercel.app/books/advertise/${id}`, {
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


    //modal functions
    const closeModal = () => {
        setDeleteBook(null);
    }

    //delete book
    const handleBookDelete = book => {
        fetch(`https://second-shelf-server.vercel.app/books/${book._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`book deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center my-10">My Products</h2>
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
                                    {
                                        book.paid ? <label className="text-green-500 font-semibold">Sold</label>
                                            : <label className="font-semibold">Available</label>
                                    }
                                </td>
                                <td>
                                    {
                                        book.paid || <>
                                            {
                                                book.advertise ? <span>advertised</span> : <button onClick={() => handleAdvertise(book._id)} className='btn btn-xs btn-primary'>Advertise it</button>
                                            }
                                        </>
                                    }
                                </td>
                                <td>
                                    <label onClick={() => setDeleteBook(book)} htmlFor="confirmation-modal" className="btn btn-sm btn-error text-white">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            {
                deleteBook && <DeleteConfirmModal
                    title={`Delete this Book?`}
                    message={`If you delete ${deleteBook.bookName}. It cannot be restore`}
                    successButtonName="Delete"
                    successAction={handleBookDelete}
                    modalData={deleteBook}
                    closeModal={closeModal}
                >
                </DeleteConfirmModal>
            }

        </div>
    );
};

export default MyProducts;