import { LuShoppingCart } from "react-icons/lu";

const NavBar = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="flex items-center gap-1 font-bold text-4xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                        DigiTools
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal gap-4 px-1 text-lg">
                        <li>
                            <a>Products</a>
                        </li>
                        <li>
                            <a>Features</a>
                        </li>
                        <li>
                            <a>Pricing</a>
                        </li>
                        <li>
                            <a>Testimonials</a>
                        </li>
                        <li>
                            <a>FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <div className="flex gap-4">
                        <span className="text-2xl"><LuShoppingCart /></span>
                        <button className="text-xl font-semibold">Login</button>
                    </div>
                    <a className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;