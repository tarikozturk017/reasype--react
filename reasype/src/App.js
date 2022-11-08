import React from 'react';
import Filter from './components/Filter';
import Recipe from './components/Recipe';
import './styles.css'
import dataJson from './data.json'

export default function App() {
    const [optionsData, setOptionsData] = React.useState({
      q: '', 
      diet: '', 
      ingr: 5
    });  
    const [resultRecipe, setResultRecipe] = React.useState({});

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

    // React.useEffect(() => {
    //   const axios = require("axios");

    const getData=()=>{
        console.log("input data :" + optionsData.q + optionsData.diet + optionsData.ingr)
        // after fetching data
        // pass data to get random recipe function
        getRandomRecipe()

        // console.log('hits length')
        // console.log(dataJson['hits'].length)
    }
    React.useEffect(()=>{
        getData()
    },[optionsData])

    // normally it will take fetched data
    function getRandomRecipe() {
        let len = dataJson['hits'].length;
        let randomNum = Math.floor(Math.random() * len);
        // console.log('random number and random object')
        // console.log(randomNum)
        setResultRecipe(dataJson['hits'][randomNum]['recipe'])
    }
    

    function handleFilter(data) {
        setOptionsData(data)
    }
    return (
        <div className='container'>
           {/* <Filter handleFilter={handleFilter}/> */}
           <Recipe  resultRecipe={resultRecipe} />
        </div>
    );
}