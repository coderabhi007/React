import Product from "./product.jsx"; // Remove the space here

function ProductTab() {
   // console.log(props);
   let option=['fast','hi-tech','durable']
    return (
        <>
            <Product title="Mobile" price={40000} features={option}/>
            <Product title="Laptop" price={2500000}/>
            <Product title="Oven" price={15000}/>
        </>
    );
}

export default ProductTab;
