import React from 'react';
import StarRating from '../StarRating/StarRating';
import './Cardcss.css';

function Card({ name, imageurl, score, badges }: any) {
    return (
        <div className='card'>
            <div className='card_image'>
                <img className='img' src={imageurl} alt='' />
            </div>
            <div className='card-margin'>
                <h3>{name}</h3>
                <h4>Score : {score}</h4>
                <h4> Badges : {badges}/50</h4>
                <StarRating />
            </div>
        </div>
    );
}

export default Card;
