import React from "react";

const Card = ({dog}) =>{
    return(
        <div className="card">
            <img
            src={dog.image}
            >
            </img>
            <p>
                {dog.breed.name}
            </p>
        </div>
    )
};

export default Card;