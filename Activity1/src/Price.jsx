function Price({ oldPrice, newPrice }) {
    let newStyles={fontWeight:"bold"}
   let styles={backgroundColor:"yellow",height:"30px",borderBottomLeftRadius:"14px",borderBottomRightRadius:"14px"}
    return (
        <div style={styles}>
        <span style={{ textDecorationLine: "line-through" }}>{oldPrice}</span>
        &nbsp;&nbsp;&nbsp;&nbsp; {/* Space between old and new price */}
        <span style={newStyles}>{newPrice}</span>
      </div>
    );
  }
  
  export default Price;
  