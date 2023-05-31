import React, {useState} from 'react';
import styles from '../Styles/Recipe.css';
import { useNavigate } from 'react-router-dom';
import ratata from "../images/Ratatouille-recipe.jpg";
import 'bootstrap/dist/css/bootstrap.css';


const Recipe = ({ title, authorId, picture, prepTime, cookTime, ingredients, steps }) => {
  let navigate = useNavigate();
  return (
    <div className='mainContainer'>
      {/* add a random image and style make sure clicking on the image or title takes you to recipe page */}
      {/* <Link to={`/recipes/`}> ${id} */}
        {/* {title} */}
        <img src={ratata} onClick={() => {navigate("/recipePage")}}/>
        Ratatouille
      {/* </Link> */}
    </div>
  )
}

export default Recipe;