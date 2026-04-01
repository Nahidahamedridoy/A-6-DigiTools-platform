import React from 'react';
import { toast } from 'react-toastify';

const Card = ({ carts, setCarts }) => {

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    const handlePayment = () => {
        setCarts([])
        toast.success("Payment Successful..")
    }

    const handleDelete = (item) => {
        const filteredArray = carts.filter(c => c.id !== item.id)
        setCarts(filteredArray)
        toast.error("Item Remove!")
    }

    return (
        <div className='p-10 max-w-7xl mx-auto'>
            <h1 className='text-2xl font-bold'>Your Cart</h1>

            {
                carts.length === 0 ? <p className='text-center text-2xl p-5'>Cart Is Empty</p> : <>

                    <div className='space-y-5 mt-4'>
                        {
                            carts.map(item =>
                                <div key={item.id} className='flex items-center justify-between border rounded-lg p-3'>

                                    <div className='flex items-center gap-2'>
                                        <div>
                                            <img className='h-20 w-20 object-contain' src={item.icon} alt="" />
                                        </div>
                                        <div>
                                            <div>
                                                <h2 className='text-xl'>{item.name}</h2>
                                            </div>
                                            <div className='text-[#627382] font-bold'>
                                                ${item.price}
                                            </div>
                                        </div>

                                    </div>
                                    <div className='flex'>
                                        <button onClick={() => handleDelete(item)} className='text-red-500'>Remove</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <div className='flex justify-between bg-base-100 p-5 mt-5 rounded-lg text-3xl font-bold'>
                        <div>Total:</div>
                        <div>$ {totalPrice}</div>
                    </div>

                    <button onClick={handlePayment} className='btn w-full p-8 mt-5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-2xl rounded-full'>Proceed to Checkout</button>
                </>
            }



        </div>
    );
};

export default Card;