import React from "react";

const Card = ({pokemon, loading , infoPokemon}) => {

    console.log(pokemon)

    return(
        <>
            {
                loading ? <h1>loading...</h1>:

                pokemon.map((item) => {
                    return(
                        <>
                        <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
                            <img src={item.sprites.front_default} alt=""></img>
                            <h2>{item.name}</h2>
                        </div>
                        </>
                    )
                })
                
            }
        </>
    )
}

export default Card