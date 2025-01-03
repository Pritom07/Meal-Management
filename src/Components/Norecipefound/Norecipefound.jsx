const Norecipefound = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-2">
            <img src='searchfail.png' className="w-[60%] md:w-[30%]" />
            <h1 className="text-3xl font-semibold text-red-700 text-center">Oops no related recipe found !</h1>
        </div >
    );
};

export default Norecipefound;