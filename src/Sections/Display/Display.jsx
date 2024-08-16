import { useEffect, useState } from "react";


const Display = () => {

    const[goods,setGoods] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setGoods(data) )
    },[])

    console.log(goods);
    

    return (
        <div className="py-10">

            <h3 className="text-center text-3xl font-semibold">Different Products Here</h3>
            <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3">
            {
                goods.map(good =>             <div key={good.id} className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={good.productImage}
                            alt="Shoes"
                            className="rounded-xl w-[250px] h-[250px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{good.productName}</h2>
                        <p>{good.description}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>)
            }
            </div>
            </div>
        </div>
    );
};

export default Display;