let Button= ({genrateJoke})=>{
        return(
            <div className="flex justify-center mt-40">
            <button className="bg-blue-600 p-2 rounded" onClick={genrateJoke}>Genrate Joke</button>
            </div>
        )
}
export default Button;