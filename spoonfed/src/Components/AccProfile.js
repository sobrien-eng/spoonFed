import styles from '../Styles/AccProfile.css';
const AccountProfile = () => {
    return (
        <>
        <h4>Account Info</h4>
        <div id='container'>
            <div id='saved'>
                <label>Your saved recipes: </label>
                <ul>
                    <li><a href="#">Chicken Nachos</a></li>
                    <li><a href="#">Mac 'n' Cheese</a></li>
                    <li><a href="#">Sushi</a></li>
                </ul>
            </div>
            <div id="liked">
                <label>Your liked recipes: </label>
                <ul>
                    <li><a href="#">Chicken Nachos</a></li>
                    <li><a href="#">Pesto Spaghetti</a></li>
                    <li><a href="#">Potato Salad</a></li>
                </ul>
            </div>
            <div id="create">
                <label>Recipes you've created: </label>
                <ul>
                    <li><a href="#">Aunt Carol's Cassorole</a></li>
                    <li><a href="#">Tomato fries</a></li>
                    <li><a href="#">Quail Omlette</a></li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default AccountProfile;