import React, { useEffect, useState } from 'react'
import logo from './logo.png'
import './Dragon.css'
import {DragonBallCards} from './DragonBallCards'

function DragonBall() {

    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('')


    const API = 'https://dragonball-api.com/api/characters?limit=78'

    const FetchedApiData = async () => {
        try {
            const result = await fetch(API)
            const data = await result.json()
            // console.log(data); 

            const DataResponce = data.items.map((curElem) => {
                // console.log(curElem);
                return curElem
            })
            setCharacters(DataResponce)
            setLoading(false)

        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(error)
        }
    };

    useEffect(() => {
        FetchedApiData();
    }, [])


    // handle loading during re-rendring
    if(loading){
        return (
        <div className="loading">
            <h1>Loading...</h1>
        </div>
        )
    }

    // handle error if any error occurs
    if(error){
        return(
        <div className="loading">
            <h1>{error.message}</h1>
        </div>
        )
    }

    // handle search
    const UserSearch = characters.filter((userEnterdChar) => {
        return userEnterdChar.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className='for-Responsive'>
            <div className=''>
                <img className="logo-image" src={logo} alt='' />
            </div>

            <div className='heading-Res'>
                <h1 className='heading-ch'>All Dragon Ball Characters</h1>
            </div>

            <div className="pokemon-search">

                <label className='search' htmlFor="Search">Search:</label>
                <input
                    className='input-field'
                    type="text"
                    placeholder='Search characters'
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="main-container">

                <div className="contaier">
                    <ul className="cards">

                        {/* {characters.map((curElem) => { */}
                        {UserSearch.map((curElem) => {

                            return <DragonBallCards key={curElem.id} DragonBallChars={curElem}/>

                        })
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default DragonBall
