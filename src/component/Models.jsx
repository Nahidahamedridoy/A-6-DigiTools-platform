import { use  } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import ModelCard from "./ModelCard";

const Models = ({ modelPromise , carts , setCarts}) => {

    const models = use(modelPromise)
    // console.log(models);

    

    return (
        <div className="py-20 max-w-7xl mx-auto">

            <div className="text-center">
                <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
                <p className="text-[#627382] mt-4">Choose from our curated collection of premium digital products designed <br />
                    to boost your productivity and creativity.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    models.map((model) =>(
                        <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts}/>
                    ))}
            </div>

        </div>
    );
};

export default Models;