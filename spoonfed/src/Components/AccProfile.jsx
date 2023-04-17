import styles from '../Styles/AccProfile.css';
const AccountProfile = () => {
    return (
        <>
        <h4>Account Info</h4>
        <div id='container'>
            <div id="saved">
                <label>Your saved recipes: </label>
                <ul>
                    <li><a href="#">Chicken Soup</a></li>
                    <li><a href="#">Turkey Burgers</a></li>
                    <li><a href="#">Gumbo</a></li>
                </ul>
            </div>
            <div id="liked">
            <label>Your liked recipes: </label>
                <ul>
                    <li><a href="#">Quail Omlette</a></li>
                    <li><a href="#">Blueberry Pie</a></li>
                    <li><a href="#">Burrito</a></li>
                </ul>
            </div>
            <div id="created">
            <label>Recipes you've created: </label>
                <ul>
                    <li><a href="#">Grill Cheese</a></li>
                    <li><a href="#">Pesto</a></li>
                    <li><a href="#">Crepes</a></li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default AccountProfile;