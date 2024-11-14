import { useState } from 'react';
import './App.css';
import ProductsList from './components/productsList';
import products from './components/products';

function App() {

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeItem = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }
  return (
    <div className="app-container">
      <h1>My Products List</h1>
      <h3>{cart.length}</h3>
      <ProductsList products={products} addToCart={addToCart} removeItem={removeItem} cart={cart}/>
    </div>
  );
}

export default App;
