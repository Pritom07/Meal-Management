import { useLoaderData } from "react-router-dom";
import EachRecipe from "../EachRecipe/EachRecipe";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import Norecipefound from "../Norecipefound/Norecipefound";


const Homies = () => {
    const [loading, setloading] = useState(true);
    const allrecipesobj = useLoaderData();
    const allrecipes = allrecipesobj.meals;

    const [filteredRecipes, setFilteredRecipes] = useState(allrecipes);
    const [notfounditem, Setnotfounditem] = useState(false)
    const [input, Setinput] = useState(' ');
    const searching = () => {
        Setnotfounditem(false);
        const searchresult = input.trim().toLowerCase();
        const remaining = allrecipes.filter(recipe => recipe.strMeal.toLowerCase() === searchresult);
        if (remaining.length > 0) {
            setFilteredRecipes(remaining);
            return;
        }
        else {
            Setnotfounditem(true);
        }
    }

    useEffect(() => {
        if (allrecipes) {
            const timer = setTimeout(() => {
                setloading(false);
            }, 2000);
            return () => { clearTimeout(timer) }
        }
    }, [allrecipes])

    return (
        <div className="min-h-screen flex flex-col items-center">
            {
                (loading) ? (
                    <div className="flex justify-center items-center h-screen">
                        <PacmanLoader color="#8F00FF" size={35} />
                    </div>
                ) : (
                    <div className="mx-3 container px-3">
                        <div className="m-10 flex items-center justify-center">
                            <div className="join">
                                <div>
                                    <input
                                        className="input input-bordered join-item"
                                        placeholder="Search"
                                        onChange={(event) => Setinput(event.target.value)}
                                    />
                                </div>
                                <div className="indicator">
                                    <button onClick={searching} className="btn join-item bg-[#8F00FF] text-white hover:bg-[#8F00FF] transition ease-in-out delay-90 hover:-translate-y-1 hover:scale-110 duration-300">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            {
                                (notfounditem) ? <Norecipefound></Norecipefound> : (<div className="grid lg:grid-cols-4 md:grid-cols-3  gap-6">
                                    {filteredRecipes.map(recipe => (
                                        <EachRecipe key={recipe.idMeal} recipe={recipe} />
                                    ))}
                                </div>)
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Homies;

