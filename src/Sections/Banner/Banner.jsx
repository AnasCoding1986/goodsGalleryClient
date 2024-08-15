import { CiSearch } from "react-icons/ci";
import b from "../../assets/b.jpg";
import { FaHashnode } from "react-icons/fa6";

const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${b})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="w-full max-w-screen-lg mx-auto"> {/* Centering the container */}
                    <h1 className="mb-5 text-5xl font-bold">Welcome To GoodsGallery</h1>
                    <p className="mb-5">
                        Choose Your desired Products According To Your Choice
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border-[1px] border-dotted rounded-md border-white p-4">
                            <label htmlFor="">Search by product name</label><br />
                            <div className="flex mt-1">
                                <input 
                                    className="p-[4px] flex-grow" 
                                    type="text" 
                                    placeholder="Product name" 
                                    required={true} 
                                />
                                <button className="bg-slate-300 p-2 text-red-950 flex-shrink-0">
                                    <CiSearch />
                                </button>
                            </div>
                        </div>
                        <div className="border-[1px] border-dotted rounded-md border-white p-4">
                            <label htmlFor="">Search by Category</label><br />
                            <div className="flex mt-1">
                                <input 
                                    className="p-[4px] flex-grow" 
                                    type="text" 
                                    placeholder="Category" 
                                    required={true} 
                                />
                                <button className="bg-slate-300 p-2 text-red-950 flex-shrink-0">
                                    <CiSearch />
                                </button>
                            </div>
                        </div>
                        <div className="border-[1px] border-dotted rounded-md border-white p-4">
                            <label htmlFor="">Sort by price/date</label><br />
                            <div className="flex mt-1">
                                <input 
                                    className="p-[4px] flex-grow" 
                                    type="text" 
                                    placeholder="Price/Date" 
                                    required={true} 
                                />
                                <button className="bg-slate-300 p-2 text-red-950 flex-shrink-0">
                                    <CiSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
