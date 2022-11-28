import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal';

const AllBuyers = () => {
    const [deleteUser, setDeleteUser] = useState(null);

    //load all buyers
    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://second-shelf-server.vercel.app/buyers');
            const data = await res.json();
            return data;
        }
    });

    //modal functions
    const closeModal = () => {
        setDeleteUser(null);
    }

    //delete buyer
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
                    toast.success(`buyer deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center my-10">All buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td><label onClick={() => setDeleteUser(buyer)} htmlFor="confirmation-modal" className="btn btn-sm btn-error text-white">Delete</label></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteUser && <DeleteConfirmModal
                    title={`Delete this buyer?`}
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

export default AllBuyers;