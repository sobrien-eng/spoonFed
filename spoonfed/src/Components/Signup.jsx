import styles from '../Styles/AccProfile.css';
const Signup = () => {
    return (
        <>
        <h4>Please create your account by entering the correct information below</h4>
        <div id='box'>
            <form>
                <label>First Name: </label><input placeholder='first name'></input><br></br>
                <label>Last Name: </label><input placeholder='last name'></input><br></br>
                <label>Username: </label><input placeholder='username'></input><br></br>
                <label>Password: </label><input placeholder='password'></input><br></br>
                <button>Click here</button>
            </form>
        </div>
        <div>
            make it look pretty!
            fix navbar!
            onClick direct to AccProfile
        </div>
        </>
    );
}

export default Signup;