import React from 'react';
import Filter from './components/Filter';
import Recipe from './components/Recipe';
import Fork from "./fork.png"
import Knife from "./knife.png"
import './styles.css'
import dataJson from './data.json'

//ADD FORK AND KNIFE TO THE SIDES



export default function App() {
    const [optionsData, setOptionsData] = React.useState({
        q: '', 
        diet: [], //enum
        ingr: 5,
        excluded: '',
        dishType: [], //enum
        mealType: [], //enum
        cuisineType: [], //enum
        health: [], //enum
        calories: '',
        time: ''
    });  
    const [resultRecipe, setResultRecipe] = React.useState({});
    const [isRecipeGenerated, setIsRecipeGenerated] = React.useState(false);

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
        console.log("input data :" + optionsData.q + optionsData.diet + optionsData.ingr + optionsData.excluded + 
        optionsData.dishType + optionsData.mealType + optionsData.cuisineType + optionsData.health + optionsData.calories + optionsData.time)
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
        setIsRecipeGenerated(isRecipeGenerated => !isRecipeGenerated)
    }

    function resetRecipe(){
        console.log("reseting old game")
        setOptionsData({
            q: '', 
            diet: [], //enum
            ingr: 5,
            excluded: '',
            dishType: [], //enum
            mealType: [], //enum
            cuisineType: [], //enum
            health: [], //enum
            calories: '',
            time: ''
          });  
        setIsRecipeGenerated(isRecipeGenerated => !isRecipeGenerated)
    }
    return (
        <div>
            <div className='outer--container'>
            {/* <div className='sides--container'> */}
                <img src={Fork} alt="" className="fork"/>
                
            {/* </div> */}
            {/* <Leftbar /> */}
                <div className='container'>
                    {!isRecipeGenerated ? 
                        <Filter handleFilter={handleFilter} /> 
                        : 
                        <Recipe resetRecipe={resetRecipe} resultRecipe={resultRecipe} />}
                    {/* <Filter handleFilter={handleFilter}/> */}
                    {/* <Recipe  resultRecipe={resultRecipe} /> */}
                </div>
                <img src={Knife} alt="" className="knife"/>
            </div>
        </div>
    );
}