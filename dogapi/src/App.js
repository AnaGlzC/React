import React, {useState, useEffect} from "react";
import Card from "./components/Card";
import Error from "./components/Error";
import Select from "./components/Select";
import getDog from "./helpers/getDog";

const initialDog = {
  image: "",
  breed: {
    id: 0,
    name: "RANDOM"
  }
}

function App() {

  const [dog, setDog] = useState(initialDog);
  const [error, setError] = useState(null);

  useEffect(() =>{

    updateDog();

  }, []);

  const updateDog = (breedID) => {
    getDog(breedID)
    .then((newDog) =>{
    setDog(newDog);

    })
    .catch((error) =>{
      console.log(error)
      setError("Error al cargar la imagen")
    })
  }
  return (
    <div className="app">
      <h1>Hola</h1>
      <Select updateDog={updateDog}/>
      { error && <Error error={error} /> }
      <Card dog={dog} updateDog={updateDog}/>
    </div>
    
  );
}

export default App;
