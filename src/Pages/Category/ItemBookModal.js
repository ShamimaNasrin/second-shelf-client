import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ItemBookModal = ({ book, setABook }) => {
    const { user } = useContext(AuthContext);
    //console.log(user.displayName);
    const { bookName, image, resalePrice, author, _id } = book;


    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const itemName = form.itemName.value;
        const itemPrice = form.itemPrice.value;
        //console.log(userName, email, phone, itemName, itemPrice, location);


        const booking = {
            bookName,
            bookId: _id,
            image,
            resalePrice,
            author,
            buyerName: userName,
            buyerEmail: email,
            buyerPhone: phone,
            meetLocation: location

        }
        //console.log(booking);

        //send booking data to server
        fetch('https://second-shelf-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.acknowledged) {
                    setABook(null);
                    toast.success('Booking confirmed');
                    form.reset();
                }
                //if booking failed
                else {
                    toast.error(data.message);
                }
            })

    }
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm bg-secondary border-none btn-circle absolute right-2 top-2 text-white hover:bg-primary">???</label>
                    <h3 className="text-lg font-bold mb-9">{bookName}</h3>

                    <form onSubmit={handleBooking}>

                        <div className="form-control mt-4">
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder="Full Name" className="input bg-secondary" readOnly />
                        </div>
                        <div className="form-control mt-4">
                            <input type="email" name='email' defaultValue={user?.email} readOnly placeholder="email" className="input bg-secondary" />
                        </div>

                        <div className="form-control mt-4">
                            <input type="text" name='itemName' defaultValue={bookName} className="input w-full bg-secondary" readOnly />
                        </div>

                        <div className="form-control mt-4">
                            <input type="text" name='itemPrice' defaultValue={resalePrice} className="input w-full bg-secondary" readOnly />
                        </div>

                        <div className="form-control mt-4">
                            <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-4">
                            <input type="text" name='location' placeholder="Meeting location" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-4">
                            <button className="btn btn-primary text-white">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ItemBookModal;