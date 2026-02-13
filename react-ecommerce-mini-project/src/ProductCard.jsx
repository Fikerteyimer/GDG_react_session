function ProductCard(Props){
  return(
    <div>
        <img src={Props.image}></img>
        <h1>Product: {Props.title}</h1>``
        <p>Price: {Props.price}</p>
        <p>isAvailable: {Props.isAvailable?"yes Available":"not available"}</p>
    </div>
  );
}
export default ProductCard