import { useLoaderData } from "react-router-dom";
import Japaneseitem from "../Japaneseitem/Japaneseitem";
import Croation from "../Croationitem/Croation";
import Turkishitem from "../Turkishitem/Turkishitem";
import Egyptianitem from "../Egyptianitem/Egyptianitem";
import Filipinoitem from "../Filipinoitem/Filipinoitem";
import Chineseitem from "../Chineseitem/Chineseitem";
import Tunisianitem from "../Tunisianitem/Tunisianitem";
import Americanitem from "../Americanitem/Americanitem";
import Italianitem from "../Italianitem/Italianitem";
import Canadianitem from "../Canadianitem/Canadianitem";
import Indianitem from "../Indianitem/indianitem";
import Dutchitem from "../Dutchitem/Dutchitem";
import Greekitem from "../Greekitem/Greekitem";
import Britishitem from "../Britishitem/Britishitem";
import Frenchitem from "../Frenchitem/Frenchitem";
import Malaysianitem from "../Malaysianitem/Malaysianitem";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

const Recipes = () => {
    const dataobj = useLoaderData();
    const data = dataobj.meals;
    const japaneserecipes = data.filter(recipe => recipe.strArea === 'Japanese');
    const croatianrecipes = data.filter(recipe => recipe.strArea === 'Croatian');
    const turkishrecipes = data.filter(recipe => recipe.strArea === 'Turkish');
    const egyptianrecipes = data.filter(recipe => recipe.strArea === 'Egyptian');
    const filipinorecipes = data.filter(recipe => recipe.strArea === 'Filipino');
    const chineserecipes = data.filter(recipe => recipe.strArea === 'Chinese');
    const tunisianrecipes = data.filter(recipe => recipe.strArea === 'Tunisian');
    const americanrecipes = data.filter(recipe => recipe.strArea === 'American');
    const italianrecipes = data.filter(recipe => recipe.strArea === 'Italian');
    const canadianrecipes = data.filter(recipe => recipe.strArea === 'Canadian');
    const indianrecipes = data.filter(recipe => recipe.strArea === 'Indian');
    const dutchrecipes = data.filter(recipe => recipe.strArea === 'Dutch');
    const greekrecipes = data.filter(recipe => recipe.strArea === 'Greek');
    const britishrecipes = data.filter(recipe => recipe.strArea === 'British');
    const frenchrecipes = data.filter(recipe => recipe.strArea === 'French');
    const malaysianrecipes = data.filter(recipe => recipe.strArea === 'Malaysian');

    const [loading, Setloading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            Setloading(false);
        }, 1000)
        return () => clearTimeout(timer);
    }, [])

    return (
        <div>
            {
                (loading) ? (<div className="flex justify-center items-center h-screen">
                    <PacmanLoader color="#8F00FF" size={35} />
                </div>) : (<div className="mt-5">
                    <h1 className="text-center font-semibold text-3xl">This section shows the region and region wise recipes.</h1>

                    <h1 className="text-3xl font-semibold mt-8">Japanese Recipes :</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                        {
                            japaneserecipes.map(eachdish => <Japaneseitem key={eachdish.idMeal} eachdish={eachdish}></Japaneseitem>)
                        }
                    </div>
                    <h1 className="text-3xl font-semibold mt-8">Croatian Recipes :</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                        {
                            croatianrecipes.map(eachdish => <Croation key={eachdish.idMeal} eachdish={eachdish} ></Croation>)
                        }
                    </div>
                    <h1 className="text-3xl font-semibold mt-8">Turkish Recipes :</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                        {
                            turkishrecipes.map(eachdish => <Turkishitem key={eachdish.idMeal} eachdish={eachdish}></Turkishitem>)
                        }
                    </div>
                    <h1 className="text-3xl font-semibold mt-8">Egyptian Recipes :</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                        {
                            egyptianrecipes.map(eachdish => <Egyptianitem key={eachdish.idMeal} eachdish={eachdish}></Egyptianitem>)
                        }
                    </div>
                    <h1 className="text-3xl font-semibold mt-8">Filipino Recipes :</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                        {
                            filipinorecipes.map(eachdish => <Filipinoitem key={eachdish.idMeal} eachdish={eachdish}></Filipinoitem>)
                        }
                    </div>
                    <h1 className="text-3xl font-semibold mt-8">Chinese Recipes :</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                        {
                            chineserecipes.map(eachdish => <Chineseitem key={eachdish.idMeal} eachdish={eachdish}></Chineseitem>)
                        }
                    </div>
                    <h1 className="text-3xl font-semibold mt-8">Tunisian Recipes :</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                        {
                            tunisianrecipes.map(eachdish => <Tunisianitem key={eachdish.idMeal} eachdish={eachdish}></Tunisianitem>)
                        }
                    </div>
                    <h1 className="text-3xl font-semibold mt-8">American Recipes :</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                        {
                            americanrecipes.map(eachdish => <Americanitem key={eachdish.idMeal} eachdish={eachdish}></Americanitem>)
                        }
                    </div>
                    <h1 className="text-3xl font-semibold mt-8">Italian Recipes :</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                        {
                            italianrecipes.map(eachdish => <Italianitem key={eachdish.idMeal} eachdish={eachdish}></Italianitem>)
                        }
                    </div>
                    <h1 className="text-3xl font-semibold mt-8">Canadian Recipes :</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                        {
                            canadianrecipes.map(eachdish => <Canadianitem key={eachdish.idMeal} eachdish={eachdish}></Canadianitem>)
                        }
                    </div>
                    <h1 className="text-3xl font-semibold mt-8">Indian Recipes :</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                        {
                            indianrecipes.map(eachdish => <Indianitem key={eachdish.idMeal} eachdish={eachdish}></Indianitem>)
                        }
                    </div>
                    <h1 className="text-3xl font-semibold mt-8">Dutch Recipes :</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                        {
                            dutchrecipes.map(eachdish => <Dutchitem key={eachdish.idMeal} eachdish={eachdish}></Dutchitem>)
                        }
                    </div>
                    <h1 className="text-3xl font-semibold mt-8">Greek Recipes :</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                        {
                            greekrecipes.map(eachdish => <Greekitem key={eachdish.idMeal} eachdish={eachdish}></Greekitem>)
                        }
                    </div>
                    <h1 className="text-3xl font-semibold mt-8">British Recipes :</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                        {
                            britishrecipes.map(eachdish => <Britishitem key={eachdish.idMeal} eachdish={eachdish}></Britishitem>)
                        }
                    </div>
                    <h1 className="text-3xl font-semibold mt-8">French Recipes :</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                        {
                            frenchrecipes.map(eachdish => <Frenchitem key={eachdish.idMeal} eachdish={eachdish}></Frenchitem>)
                        }
                    </div>
                    <h1 className="text-3xl font-semibold mt-8">Malaysian Recipes :</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                        {
                            malaysianrecipes.map(eachdish => <Malaysianitem key={eachdish.idMeal} eachdish={eachdish}></Malaysianitem>)
                        }
                    </div>
                </div>)
            }
        </div>
    );
};

export default Recipes;