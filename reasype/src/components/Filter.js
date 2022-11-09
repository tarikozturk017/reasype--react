import React from "react";
import EnumInput from "./EnumInput";
import RangeInput from "./RangeInput"

export default function Filter(props) {
    const [recipeData, setRecipeData] = React.useState({
        q: '', 
        diet: '', 
        ingr: 5,
        excluded: '',
        dishType: '',
        mealType: '',
        cuisineType: '',
        health: '',
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
        const {name, value} = event.target
        setRecipeData(prevData => ({
            ...prevData,
            // [name]: value
            [name]: value
        }))
    }



    // TODO
    //handle data options with arr for enums -> [] when setting. push etc.. to manipulate  

    // apply the concept below to the enum types
    // https://www.w3schools.com/howto/howto_js_filter_dropdown.asp
    return (
        <div className="filter-page--container">
            
            <div className="form">
                <input 
                    type="text" // string
                    placeholder="Query meal name"
                    className="form--input"
                    value={recipeData.q}
                    onChange={handleChange}
                    name="q"
                    autoComplete="off"
                />
                
                {/* <input //enum
                    type="text"
                    placeholder="Diet"
                    className="form--input"
                    value={recipeData.diet}
                    onChange={handleChange}
                    name="diet"
                    list="diet"
                />
                <datalist id="diet">
                    {diets.map((item, key) => 
                        <option key={key} value={item} />
                    )}
                </datalist> */}

                <EnumInput value={recipeData.diet} name="diet" placeholder="Diet" handleChange={handleChange} options={diets}/>

                <input 
                    type="number" //int
                    placeholder="Max number of ingredients"
                    min="1"
                    className="form--input"
                    value={recipeData.ingr}
                    onChange={handleChange}
                    name="ingr"
                />
                <input 
                    type="text" // string
                    placeholder="excluded item"
                    className="form--input"
                    value={recipeData.excluded}
                    onChange={handleChange}
                    name="excluded"
                    autoComplete="off"
                />
                {/* <input 
                    type="text" //enum
                    placeholder="Dish type"
                    className="form--input"
                    value={recipeData.dishType}
                    onChange={handleChange}
                    name="dishType"
                    list="dishType"
                />
                <datalist id="dishType">
                    {dishTypes.map((item, key) => 
                        <option key={key} value={item} />
                    )}
                </datalist> */}
                <EnumInput value={recipeData.dishType} name="dishType" placeholder="Dish type" handleChange={handleChange} options={dishTypes}/>

                {/* <input 
                    type="text" //enum
                    placeholder="Meal type"
                    className="form--input"
                    value={recipeData.mealType}
                    onChange={handleChange}
                    name="mealType"
                    list="mealType"
                />
                <datalist id="mealType">
                    {mealTypes.map((item, key) => 
                        <option key={key} value={item} />
                    )}
                </datalist> */}

                <EnumInput value={recipeData.mealType} name="mealType" placeholder="Meal type" handleChange={handleChange} options={mealTypes}/>

                {/* <input 
                    type="text" //enum
                    placeholder="Cuisine type"
                    className="form--input"
                    value={recipeData.cuisineType}
                    onChange={handleChange}
                    name="cuisineType"
                    list="cuisineType"
                />
                <datalist id="cuisineType">
                    {cuisineTypes.map((item, key) => 
                        <option key={key} value={item} />
                    )}
                </datalist> */}

                <EnumInput value={recipeData.cuisineType} name="cuisineType" placeholder="Cuisine type" handleChange={handleChange} options={cuisineTypes}/>

                {/* <input 
                    type="text" //enum
                    placeholder="Health label"
                    className="form--input"
                    value={recipeData.health}
                    onChange={handleChange}
                    name="health"
                    list="health"
                />
                <datalist id="health">
                    {healths.map((item, key) => 
                        <option key={key} value={item} />
                    )}
                </datalist> */}

                <EnumInput value={recipeData.health} name="health" placeholder="Health label" handleChange={handleChange} options={healths}/>
{/* 

                <input 
                    type="text" //range
                    placeholder="Calories"
                    className="form--input"
                    value={recipeData.calories}
                    onChange={handleChange}
                    name="calories"
                /> */}
                <RangeInput name="calories" handleRange={handleRange} />
                {/* <input 
                    type="text" //range
                    placeholder="Time"
                    className="form--input"
                    value={recipeData.time}
                    onChange={handleChange}
                    name="time"
                /> */}
                <RangeInput name="time" handleRange={handleRange} />
                <button 
                    className="form--button"
                    onClick={getRecipe}
                >
                    Get a new recipe
                </button>
            </div>
            {/* <div className="meme">
            <img src={meme.randomImage} alt="" className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div> */}
            
        </div>
    )
}