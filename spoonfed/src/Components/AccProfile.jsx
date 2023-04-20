import styles from '../Styles/AccProfile.css';
const AccountProfile = () => {
    return (
        <>
        <h4>Account Info</h4>
        logged in already, looking from another account
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
        </div>
        <button>Logout</button>
        </>
    );
}

export default AccountProfile;