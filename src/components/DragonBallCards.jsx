import React from 'react'

export function DragonBallCards({DragonBallChars}) {
    return (
        <>
            <li className="list-cards">

                <div className="upper-card">
                    <img className='images' src={DragonBallChars.image} alt={DragonBallChars.name} />
                </div>
                <div className="lower-card">
                    <div>
                        <h1 className='ch-name'>{DragonBallChars.name}</h1>
                        <span className='gender'>{DragonBallChars.race} - {DragonBallChars.gender}</span>
                    </div>
                    <p>
                        <b className='font-bolt'> Base KI: </b><span className='values'>{DragonBallChars.ki}</span>
                    </p>
                    <p>
                        <b className='font-bolt'> Total KI: </b><span className='values'>{DragonBallChars.maxKi}</span>
                    </p>
                    <p>
                        <b className='font-bolt'> Affiliation: </b><span className='values'>{DragonBallChars.affiliation}</span>
                    </p>

                </div>

            </li>
        </>
    )
}

