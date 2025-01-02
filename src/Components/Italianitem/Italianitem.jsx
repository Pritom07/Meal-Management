import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Italianitem = ({ eachdish }) => {
    const { idMeal, strCategory, strMeal } = eachdish;
    const navigate = useNavigate();
    const handleclick = () => {
        navigate(`/Homies/EachRecipe/${idMeal}`)
        toast.success(`Details of ${strMeal}`)
    }
    return (
        <div className="text-center rounded-xl py-2 bg-violet-800 text-white cursor-pointer mt-4 transition    ease-in-out delay-90 hover:-translate-y-1 hover:scale-110 duration-300" onClick={handleclick}>
            <p className='text-xl font-semibold'>{strMeal}</p>
            <p className='font-medium'>({strCategory})</p>
        </div>
    );
};

Italianitem.propTypes = {
    eachdish: PropTypes.object.isRequired
}

export default Italianitem;