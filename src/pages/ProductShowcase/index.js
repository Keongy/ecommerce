import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './productShowcase.css'
import inventory from '../../data/inventory';
import { useParams } from 'react-router';

const ProductShowcase = ({ showcaseData, productQuantity }) => {
    const [quantity, setQuantity] = useState(1);
    const [showText, setShowText] = useState(false);

    const { id } = useParams()


    const productSelected = inventory.findIndex(obj => obj.title.replace(/\s+/g, "").trim() === id)


    const dispatch = useDispatch()

    const submitProduct = (e) => {

        const itemAdded = {
            ...inventory[productSelected],
            quantity: Number(quantity)
        }

        e.preventDefault()
        dispatch({
            type: "ADDITEM",
            payload: itemAdded
        })
    }



    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    }




    return (
        <div className="container">
            <div className='productShowcase'>
                <div className="productShowcase-body">
                    <div className="productShowcase-img">
                        <img src={process.env.PUBLIC_URL + `/img/${inventory[productSelected].img}.png`} alt="mug" />
                    </div>
                </div>
            </div >
            <div className="productShowcase-info">
                <p className='productShowcase-title'>{inventory[productSelected].title}</p>
                <p className='productShowcase-price'>Prix: {inventory[productSelected].price}€</p>
                <form onSubmit={submitProduct}>
                    <label htmlFor="quantity">Quantité</label>
                    <input type="number" min="1" max="99" value={quantity} onChange={handleQuantity} />
                    <button>Ajouter au panier</button>
                    {showText && <p className='productShowcase-add'>Ajouter au panier x{quantity}</p>}
                </form>
            </div>
        </div>
    );
};

export default ProductShowcase;