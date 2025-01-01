import { ImHappy } from "react-icons/im";
import { BsBox2Heart } from "react-icons/bs";

const Modal = () => {
    return (
        <div>
            <button className="btn ml-4 bg-violet-900 text-white hover:bg-violet-900 text-nowrap flex items-center transition ease-in-out delay-90 hover:-translate-y-1 hover:scale-110 duration-300" onClick={() => document.getElementById('my_modal_1').showModal()}>Happy Click <span><ImHappy className="text-xl" /></span></button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-xl underline">The<span className="text-violet-900 m-1">MEAL-MANAGEMENT</span>usecase :</h3>
                    <p className="py-4">Meal-Management is a user-friendly web application designed to simplify meal planning and cooking. Users can search for recipes by typing a dish name into the search bar and instantly access detailed information about preparation methods and required ingredients. For those eager to explore, the app offers region-wise categorization, making it easy to discover diverse cuisines and cooking styles from around the world. The app also includes features like recipe popularity and statistics, helping users select trending or highly-rated meals. If a search doesn’t yield results, the app provides helpful feedback with a "No recipe found" message, encouraging users to refine their input. With an intuitive interface and real-time loading spinners, Meal-Management ensures a seamless experience, making it ideal for mothers, food enthusiasts, and anyone looking to make cooking stress-free and enjoyable.</p>
                    <div className="text-violet-900 font-semibold flex items-center text-2xl">Thank You <BsBox2Heart className="m-2" /></div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn bg-violet-900 text-white hover:bg-violet-900">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;