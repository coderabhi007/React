function sayHello(){
    console.log("Hello Abhishek...!")
}
function handelover(){
    console.log("Bye")
}
function handelDbClick(){
    console.log("Db clicked")
}
function Button(){
    return (
            <button onClick={sayHello} onMouseOver={handelover} onDoubleClick={handelDbClick}>click me</button>
    );
}
export default Button;