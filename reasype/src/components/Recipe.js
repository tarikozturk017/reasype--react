import React from "react";

export default function Recipe() {
    return (
        <div className="recipe--container">
            <h1 className="recipe--header">Chicken and Stuffing Casserole</h1>
            <img src="https://edamam-product-images.s3.amazonaws.com/web-img/977/977c626fe73a233e4a3652f671a3ae2c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLWVhc3QtMSJHMEUCIQCXoQhWGj75%2Bv1vRShAolDfmDKT0KBJQoKfGjo%2Be4LqNAIgUU%2Bw85FpJsYATZop3NYKifhk5B3Bun1BhM1spWmue9AqzAQINxAAGgwxODcwMTcxNTA5ODYiDLKchNecm%2FljX%2B5OoiqpBNoCb8cnc2THkInGRXIdaZSdMpBeT7zWqidbZ68keqp4WRjcPQ3ukOBN3lzaOa9tp7MSg49quWxjzKA%2FT5z6eeupAVALGHBzy2%2BaXUetULuYrOFhNYXrtnPEV9QF5xYCZD%2F571gr4ohsN9gu%2B0u8So55GFS4YVXfgX5qzoV384eanjU8qmQxBJVhhCHkU1oipAwnq99RxQSYwCJ%2BqxQDChiC5x%2FTcOEtgLgsPPWP8sYIQWb5FwtP52YlUctXtmdXfUrIKLakaQf2GfA7AQrN8appdI8ZGskmMhGg2cb9P1riZQdbbw5yGQ9eqSYC1L2XzPC7TG5ptA8G9wh8mzxraVKo2llM2Io4VJJFo%2F23Xv9AsN16cXwQ4PQsyUSJEkTqFfJhW9veL4qClWW1%2FOHtQslGVpmOMjQR1wX0sN%2FrRewiG%2FQPOFnMKNrNl%2BfyWgjFbpgjM1YravzN2gzJw3tq%2FlFti6imzdZQkbhzv9mH6H7LJENqOUzk%2Bs6mmJtZsSWPhDJkv9y9ILsu2cfXqGw2UVJVLv5qHaQb7H4EuyVpq9NQI2DRP47xE9%2FWC3y16eH398jASb08iFDMTuo0o04rO9fltvoGXqvDKjPcT93gbBL5adS8aVxe1qTmTGoJQE2B6J5IO%2Fc2hA2PGCMOGviWNspL%2BdbV%2BKxs%2B9tD6UHwfxT1sJ2SF1ooP2wr0zZo7Q1f0C%2F8kLrnmga2jL1pTYbpYuY0RZK516eG8FMwxf6lmwY6qQHMyzj5Meik7Ds8t%2F4LT401hKyNOaQJ%2BTu08JhqbKQCHXFoDW3HL4D2TiUj1e45Evu3I95Uo3Dz60GiGLLxxzGDCmW1Iffip29MZ2g3W3zSwEmRD1eNVGYuvW3x1Z%2FCTKFeXp5uTtejs0o5UgQ40vmB7A38TdeI2W%2Bk5hc%2FcedlPhB7%2BBlRFJRvYD74vWiHuZ9YI5ZX%2FXUVYHxhKuxOP8wy5Cdd4V%2BxZOZS&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221107T221438Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFEOUFLIWR%2F20221107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d1f390abdbfc0bc71d3596df13ed8cbfb511f444f88818fe26ae0784d4f30444" 
            alt=""
            >
            </img>
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