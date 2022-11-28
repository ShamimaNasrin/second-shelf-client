import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal';

const ReportedItems = () => {
    const [deleteItem, setDeleteItem] = useState(null);

    //load all items
    const { data: items = [], isLoading, refetch } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await fetch('https://second-shelf-server.vercel.app/reportitems');
            const data = await res.json();
            return data;
        }
    });

    //modal functions
    const closeModal = () => {
        setDeleteItem(null);
    }

    //delete reported item
    const handleItemDelete = item => {
        fetch(`https://second-shelf-server.vercel.app/reportitems/${item._id}`, {
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
                    toast.success(`item deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center my-10">Reported Items</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item</th>
                            <th>Buyer</th>
                            <th>Seller</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, i) => <tr key={item._id}>
                                <th>{i + 1}</th>
                                <td>{item.bookName}</td>
                                <td>{item.personName}</td>
                                <td>{item.sellerName}</td>
                                <td><label onClick={() => setDeleteItem(item)}
                                    htmlFor="confirmation-modal" className="btn btn-sm btn-error text-white">Delete</label></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>


            {
                deleteItem && <DeleteConfirmModal
                    title={`Are you sure you want to delete this reported item`}
                    message={`If you delete It cannot be restore`}
                    successButtonName="Delete"
                    successAction={handleItemDelete}
                    modalData={deleteItem}
                    closeModal={closeModal}
                >
                </DeleteConfirmModal>
            }
        </div>
    );
};

export default ReportedItems;