<<<<<<< Updated upstream
import Recipe from "./Recipe"
// import './styles.css';

import {React, useState, useEffect }from 'react'

const RecipeGrid = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState([]);
    // useEffect(() => {
    //     fetch(API_URL)
    //         .then((res) => res.json())
    //         .then(data => {

    //             setRecipes(data.results);
    //         })
    // }, [])

    return (
        <div>
            recipe grid
            {recipes.length > 0 ? (
                <div className="container">
                    <div className="grid">
                        {recipes.map((recipe) =>
                            <Recipe key={recipe.id} {...recipe} />)}
                    </div>
                </div>
            ) : (
                <h2>No Results Found</h2>
            )}
        </div>
    )
}

export default RecipeGrid
=======
import Styles from "../Styles/RecipeGrid.css"

const RecipeGrid = (Title, Img, Username, PrepTime, CookTime, Ingredients, Steps) => {
    return (
        <>
            <div id="container">
                <div id="title"><label>Recipe Title: </label>{RecipeGrid.Title}</div>
                <div><label></label>{RecipeGrid.Img}</div>
                <div><label>Created by: </label>{RecipeGrid.Username}</div>
                <div><label>Prep Time: </label>{RecipeGrid.PrepTime}</div>
                <div><label>Recipe Cook Time: </label>{RecipeGrid.CookTime}</div>
            </div>
        </>
    )
}

export default RecipeGrid;
>>>>>>> Stashed changes
