import React, {useState} from 'react';
import styles from '../Styles/Recipe.css';
import { Link } from "react-router-dom";

const Recipe = ({ title, authorId, picture, prepTime, cookTime, ingredients, steps }) => {
  return (
    <div className='mainContainer'>
      {/* add a random image and style make sure clicking on the image or title takes you to recipe page */}
      {/* <Link to={`/recipes/`}> ${id} */}
        {/* {title} */}
        Recipe title
      {/* </Link> */}
    </div>
  )
}

export default Recipe;