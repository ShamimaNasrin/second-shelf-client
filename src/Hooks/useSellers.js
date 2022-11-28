import React, { useEffect, useState } from 'react';

const useSellers = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [sellerLoading, setSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://second-shelf-server.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    //console.log(data);
                    setIsSeller(data.isSeller);
                    setSellerLoading(false);
                })
        }
    }, [email])
    return [isSeller, sellerLoading]
};

export default useSellers;