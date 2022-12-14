import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal';
import { IoIosCheckmarkCircle } from "react-icons/io";

const AllSellers = () => {
    const [deleteUser, setDeleteUser] = useState(null);

    //load all sellers
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://second-shelf-server.vercel.app/sellers');
            const data = await res.json();
            return data;
        }
    });

    //Verify a Seller handler
    const handleVerifiedSeller = id => {
        //console.log(id);
        fetch(`https://second-shelf-server.vercel.app/sellers/verified/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Seller verified')
                    refetch();
                }
            })
    }

    //modal functions
    const closeModal = () => {
        setDeleteUser(null);
    }

    //delete seller
    const handleUserDelete = user => {
        fetch(`https://second-shelf-server.vercel.app/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`seller deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center my-10">All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verification</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller?.sellerType !== 'verified' ? <button onClick={() => handleVerifiedSeller(seller._id)} className='btn px-2 py-0 btn-primary text-white'>Verify Seller</button>
                                    : <IoIosCheckmarkCircle className='mx-1 text-cyan-400 text-3xl' />}</td>

                                <td><label onClick={() => setDeleteUser(seller)} htmlFor="confirmation-modal" className="btn btn-sm btn-error text-white">Delete</label></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            {
                deleteUser && <DeleteConfirmModal
                    title={`Delete this seller?`}
                    message={`If you delete ${deleteUser.name}. It cannot be restore`}
                    successButtonName="Delete"
                    successAction={handleUserDelete}
                    modalData={deleteUser}
                    closeModal={closeModal}
                >
                </DeleteConfirmModal>
            }
        </div>
    );
};

export default AllSellers;