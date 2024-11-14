const ProductsList = ({ products, cart, addToCart, removeItem }) => {
    const isInCart = (productId) => cart.some(item => item.id === productId);

    return (
        <div>
            {products.map((product) => (
                <div
                    key={product.id}
                    style={{
                        border: '1px solid #ddd',
                        color: 'black',
                        padding: '10px',
                        margin: '10px 0',
                        borderRadius: '5px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <h1>{product.name}</h1>
                    <p><strong>{product.price}</strong></p>
                    <p>{product.description}</p>

                    {isInCart(product.id) ? (
                        <button onClick={() => removeItem(product.id)}>Remove Item</button>
                    ) : (
                        <button onClick={() => addToCart(product)}>Add To Cart</button>
                    )}
                    
                </div>
            ))}
        </div>
    );
}

export default ProductsList;
