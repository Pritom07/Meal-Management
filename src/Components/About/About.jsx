import { useEffect, useState } from "react";
import Accordion from "../Accordion/Accordion";
import Modal from "../Modal/Modal";
import { FaArrowRightLong } from "react-icons/fa6";
import { PacmanLoader } from "react-spinners";

const About = () => {
    const [loading, setloading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setloading(false)
        }, 1000);
        return () => clearTimeout(timer);
    }, [])
    return (
        <div>
            {
                (loading) ? (<div className="flex justify-center items-center h-screen">
                    <PacmanLoader color="#8F00FF" size={35} />
                </div>) : (<div className="mt-4 px-1">
                    <img className="float-left w-[15%]" src="logo.png" />
                    <p className="text-xl font-medium ml-1 text-justify"><span className="text-violet-900 text-3xl font-semibold">Meal-Management</span> is a cutting-edge web application crafted with love to assist <span className="text-violet-900 text-2xl font-semibold">My mother</span> as a gift <span className="text-violet-900 text-2xl font-semibold">in her birthday</span> from me and home cooks in transforming her cooking experience. Imagine effortlessly discovering a treasure trove of recipes from around the world, complete with step-by-step preparation methods, detailed ingredient lists, and even insights into each dish’s cultural origins. This app goes beyond being just a recipe finder; it brings cuisines from various regions to your fingertips, enabling users to explore and experiment with diverse flavors and cooking styles. Whether you’re curious about popular dishes in your area or looking to try something new from another corner of the globe, Meal-Management has you covered. A standout feature of this app is its focus on recipe popularity and in-depth statistics, which guide users to make informed decisions when planning meals. Want to know what’s trending? Or perhaps you’re looking for tried-and-tested recipes loved by many? It’s all here. Meal-Management is more than a tool; it’s a companion in the kitchen. By simplifying meal planning and making cooking stress-free, it turns mealtime into a delightful adventure for families worldwide. Built with the intent to honor the love, creativity, and dedication of mothers in their kitchens, this app celebrates their invaluable role in nurturing families through the joy of food.</p>

                    <p className="text-xl font-medium ml-1 text-justify flex flex-wrap items-center mt-2 gap-1">
                        To get the instructions about how the
                        <span className="text-xl font-semibold text-violet-900 whitespace-nowrap">MEAL-MANAGEMENT</span>
                        works, please click here.
                        <span className="flex items-center">
                            <FaArrowRightLong className="ml-2" />
                            <Modal />
                        </span>
                    </p>



                    <h1 className="text-3xl font-semibold mt-5">Some Frequently Asked Questions :</h1>
                    <Accordion></Accordion>
                </div>)
            }
        </div>
    );
};

export default About;

{/* <p className="text-xl font-medium ml-1 text-justify md:flex items-center mt-2">To get the instructions about how the <span className="text-xl font-semibold text-violet-900 m-1 text-nowrap">MEAL-MANAGEMENT</span> uses , please click here. <span className="flex items-center mt-2 md:mt-0"><FaArrowRightLong className="ml-2" /> <Modal></Modal></span></p> */ }