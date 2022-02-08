import React, { useEffect, useState } from 'react';
import './productShowcase.css'

const ProductShowcase = ({ showcaseData, productQuantity }) => {
    const [quantity, setQuantity] = useState(1);
    const [showText, setShowText] = useState(false);



    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    }

    const displayText = () => {
        setShowText(true)
        setTimeout(() => {
            setShowText(false)
        }, 1000);
    }

    useEffect(() => {
        return () => {
            clearTimeout(displayText)
        };
    }, []);


    const submitProduct = (e) => {
        e.preventDefault()
        displayText()
        productQuantity(showcaseData, quantity)
    }



    return (
        <div className="container">
            <div className='productShowcase'>
                <div className="productShowcase-body">
                    <div className="productShowcase-img">
                        <img src={process.env.PUBLIC_URL + `/img/${showcaseData.img}.png`} alt="mug" />
                    </div>
                </div>
            </div >
            <div className="productShowcase-info">
                <p className='productShowcase-title'>{showcaseData.title}</p>
                <p className='productShowcase-price'>Prix: {showcaseData.price}€</p>
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