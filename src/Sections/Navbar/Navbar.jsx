import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl font-black">GoodsGallery</Link>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <Link to="/signin">
                    <div>
                        <button className="bg-sky-500 text-base rounded-md p-3 text-white font-semibold">Signin</button>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;