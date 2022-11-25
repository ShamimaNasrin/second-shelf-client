import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ItemBookModal = () => {
    const { user } = useContext(AuthContext);
    //console.log(user.displayName);
    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const itemName = form.itemName.value;
        const itemPrice = form.itemPrice.value;
        console.log(userName, email, phone, itemName, itemPrice, location);

    }
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm bg-secondary border-none btn-circle absolute right-2 top-2 text-white hover:bg-primary">✕</label>
                    <h3 className="text-lg font-bold mb-9">Item name</h3>

                    <form onSubmit={handleBooking}>

                        <div className="form-control mt-4">
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder="Full Name" className="input bg-secondary" readOnly />
                        </div>
                        <div className="form-control mt-4">
                            <input type="email" name='email' defaultValue={user?.email} readOnly placeholder="email" className="input bg-secondary" />
                        </div>

                        <div className="form-control mt-4">
                            <input type="text" name='itemName' defaultValue='itemName' className="input w-full bg-secondary" readOnly />
                        </div>

                        <div className="form-control mt-4">
                            <input type="text" name='itemPrice' defaultValue='itemPrice' className="input w-full bg-secondary" readOnly />
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