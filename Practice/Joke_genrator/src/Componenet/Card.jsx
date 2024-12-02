function Card({ setup, punchline, delete1, updateJoke, uniqueId }) {
    return (
        <div className="flex flex-col items-center m-10 bg-gray-100 p-4 rounded-md shadow-lg">
            <div className="bg-pink-500 px-6 py-4 flex flex-col items-center justify-center text-white text-xl rounded-md shadow-md mb-4">
                <h1 className="font-bold">{setup}</h1>
                <h2 className="italic">{punchline}</h2>
            </div>
            <div className="flex space-x-4">
                <button
                    onClick={delete1}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    aria-label="Delete Joke"
                >
                    Delete Joke
                </button>
                <button
                    onClick={() => updateJoke(uniqueId)} // Pass the uniqueId to updateJoke
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    aria-label="Update Joke"
                >
                    Update Joke
                </button>
            </div>
        </div>
    );
}

export default Card;
