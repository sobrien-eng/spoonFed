import './App.css';
import AccountProfile from './Components/AccProfile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Account } from './Components/Account';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Status from './Components/Status';
import Recipe from './Components/Recipe';
import RecipePage from './Components/RecipePage';
import 'bootstrap/dist/css/bootstrap.css';

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
			<div style={{backgroundColor: "#A7B7BD"}}>
			<Account>
				<Status />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/home" element={<Home />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path='/accProfile' element={<AccountProfile />} />
						<Route path='/recipe' element={<Recipe />} />
						{/* <Route path='/recipePage' element={<RecipePage />} /> */}
					</Routes>
				</BrowserRouter>
			</Account>
			</div>
		</>
	);
}

export default App;
