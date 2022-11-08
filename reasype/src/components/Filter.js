import React from "react";

export default function Filter(props) {
    const [recipeData, setRecipeData] = React.useState({
        q: '', 
        diet: '', 
        ingr: 5
    }) 

    // React.useEffect(() => {

    // })

    function getRecipe() {
        const randomNumber = Math.floor(Math.random() * 10)
        // const url = allMemeImages[randomNumber].url
        // setMeme(prevMeme => ({
        //     ...prevMeme,
        //     randomImage: url
        // }))
        props.handleFilter(recipeData);
        
    }


    function handleChange(event) {
        const {name, value} = event.target
        setRecipeData(prevData => ({
            ...prevData,
            // [name]: value
            [name]: value
        }))
    }

    return (
        <div className="filter-page--container">
            
            <div className="form">
                <input 
                    type="text"
                    placeholder="enter q"
                    className="form--input"
                    value={recipeData.q}
                    onChange={handleChange}
                    name="q"
                />
                <input 
                    type="text"
                    placeholder="Diet"
                    className="form--input"
                    value={recipeData.diet}
                    onChange={handleChange}
                    name="diet"
                />
                <input 
                    type="number"
                    placeholder="Max number of ingredients"
                    min="1"
                    className="form--input"
                    value={recipeData.ingr}
                    onChange={handleChange}
                    name="ingr"
                />
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