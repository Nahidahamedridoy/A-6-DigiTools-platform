import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({model , carts , setCarts}) => {

    const [isBuy , setIsBuy] = useState(false)

    const handleBuy =() =>{
        setIsBuy(true)
        setCarts([...carts, model])
        toast.success("Item Added Successfully")
    }

    return (
        <div className="shadow-lg rounded-lg border  border-zinc-300">
            <div className="flex ">
                <div className=" p-8 border border-zinc-300 rounded-full">
                    <img className="h-6 w-6 " src={model.icon} alt="" />
                </div>
            </div>

            <div className="p-4 space-y-4">
                <h2 className="text-2xl font-bold">{model.name}</h2>
                <p className="text-[#627382]">{model.description}</p>
                <div className="text-2xl font-bold">${model.price}<span className="text-[#627382]">/month</span></div>
                <ul className="text-[#627382]">
                    {model.features.map((feature, index) => (
                        <li key={index}>✔ {feature}</li>
                    ))}
                </ul>
                <button onClick={handleBuy} className="btn w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full mt-5">{isBuy ? "Buyed" : "Buy Now"}</button>
            </div>

        </div>
    );
};

export default ModelCard;