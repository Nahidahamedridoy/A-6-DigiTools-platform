import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({ model, carts, setCarts }) => {

    const [isBuy, setIsBuy] = useState(false)

    const handleBuy = () => {
        setIsBuy(true)

        const isFound = carts.find(item => item.id === model.id)
        if (isFound) {
            toast.error("Item already in cart")
            return
        }

        setCarts([...carts, model])
        toast.success("Item Added Successfully")
    }

    return (
        <div className="shadow-lg rounded-lg border  border-zinc-300 p-5">

            <div className="relative">
                <div className={`absolute top-3 right-3 inline-flex gap-2 ${model.tagType === "popular" ? "bg-red-200" :`${model.tagType ==="new" ? "bg-green-200" : "bg-yellow-200"}`} border border-zinc-200  text-[#4F39F6] text-sm font-medium px-5 py-2 rounded-full`}>
                    {model.tagType}
                </div>
            </div>

            <div className="flex ">
                <div className=" p-4  border border-zinc-300 rounded-full">
                    <img className="h-10 w-10 " src={model.icon} alt="" />
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