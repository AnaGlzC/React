import React, {useState, useEffect} from "react";
import getBreeds from "../helpers/getBreeds";
import Error from "./Error";

const initialBreeds = [
    {
        id: 1,
        name: '-',

    }
]
const Select  = ({updateDog}) =>{

    const [breeds, setBreeds] = useState(initialBreeds);
    const [error,setError] = useState(null);

    useEffect(() => {

        UpdateBreeds();

    }, []);

    const UpdateBreeds = () => {
        getBreeds()
            .then((newBreeds) => {
                setBreeds(newBreeds);

            })
            .catch((error) => {
                console.log(error);
                setError("Error al cargar la lista de razas");
              })
    }

    return(
        <>
        <select onChange={(e) => updateDog(e.target.value)}>
            {breeds.map((breed) => (
                <option value={breed.id} key={breed.id} >{breed.name}</option>
            ))}
        </select>
        { error && <Error error={error}/> }
        
        </>
       
        
    )
};

export default Select;