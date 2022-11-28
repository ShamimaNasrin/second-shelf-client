import React, { useEffect, useState } from 'react';

const useVerified = (email) => {

    const [isVerified, setIsVerified] = useState(false);
    const [sellerVerifiedLoading, setSellerVerifiedLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://second-shelf-server.vercel.app/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    //console.log(data);
                    setIsVerified(data.isVerified);
                    setSellerVerifiedLoading(false);
                })
        }
    }, [email])
    return [isVerified, sellerVerifiedLoading]

};

export default useVerified;