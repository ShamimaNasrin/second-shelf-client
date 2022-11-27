import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedItems = () => {


    //load all items
    const { data: items = [], isLoading, refetch } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reportitems');
            const data = await res.json();
            return data;
        }
    });


    return (
        <div>
            <h2 className="text-3xl">Reported Items</h2>
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
                                <td><label htmlFor="confirmation-modal" className="btn btn-sm btn-error text-white">Delete</label></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            {/* {
                deleteUser && <DeleteConfirmModal
                    title={`Delete this item?`}
                    message={`If you delete ${deleteUser.name}. It cannot be restore`}
                    successButtonName="Delete"
                    successAction={handleUserDelete}
                    modalData={deleteUser}
                    closeModal={closeModal}
                >
                </DeleteConfirmModal>
            } */}
        </div>
    );
};

export default ReportedItems;