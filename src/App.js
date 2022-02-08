import { useState } from 'react';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import './index.css'
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from "./pages/Home";
import Products from './pages/Products';
import ProductShowcase from './pages/ProductShowcase';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  const [showcaseData, setShowcaseData] = useState();
  const [productsQuantity, setProductsQuantity] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);

  const showcaseDataProps = (props) => {
    setShowcaseData(props)
  }

  const addProductQuantity = (product, quantity) => {
    let duplicate = false
    let tmp = []
    let data = {
      product: {},
      quantity: 0
    }

    data.product = product
    data.quantity = parseInt(quantity)

    tmp = [...productsQuantity]

    for (var i = 0; i < tmp.length; i++) {
      if (product.id === tmp[i].product.id) {
        tmp[i].quantity = parseInt(tmp[i].quantity) + parseInt(quantity)
        duplicate = true
      }
    }

    !duplicate && tmp.push(data)

    setProductsQuantity(tmp)
  }

  const updateProductsQuantity = (props) => {
    setProductsQuantity(props)
  }

  return (
    <div className="global-container">
      <Navbar totalProduct={totalProduct} productsQuantity={productsQuantity} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products showcaseDataProps={showcaseDataProps} />} />
        {showcaseData && <Route path='/products/:id' element={<ProductShowcase showcaseData={showcaseData} productQuantity={addProductQuantity} />} />}
        <Route path='/contact' element={<Contact />} />
        <Route path='/shopping-cart' element={<ShoppingCart productsQuantity={productsQuantity} updateProductsQuantity={updateProductsQuantity} />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;