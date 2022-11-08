import React from 'react';
import Filter from './components/Filter';
import Recipe from './components/Recipe';


export default function App() {
    const [optionsData, setOptionsData] = React.useState({
      q: '', 
      diet: '', 
      ingr: 5
    });  

    // React.useEffect(() => {
    //   const axios = require("axios");

    //   const options = {
    //     method: 'GET',
    //     url: 'https://edamam-recipe-search.p.rapidapi.com/search',
    //     params: {
    //       q: optionsData.q, 
    //       diet: optionsData.diet, 
    //       ingr: optionsData.ingr, //max num of ingredients that returns
    //       to: 10, //max num of result that returns
    //     },
    //     headers: {
    //       'X-RapidAPI-Key': '72f094bba8mshe30eb0e4eba84b4p1c57b9jsn898cf38aeb4e',
    //       'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
    //     }
    //   };
      
    //   axios.request(options).then(function (response) {
    //     console.log(response.data);
    //   }).catch(function (error) {
    //     console.error(error);
    //   });
    // }, [optionsData])



    function handleFilter(data) {
        setOptionsData(data)
    }
    return (
        <div className='container'>
           {/* <Filter handleFilter={handleFilter}/> */}
           <Recipe />
        </div>
    );
}