import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { BiSolidDish } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";
import Hamburger from 'hamburger-react'
import './Navbar.css'
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="pt-2">
            <header>
                <nav className="flex items-center justify-between">
                    <div className="md:hidden">
                        <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} color='#8F00FF' />
                    </div>
                    <p className="flex items-center"><span><img src="logo.png" className="w-16" /></span><span className="meal md:text-2xl sm:text-xl text-violet-700">MEAL-MANAGEMENT</span></p>
                    <ul className={`sidebar md:flex items-center justify-between absolute md:static sm:bg-white md:bg-[#ffebcd] text-violet-700 duration-700 grid grid-cols-2 gap-1 ${(isOpen) ? 'top-20' : '-top-28'}`}>
                        <NavLink to='/' className="m-3 md:m-0 text-lg font-semibold flex items-center"><FaHome className="mr-1" />Home</NavLink>
                        <NavLink to='/about' className="m-3 md:ml-8 text-lg font-semibold flex items-center"><FaCircleInfo className="mr-1" />About</NavLink>
                        <NavLink to='/recipes' className="m-3 md:ml-5 text-lg font-semibold flex items-center"><BiSolidDish className="mr-1" />Recipes</NavLink>
                        <NavLink to='/statistics' className="m-3 md:ml-5 text-lg font-semibold flex items-center"><BsGraphUpArrow className="mr-1 font-extrabold" />Statistics</NavLink>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;