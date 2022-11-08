import React from "react";

export default function Recipe(props) {
    const dietTypes = returnInP(props.resultRecipe.dietLabels)
    const mealTypes = returnInP(props.resultRecipe.mealType)
    const healhLabels = returnInLi(props.resultRecipe.healthLabels)
    const cautions = returnInLi(props.resultRecipe.cautions)
    const ingredientLines = returnInLi(props.resultRecipe.ingredientLines)
    const calories = parseFloat(props.resultRecipe.calories).toFixed(2)


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
                <ul>
                    {ingredientLines}
                </ul>
            </div>
            <div className="recipe--source">
                <a href={props.resultRecipe.url}>Click here to see the directions</a> 
                {props.resultRecipe.source}
            </div>
            <div className="recipe--information">
                <p className="calories">{calories} Calories</p>
                <div className="diet-type">{dietTypes}</div>
                <p className="meal-type">{mealTypes}</p>
                <p className="yield">Yield {props.resultRecipe.yield} people</p>
                <p className="cuisine-type">{props.resultRecipe.cuisineType}</p>
                <div className="health-labels">Health Labels:
                     <ul>
                        {healhLabels}   
                    </ul> 
                </div>
                <div className="cautions">Cautions:
                    <ul>
                        {cautions}
                    </ul>
                </div>
                
            </div>
        </div>
    )
}