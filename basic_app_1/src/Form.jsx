function submit(event){
    event.preventDefault();
    console.log("Your from Is Submitted")
}
export default function form(){
    return(
        <form onSubmit={submit}>
            <input type="text" placeholder="write something" />
           <button>submit</button>
        </form>
    );
}