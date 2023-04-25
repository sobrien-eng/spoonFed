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