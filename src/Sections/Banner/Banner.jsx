
import b from "../../assets/b.jpg";



const Banner = () => {

    return (
        <div className="hero min-h-screen py-10" style={{
            backgroundImage: `url(${b})`,
        }}><div className="hero-overlay bg-opacity-60"></div><div className="hero-content text-neutral-content text-center"><div className="w-full max-w-screen-lg mx-auto"><h1 className="mb-5 text-5xl font-bold">Welcome To GoodsGallery</h1>
            <p className="mb-5">
                Choose Your desired Products According To Your Choice
            </p>




        </div></div>

        </div>
    );
};

export default Banner;
