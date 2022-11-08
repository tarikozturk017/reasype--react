import React from "react";

export default function Recipe() {
    return (
        <div className="recipe--container">
            <div className="recipe--header"><h1>Chicken and Stuffing Casserole</h1></div>
            <div className="image-container">
                <img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000" 
                alt=""
                >
                </img>
            </div>
            <div className="recipe--ingredients">
                <ul>
                    <li>1 (6-ounce) package stuffing, such as STOVE TOP Stuffing Mix for Chicken</li>
                    <li>1 1/2 ounce boneless skinless chicken breasts</li>
                    <li>1 can (10 3/4 ounce) condensed cream of chicken soup</li>
                    <li>1/3 cup butter or sour cream, such as BREAKSTONES</li>
                    <li>1 (16-ounce) package frozen mixed vegetables</li>
                </ul>
            </div>
            <div className="recipe--source"><a href="http://www.goodhousekeeping.com/food-recipes/a12680/chicken-sausage-pepper-onion-heros-121734/">Click to see the full recipe</a> Food52</div>
            <div className="recipe--information">
                <p className="calories">590 Calories</p>
                <p className="diet-type">Balanced</p>
                <p className="dish-type">Dinner</p>
                <p className="yield">Yield 6 people</p>
                <p className="cuisine-type">Italian</p>
                <div className="health-labels">Health Labels:
                    <ul>
                        <li>Sugar-Conscious</li>
                        <li>Peanut-Free</li>
                    </ul>
                </div>
                <div className="cautions">Cautions:
                    <ul>
                        <li>Soy</li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}