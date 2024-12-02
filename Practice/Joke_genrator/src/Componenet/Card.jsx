function Card({setup,punchline,delete1}) {
    return (
        <div className="flex flex-col items-center h-screen bg-gray-100 ">
            <div className="bg-pink-500 px-6  flex items-center justify-center text-white text-xl rounded-md shadow-lg">
                <h1>{setup}</h1>
                <h1>{punchline}</h1>
                <button onClick={delete1}>delete</button>
                <button>update</button>
            </div>
        </div>
    );
}

export default Card;
