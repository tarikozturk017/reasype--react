import React from "react";

export default function PaperContent(props) {
    // console.log(props)
    const data = props.data;

    function enumElements(enumData) {
        let str = "";
        enumData.map((data, i, enumData) => {
            str+=data;
            if (enumData.length - 1 !== i) str+=', '
        });
        return str;
        // console.log("data: " + enumData)
    }   

    return (
        <div className="paper-p--container">
            {/* {data.q && <p>Querying for: {data.q}</p>}
            {data.calories && <p>Calorie: {data.calories} <p>Note: total calorie of whole meal</p> </p>} */}
            <p>Querying for: {data.q}</p>
            <p>Max of <strong>{data.ingr}</strong> ingredients</p>
            <p>Diet type(s): {enumElements(data.diet)}</p>
            <p>Calories: {data.calories} kcal <i>(whole meal)</i></p>
            <p>Preparation time: {data.time} mins</p>
            <p>Dish type(s): {enumElements(data.dishType)}</p>
            <p>Meal type(s): {enumElements(data.mealType)}</p>
            <p>Cuisine type(s): {enumElements(data.cuisineType)}</p>
            <p>Health label(s): {enumElements(data.health)}</p>
            <p>Excluded: {data.excluded}</p>
        </div>
    )
}