import React from 'react'
import './Cardcss.css'

function Card({ name, imageurl, score, badges }: any) {
    return (
        <div className='card'>
            <div className='name'>
                <h3>{name}</h3>
            </div>
            <div className="row">
                <div className="col-x image">
                    <img className='img' src={imageurl} alt='' />
                </div>
                <div className="row">
                    <div className='score'>
                        <h4>Score : {score}</h4>
                    </div>
                    <div className='badges'>
                        <h4> Badges : {badges}/50</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
