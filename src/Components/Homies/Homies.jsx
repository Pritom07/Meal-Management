import { useLoaderData } from "react-router-dom";
import EachRecipe from "../EachRecipe/EachRecipe";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

const Homies = () => {
    const [loading, setloading] = useState(true);
    const allrecipesobj = useLoaderData();
    const allrecipes = allrecipesobj.meals;
    useEffect(() => {
        if (allrecipes) {
            const timer = setTimeout(() => {
                setloading(false)
            }, 2000);
            return () => { clearTimeout(timer) }
        }
    }, [allrecipes])
    return (
        <div className="min-h-screen flex flex-col items-center">
            {
                loading ? (
                    <div className="flex justify-center items-center h-screen">
                        <PacmanLoader color="#8F00FF" size={35} />
                    </div>
                ) : (
                    <div>
                        <div className="m-10 flex items-center justify-center">
                            <div className="join">
                                <div>
                                    <input
                                        className="input input-bordered join-item"
                                        placeholder="Search"
                                    />
                                </div>
                                <div className="indicator">
                                    <button className="btn join-item bg-[#8F00FF] text-white hover:bg-[#8F00FF]">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
                            {allrecipes.map(recipe => (
                                <EachRecipe key={recipe.idMeal} recipe={recipe} />
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Homies;