import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap';

const Recipe = ({ title, authorId, picture, prepTime, cookTime, ingredients, steps }) => {
  const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    const getRecipe = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setRecipe(data);
    }
  return (
    <div className='mainContainer'>
      
      {recipe && (
                <>
                <Link to={`/recipes/${id}`}>
        {/* {title} */}
        Recipe title
      </Link>
                    <div>img</div>
                    <Link 
                    // to ={`/users/${id}`}
                    >
                        {/* {authorId} */}
                        userName1
                        </Link>
                </>
            )}
    </div>
  )
}

export default Recipe