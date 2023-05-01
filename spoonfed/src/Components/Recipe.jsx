import React, {useState} from 'react';
import styles from '../Styles/Recipe.css';
import { Link } from "react-router-dom";

const Recipe = ({ title, authorId, picture, prepTime, cookTime, ingredients, steps }) => {
  return (
    <div className='mainContainer'>
      <Link to={`/recipes/${id}`}>
        {/* {title} */}
        Recipe title
      </Link>
    </div>
  )
}

export default Recipe;