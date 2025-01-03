import { FaCopyright } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="bg-black text-white flex justify-center items-center mt-10 px-5 py-16 rounded-lg">
            <div className="flex items-center">
                <div className="font-bold text-xl"><FaCopyright /></div>
                <div className="ml-5 font-medium">
                    <p className="text-xl font-semibold">Pritom Mohajon</p>
                    <p>A self learned Web Developer</p>
                    <p>Dept. of CSTE, NSTU (2025)</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;