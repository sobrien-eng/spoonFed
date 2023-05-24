import logo from './logo.svg';
import './App.css';
import AccountProfile from './Components/AccProfile';
import NavBar from './Components/NavBar';
import Signup from './Components/Signup';

//const apiURL = "https://localhost3000/recipes";
 
function App() {
  // const [recipes, setRecipes] = useState([]);
  // const [query, setQuery] = useState('');


  // useEffect(() => {
	// 	fetch(apiURL)
	// 		.then((res) => res.json())
	// 		.then(data => {
			
	// 			setMovies(data.results);
	// 		})
	// }, [])

  // const searchRecipe = async (e) => {
	// 	e.preventDefault();
	// 	console.log("Searching");
	// 	try {
	// 		const url = `https://localhost3000/recipes/query=${query}`;
	// 		const res = await fetch(url);
	// 		const data = await res.json();
		

	// 		console.log("data.results");
	// 		setMovies(data.results);
		
		
	// 	}
	// 	catch (e) {
	// 		console.log(e);
	// 	}
	// }
  // const changeHandler = (e) => {
	// 	setQuery(e.target.value);
	// }
  return (
    <>
    <NavBar />
    <AccountProfile />
    </>
  );
}

export default App;
