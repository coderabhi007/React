import Product from "./Product.jsx";

function ProductTab() {
  
  let styles = {
    display: "flex",      // Use flex layout
    flexWrap: "nowrap",   // Disable wrapping of items (keep them in one line)
    gap: "20px",          // Optional: space between items (adjust as needed)
  };

  return (
    <div style={styles}>
      <Product title="Logitech Mx Master" idx={0} />
      <Product title="Apple Pencil 2nd (gen)" idx={1} />
      <Product title="Zebronic zeb-transformer" idx={2} />
      <Product title="Petronic Toad 23456SS" idx={3} />
    </div>
  );
}

export default ProductTab;
