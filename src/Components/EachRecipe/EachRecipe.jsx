import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const EachRecipe = ({ recipe }) => {
    const { idMeal, strMealThumb, strMeal } = recipe;
    const navigate = useNavigate();
    const handledetails = () => {
        navigate(`/Homies/EachRecipe/${idMeal}`)
    }
    return (
        <div>
            <div className="card bg-base-100 h-72 shadow-xl flex flex-col">
                <figure>
                    <img src={strMealThumb} />
                </figure>
                <div className="card-body flex-grow -mt-5">
                    <h2 className="text-center text-2xl font-semibold">{strMeal}</h2>
                </div>
                <button onClick={handledetails} className='bg-[#8F00FF] text-white p-2 mx-4 mb-4 rounded-3xl font-semibold -mt-4'>See Details</button>
            </div>
        </div>
    );
};

EachRecipe.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default EachRecipe;