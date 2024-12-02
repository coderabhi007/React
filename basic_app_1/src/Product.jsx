import './Product.css';

function Product({ title='abhi', price = 1, features=[] }) {
    let styles={backgroundColor : price>30000 ? "red":""}
    return (
       
        <div className="product" style={styles}>
            <h3>{title}</h3>
            <h5>{price}</h5>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            {price>=30000 ? <p>Discount of 5%</p> :""}
        </div>
    );
}

export default Product;
