import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import './cart.css'

const Cart = ({ productsQuantity }) => {
    const [TotalProducts, setTotalProducts] = useState(0);


    useEffect(() => {
        var tmp = 0
        productsQuantity.map(product => {
            return tmp = tmp + parseInt(product.quantity)
        })
        setTotalProducts(tmp)
    }, [productsQuantity]);


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