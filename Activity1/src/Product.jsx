import "./product.css"
import Price from "./Price";
function Product({title="Abhi",idx}){
    let oldPrices=["10000","20000","30000","40000"];
    let newPrices=["5000","10000","15000","20000"];
    let descriptions=[["Fast","Good"],["Best quality","Better performance"],["Best Rsponce","Best Price"],["8000 DPI","good knoweladge"]]
    return(
        <div className="product">
        <h4>{title}</h4>
        <p>{descriptions[idx][0]}</p>
        <p>{descriptions[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
}
export default Product;