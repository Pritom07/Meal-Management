import { useLoaderData } from "react-router-dom";
import EachRecipe from "../EachRecipe/EachRecipe";

const Homies = () => {
    const allrecipesobj = useLoaderData();
    const allrecipes = allrecipesobj.meals;
    return (
        <div>
            <div className=" m-10 flex items-center justify-center">
                <div className="join">
                    <div>
                        <div>
                            <input className="input input-bordered join-item" placeholder="Search" />
                        </div>
                    </div>
                    <div className="indicator">
                        <button className="btn join-item bg-[#8F00FF] text-white hover:bg-[#8F00FF]">Search</button>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
                {
                    allrecipes.map(recipe => <EachRecipe key={recipe.idMeal} recipe={recipe}></EachRecipe>)
                }
            </div>
        </div>
    );
};

export default Homies;