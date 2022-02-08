import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import './cart.css'

const Cart = () => {
    const [TotalProducts, setTotalProducts] = useState(0);


    const products = useSelector(state => state.cart)

    useEffect(() => {
        var quantity = 0
        products.map(obj => {
            return quantity += obj.quantity
        })
        setTotalProducts(quantity)
    }, [products]);



    return (
        <div className='cart-container'>
            <div className="cart-body">
                <AiOutlineShoppingCart size={'1em'} />
                <div className="cart-quantity">
                    <div className="cart-quantity-total">
                        <p>{TotalProducts}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;