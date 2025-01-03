import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaHandPointRight } from "react-icons/fa";

const Details = () => {
    const detailWithMeal = useLoaderData();
    const details = detailWithMeal.meals;
    const navigate = useNavigate();
    const handlenavigate = () => {
        navigate(-1);
    }
    return (
        <div className="mt-6 px-1">
            {
                details.map(selectivedetail => <div key={selectivedetail.idMeal} className="flex justify-center items-center mt-5">
                    <div className="card bg-base-100 w-96 h-[540px] shadow-xl">
                        <figure>
                            <img src={selectivedetail.strMealThumb} />
                        </figure>
                        <div className="card-body -mt-3">
                            <h2 className="text-2xl font-bold">Menu : {selectivedetail.strMeal}</h2>
                            <h2 className="text-xl font-semibold mt-1">Ingredients :</h2>
                            <div className="grid grid-cols-2 gap-2 mt-1">
                                <p className="flex items-center font-semibold text-slate-700"><FaHandPointRight /><span className="m-1 ml-2">{selectivedetail.strIngredient1}</span></p>
                                <p className="flex items-center font-semibold text-slate-700"><FaHandPointRight /><span className="m-1 ml-2">{selectivedetail.strIngredient2}</span></p>
                                <p className="flex items-center font-semibold text-slate-700"><FaHandPointRight /><span className="m-1 ml-2">{selectivedetail.strIngredient3}</span></p>
                                <p className="flex items-center font-semibold text-slate-700"><FaHandPointRight /><span className="m-1 ml-2">{selectivedetail.strIngredient4}</span></p>
                                <p className="flex items-center font-semibold text-slate-700"><FaHandPointRight /><span className="m-1 ml-2">{selectivedetail.strIngredient5 ? selectivedetail.strIngredient5 : 'Ginger'}</span></p>
                                <p className="flex items-center font-semibold text-slate-700"><FaHandPointRight /><span className="m-1 ml-2">{selectivedetail.strIngredient6 ? selectivedetail.strIngredient6 : 'Garlic'}</span></p>
                            </div>
                            <h2 className="text-md font-medium mt-2">To follow the process of cooking you can click here. <Link to={selectivedetail.strYoutube} className="text-violet-800 font-semibold">Click me!</Link></h2>
                        </div>
                        <button onClick={handlenavigate} className="bg-violet-700 text-white mx-4 mb-4 rounded-3xl font-semibold p-2 -mt-3">Go Back</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Details;