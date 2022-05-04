import React from 'react'


const PokemonThumb = ({id,name,image,type}) => {
  return (
    <div className='thumb-container'>
        <div className='number'>
            <img src={image} alt={name}></img>
            <div className='detail-wrapper'>
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    </div>
  )
}

export default PokemonThumb