import React from "react";

const getDog = async (breedID) => {

let url;

if (!breedID ||breedID === 0)  {

    url = "https://api.thedogapi.com/v1/images/search";
} else {
    url = "https://api.TheDogAPI.com/v1/images/search?breed_ids=" + breedID;
}

    const res = await fetch(url);

    if(!res.ok) {
        const { url, status, statusText } = res;
        throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
    }
    
    const [data] = await res.json();

    let {url:image, breeds: [breed]} = data;
    
    if (!breed) {
        breed = {
            id:0,
            name:'random'
        }
    }
    

    const dog = {
            image,
            breed, 
          }
          
    
    return dog;
}    


export default getDog;