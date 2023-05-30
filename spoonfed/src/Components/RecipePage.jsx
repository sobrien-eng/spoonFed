import React from 'react'
import NavBar from "./NavBar"
const RecipePage = ({ title, authorId, picture, prepTime, cookTime, ingredients, steps }) => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    const getRecipe = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setRecipe(data);
    }
//saveroute
//get redirect for username, authorId?

    useEffect(() => {
        // const recipeUrl = `${moviesURL}${id}?api_key=${apiKey}&language=en-US`;
        // getRecipe(recipeUrl);
    }, []);
    return (
        <>
        {/* style this page */}
            <NavBar />
            <div>RecipePage</div>
            {recipe && (
                <>
                    <div>img</div>
                    <Link 
                    // to ={`/users/${id}`}
                    >
                        {/* {authorId} */}
                        userName1
                        </Link>
                    <div>Prep time: 15 minutes
                        {/* {prepTime} */}
                    </div>
                    <div> Cook time: 1 hour
                        {/* {cookTime} */}
                    </div>
                    <div>Ingredients: More lorem ipsum because why not
                        {/* {ingredients} */}
                    </div>
                    <div>Steps: Lorem ipsum text- blah blah blah
                        {/* {steps} */}
                    </div>
                    <Button>Save</Button>
                </>
            )}
        </>
    )
}

export default RecipePage