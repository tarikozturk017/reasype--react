import React from "react";
import EnumInput from "./EnumInput";
import RangeInput from "./RangeInput"

export default function Filter(props) {
    const [recipeData, setRecipeData] = React.useState({
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
    }) 

    const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime']
    const dishTypes = ['Alcohol-cocktail', 'Biscuits and cookies', 'Bread', 'Cereals', 
        'Condiments and sauces', 'Drinks', 'Desserts', 'Egg', 'Main course', 'Omelet', 
        'Pancake', 'Preps', 'Preserve', 'Salad', 'Sandwiches', 'Soup', 'Starter']
    const cuisineTypes = ['American', 'Asian', 'British', 'Caribbean', 'Central Europe', 
        'Chinese', 'Eastern Europe', 'French', 'Indian', 'Italian', 'Japanese', 'Kosher', 
        'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'South American', 'South East Asian']
    const diets = ['balanced', 'high-fiber', 'high-protein', 'low-carb', 'low-fat', 'low-sodium']
    const healths = ['alcohol-free', 'immuno-supportive', 'celery-free', 'crustacean-free', 
        'dairy-free', 'egg-free', 'fish-free', 'fodmap-free', 'gluten-free', 'keto-friendly', 
        'kidney-friendly', 'kosher', 'low-potassium', 'lupine-free', 'mustard-free', 'low-fat-abs', 
        'No-oil-added', 'low-sugar', 'paleo', 'peanut-free', 'pecatarian', 'pork-free', 'red-meat-free', 
        'sesame-free', 'shellfish-free', 'soy-free', 'sugar-conscious', 'tree-nut-free', 'vegan', 'vegetarian', 'wheat-free']
    const numbers = ['3', '4', '5', '6', '7', '8', '9', '10+']


    // React.useEffect(() => {

    // })

    function getRecipe() {
        // const randomNumber = Math.floor(Math.random() * 10)
        // const url = allMemeImages[randomNumber].url
        // setMeme(prevMeme => ({
        //     ...prevMeme,
        //     randomImage: url
        // }))
        props.handleFilter(recipeData);
        
    }


    function handleRange(data, name) {
        console.log('setting handle range data: ' + data+name)
        setRecipeData(prevData => ({
            ...prevData,
            // [name]: value
            [name]: data
        }))
    }

    function handleChange(event) {
        let {name, value} = event.target
        if (name === 'ingr') {
            if(value === '10+') value = 100;
        }
        setRecipeData(prevData => ({
            ...prevData,
            // [name]: value
            [name]: value
        }))
    }

    function handleEnumChange(data, name) {
        console.log('Filter handleEnumChange' + data + name)
        setRecipeData(prevData => ({
            ...prevData,
            // [name]: value
            [name]: data
        }))
    }

    const nums = numbers.map((num) => {
        return (
            <option value={num}>{num}</option>
        )
    })


    // TODO
    //handle data options with arr for enums -> [] when setting. push etc.. to manipulate  

    // apply the concept below to the enum types
    // https://www.w3schools.com/howto/howto_js_filter_dropdown.asp
    return (
        <div className="filter-page--container">
            <div className="filter--header">
                <h3>Reasype</h3>
                <p>Please set any of the filter to generate a recipe based on your wish</p>    
            </div>
            <div className="form"> 
                <div className="primary-filter--container">
                    <div className="form-element--container">
                        <p>Enter a query to search</p>
                        <input // no need to change 
                            type="text" // string
                            placeholder="Query meal name"
                            className="form--input"
                            value={recipeData.q}
                            onChange={handleChange}
                            name="q"
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-element--container">
                        <p>Select a diet type</p>
                        <EnumInput value={recipeData.diet} name="diet" placeholder="Diet" handleEnumChange={handleEnumChange} options={diets}/>
                    </div>
                    <div className="form-element--container">
                        <p>Select a diet type</p>
                        <select value={recipeData.ingr} onChange={handleChange} name="ingr" className="form--input" >
                            {nums}
                        </select>
                    </div>
                </div>

                <div className="advanced-filter--container">
                    <div className="advanced-element--container" id="advanced-1">
                        <RangeInput name="calories" handleRange={handleRange} />   
                    </div>       
                    <div className="advanced-element--container" id="advanced-2">
                        <RangeInput name="time" handleRange={handleRange} />
                    </div>
                    <div className="advanced-element--container" id="advanced-3">
                        <input 
                            type="text" // string
                            placeholder="excluded item"
                            className="form--input"
                            value={recipeData.excluded}
                            onChange={handleChange}
                            name="excluded"
                            autoComplete="off"
                        />
                    </div>
                    <div className="advanced-element--container" id="advanced-4">
                        <EnumInput value={recipeData.dishType} name="dishType" placeholder="Dish type" handleEnumChange={handleEnumChange} options={dishTypes}/>
                    </div>
                    <div className="advanced-element--container" id="advanced-5">
                        <EnumInput value={recipeData.mealType} name="mealType" placeholder="Meal type" handleEnumChange={handleEnumChange} options={mealTypes}/>
                    </div>
                    <div className="advanced-element--container" id="advanced-6">
                        <EnumInput value={recipeData.cuisineType} name="cuisineType" placeholder="Cuisine type" handleEnumChange={handleEnumChange} options={cuisineTypes}/>
                    </div>
                    <div className="advanced-element--container" id="advanced-7">
                        <EnumInput value={recipeData.health} name="health" placeholder="Health label" handleEnumChange={handleEnumChange} options={healths}/>
                    </div>
                    <div className="advanced-element--container" id="advanced-8">
                        <button>Basic search</button>
                    </div>
                    <div className="advanced-element--container" id="advanced-9">
                        <p>asdadad</p>
                    </div>

                </div>
                <div className="generate-button">
                    <button 
                        // className="generate-button"
                        onClick={getRecipe}
                    >
                        Get a new recipe
                    </button>
                </div>
            </div>
            {/* <div className="meme">
            <img src={meme.randomImage} alt="" className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div> */}
            
        </div>
    )
}