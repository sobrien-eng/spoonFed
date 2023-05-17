import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap';

const Recipe = ({ title, authorId, picture, prepTime, cookTime, ingredients, steps }) => {
  return (
    <div className='mainContainer'>
      {/* <Link to={`/recipes/${id}`}>
        {title}
        Recipe title
      </Link> */}
    </div>
  )
}

export default Recipe