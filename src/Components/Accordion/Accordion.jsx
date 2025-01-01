import { Link } from "react-router-dom";

const Accordion = () => {
    return (
        <div className="mt-6">
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-semibold">What is Meal-Management?</div>
                <div className="collapse-content font-medium">
                    <p>Meal-Management is a web app that helps users explore recipes, cooking instructions, ingredients, and regional cuisines while offering insights into recipe popularity and cooking trends.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-semibold">How does the search feature work?</div>
                <div className="collapse-content font-medium">
                    <p>Simply type the name of a dish or ingredient in the search bar, and the app will show matching recipes instantly.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-semibold">Can I see recipes based on regions?</div>
                <div className="collapse-content font-medium">
                    <p>Yes, the app provides region-wise categorization, helping you explore diverse recipes from around the world. Please go to the <Link to='/recipes' className="text-lg font-semibold text-violet-900 underline">Recipes</Link> section</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-semibold">Where does the recipe data come from?</div>
                <div className="collapse-content font-medium">
                    <p>Recipes and related information are sourced from trusted and publicly available APIs like <span className="text-lg font-semibold">TheMealDB.</span></p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-semibold">Is the app free to use?</div>
                <div className="collapse-content font-medium">
                    <p>Yes, Meal-Management is completely free to use, making it accessible for everyone.</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;