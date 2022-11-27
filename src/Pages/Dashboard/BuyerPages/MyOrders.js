import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal';

const MyOrders = () => {
    // const [deleteitem, setDeleteitem] = useState(null);
    const { user } = useContext(AuthContext);

    //get itemedItems acording to buyer
    const { data: items, isLoading, refetch } = useQuery({
        queryKey: ['items', user?.email],
        queryFn: async () => {

            try {
                const res = await fetch(`http://localhost:5000/bookeditems?email=${user?.email}`, {
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


    const handlePay = id => {
        console.log(id);
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl">My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items &&
                            items.map((item, i) => <tr key={item._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={item.image} alt="item" />
                                    </div>
                                </div></td>
                                <td>{item.bookName}</td>
                                <td>{item.resalePrice}</td>

                                <td>
                                    {item.advertise ? <span>Paid</span> : <button onClick={() => handlePay(item._id)} className='btn btn-xs btn-primary'>Pay</button>}
                                </td>
                                <td>
                                    <label htmlFor="confirmation-modal" className="btn btn-sm btn-error text-white">Remove</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default MyOrders;