import React, { useState } from "react";
import Button from "./Button";
import Card from "./Card";

function List() {
    const [joke, setJoke] = useState([]);

    // Function to fetch and add a new joke
    function genrateJoke() {
        fetch("https://official-joke-api.appspot.com/jokes/random/")
            .then((response) => response.json())
            .then((data) =>
                setJoke((prev) => [
                    ...prev,
                    { ...data, uniqueId: Date.now() }, // Add a uniqueId for rendering keys
                ])
            )
            .catch((error) => console.error("Error fetching joke:", error));
    }

    // Function to delete a joke by its uniqueId
    function delete1(key) {
        setJoke((prevJoke) => prevJoke.filter((joke1) => joke1.uniqueId !== key));
    }

    // Function to update a specific joke
    function updateJoke(key) {
        setJoke((prevJoke) =>
            prevJoke.map((joke1) =>
                joke1.uniqueId === key
                    ? { ...joke1, setup: "Abhishek", punchline: "Abhishek" }
                    : joke1
            )
        );
    }
    function allUpdate(){
        setJoke((prevJoke)=>
            prevJoke.map((joke1)=>(
            {...joke1,setup :"Abhishek",punchline :"Abhishek"}
            )
        ))
    }

    return (
        <>
            <Button genrateJoke={genrateJoke} />
            {joke.map((joke1) => (
                <Card
                    setup={joke1.setup}
                    punchline={joke1.punchline}
                    key={joke1.uniqueId} // React key for internal use
                    uniqueId={joke1.uniqueId} // Pass uniqueId as a prop
                    delete1={() => delete1(joke1.uniqueId)} // Pass the delete function
                    updateJoke={updateJoke} // Pass the update function
                />
            ))}
            <button onClick={allUpdate}>Update All</button>
        </>
    );
}

export default List;
