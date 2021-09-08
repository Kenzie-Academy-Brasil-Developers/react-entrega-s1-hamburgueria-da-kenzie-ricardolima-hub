import { useState } from "react"
import './App.css';
import Cart from "./components/Cart";
import Form from "./components/Form";
import MenuContainer from "./components/MenuContainer";

function App() { //centraliza componentes e administra o compartilhamento de propos;

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ]); 

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
 
  const showProducts = (productsToFind) => {
    const output = products.filter((filter) => filter.name.toLowerCase().includes(productsToFind.toLowerCase()))
    setProducts(output)
  }

  const handleClick = (productID) => {
    const output = products.find((item) => item.id === productID);
    if (!currentSale.includes(output)){
      setCurrentSale([...currentSale, output])
    }
  }

  const totalPrice = currentSale.reduce((acc, item) => acc + item.price, 0).toFixed(2)

  return (
    <>
      <header className="App-header">
        <Form filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} showProducts={showProducts} />
      </header>
      <main>
        <MenuContainer products={products} handleClick={handleClick}/>
        <Cart products={products} currentSale={currentSale}/>
      </main>
      <footer>
        <div>
          <p>Total Price: R$ {totalPrice}</p>
        </div>
      </footer>
    </>
  );
}

export default App;