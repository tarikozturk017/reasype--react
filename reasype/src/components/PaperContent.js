import React from "react";

export default function PaperContent(props) {
    // console.log(props)
    const data = props.data;

    const OptionVal = data.ingr=== 100 ? '10+' : data.ingr;

    function enumElements(enumData) {
        let str = "";
        enumData.map((data, i, enumData) => {
            str+=data;
            if (enumData.length - 1 !== i) str+=', '
        });
        return str;
        // console.log("data: " + enumData)
    }   

    

    // const calories = data.calories.replace(/%2B/g, "+");
    // const time = data.time.replace(/%2B/g, "+");

    return (
        <div className="paper-p--container">
            {/* {data.q && <p>Querying for: {data.q}</p>}
            {data.calories && <p>Calorie: {data.calories} <p>Note: total calorie of whole meal</p> </p>} */}
            {data.q && <li>Querying for: {data.q}</li>}
            {OptionVal && <li>Max <strong>{OptionVal}</strong> ingredients</li>}
            {data.diet.length!==0 && <li>Diet type(s): {enumElements(data.diet)}</li>}
            {data.calories.length !==0 && <li>Calories: {data.calories.replace(/%2B/g, "+")} kcal <i>(whole meal) {data.calories}</i></li>}
            {data.time.length !==0 && <li>Preparation time: {data.time.replace(/%2B/g, "+")} mins</li>}
            {data.dishType.length!==0 && <li>Dish type(s): {enumElements(data.dishType)}</li>}
            {data.mealType.length!==0 && <li>Meal type(s): {enumElements(data.mealType)}</li>}
            {data.cuisineType.length!==0 && <li>Cuisine type(s): {enumElements(data.cuisineType)}</li>}
            {data.health.length!==0 && <li>Health label(s): {enumElements(data.health)}</li>}
            {data.excluded && <li>Excluded: <span className="excluded">{data.excluded}</span></li>}
        </div>
    )
}