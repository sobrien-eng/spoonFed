import styles from '../Styles/Home.css';
const Home = () => {
    return(
        <>
        <h1>Welcome to SpoonFed</h1>
        <div id="contain">
        <form id="createAcc">
        <h4>Create an Account</h4>
            <label>First Name: </label><input placeholder="first name"></input><br></br>
            <label>Last Name: </label><input placeholder="last name"></input><br></br>
            <label>Username: </label><input placeholder="username"></input><br></br>
            <label>Password: </label><input placeholder="password"></input><br></br>
            <label>Email: </label><input placeholder="email"></input><br></br>
            <button>Create Account</button><br></br>
        </form>
        <div id="loginAcc">
        <h4>Login your Account</h4>
        <label>First Name: </label><input placeholder="first name"></input><br></br>
        <label>Password: </label><input placeholder="password"></input><br></br>
        <br></br><label>OR</label><br></br><br></br>
        <label>Username: </label><input placeholder="username"></input><br></br>
        <label>Password: </label><input placeholder="password"></input><br></br>
        <button>Login</button>
        </div>
        </div>
        </>
    );
}

export default Home;