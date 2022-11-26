import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {

    //load all sellers
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers');
            const data = await res.json();
            return data;
        }
    });

    //Verify a Seller handler
    const handleVerifiedSeller = id => {
        //console.log(id);
        fetch(`http://localhost:5000/sellers/verified/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Seller verified')
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className="text-3xl">All Sellers</h2>
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
                                <td>{seller?.sellerType !== 'verified' && <button onClick={() => handleVerifiedSeller(seller._id)} className='btn btn-xs btn-primary'>Verify Seller</button>}</td>
                                <td><button className='btn btn-xs btn-danger text-white p-4 text-center'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;