import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import './card.css'
import { useNavigate } from 'react-router';

const Card = ({ data, showcaseData }) => {
    const [favorite, setFavorite] = useState(false);
    const navigate = useNavigate()

    const addFavorite = () => {
        setFavorite(!favorite)
    }

    const handleShowProduct = () => {
        navigate(`/products/${data.title.replace(/\s+/g, "").trim()}`)
        showcaseData(data)
    }


    return (
        <div className='card'>
            <div className="card-body">
                <div className="card-img" onClick={handleShowProduct}>
                    <img src={process.env.PUBLIC_URL + `/img/${data.img}.png`} alt="mug" />
                </div>
                <div className="card-favorite" onClick={addFavorite}>
                    {!favorite ? <AiOutlineHeart /> : <AiFillHeart color='red' />}
                </div>
            </div>
            <div className="card-footer">
                <p>{data.title}</p>
                <p>Prix: {data.price}</p>
            </div>
        </div >
    );
};

export default Card;