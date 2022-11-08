import React from "react";

export default function Recipe(props) {
    const dietTypes = returnInP(props.resultRecipe.dietLabels)
    const mealTypes = returnInP(props.resultRecipe.mealType)
    const healhLabels = returnInLi(props.resultRecipe.healthLabels)
    const cautions = returnInLi(props.resultRecipe.cautions)
    const ingredientLines = returnInLi(props.resultRecipe.ingredientLines)
    const calories = parseFloat(props.resultRecipe.calories).toFixed(2)
    const dishType = returnInP(props.resultRecipe.dishType)

    function returnInP(arr) {
        let str = ""
        if (arr){
            arr.map(e => str+=`${e} `)
            // console.log(str);
        }
        return str;
    }

    function returnInLi(arr) {
        let obj
        if (arr){
            obj = arr.map((e) => <li>{e}</li>)
        }
        return obj;
    }

    console.log(props.resultRecipe)
    return (
        <div className="recipe--container">
            <div className="recipe--header"><h1>{props.resultRecipe.label}</h1></div>
            <div className="image-container">
                <img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000" 
                alt=""
                >
                </img>
            </div>
            <div className="recipe--ingredients">
                <h3>Ingredients</h3>
                <ul>
                    {ingredientLines}
                </ul>
            </div>
            <div className="recipe--source">
                <a href={props.resultRecipe.url}>Click here to see the directions</a> 
                <p>Source: {props.resultRecipe.source}</p>
            </div>
            <div className="info-label--container">
                <div className="recipe--information">
                    <h3>Information</h3>
                    <div className="calories">{calories} Calories</div>
                    <div className="yield">Serves for {props.resultRecipe.yield} people</div>
                    <div className="diet-type">Diet type:   {dietTypes}</div>
                    <div className="meal-type">Meal type:   {mealTypes}</div>
                    <div className="dish-type">Dish type:   {dishType}</div>
                    <div className="cuisine-type">Cuisine type: {props.resultRecipe.cuisineType}</div>
                </div>
            
            <div className="labels--container">
                    <div className="label"><p>Health Labels</p>
                        <ul>
                            {healhLabels}   
                        </ul> 
                    </div>
                    <div className="label"><p>Cautions</p>
                        <ul>
                            {cautions}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="generate-button">
                <button>Generate New Recipe</button>
            </div>
        </div>
    )
}