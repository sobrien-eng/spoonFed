import { CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { useState } from 'react';
import UserPool from '../UserPool';
import styles from "../Styles/Register.module.css";
import { Link, useNavigate } from "react-router-dom";


function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyProcess, setVerifyProcess] = useState(false);
    const [OTP, setOTP] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const attributeList = [];
        attributeList.push(
            new CognitoUserAttribute({
                Name: 'email',
                Value: email,
            })
        );
        UserPool.signUp(username, password, attributeList, null, (err, data) => {
            if (err) {
                console.log(err);
                alert("Couldn't sign up");
            } else {
                console.log(data);
                setVerifyProcess(true);
                alert('User Added Successfully');
            }
        });
    };

    const verifyAccount = (e) => {
        e.preventDefault();
        const user = new CognitoUser({
            Username: username,
            Pool: UserPool,
        });
        console.log(user);
        user.confirmRegistration(OTP, true, (err, data) => {
            if (err) {
                console.log(err);
                alert("Couldn't verify account");
            } else {
                console.log(data);
                alert('Account verified successfully');
                window.location.href = '/login';
            }
        });
    };

    return (
      
        <div className={styles.signup_container}>
            {verifyProcess === false ? (

                <div className={styles.signup_form_container}>
                    <div className={styles.left}>
                        <h1>Already have an Account?</h1>
                        <Link to="/login">
                            <button type="button" className={styles.white_btn}>
                                Sign in
                            </button>
                        </Link>
                    </div>
                    <div className={styles.right}>

                        <form className={styles.form_container} onSubmit={handleSubmit}>
                            <h1>Create Account</h1>
                            {/* <input type="text" placeholder="First Name" name="firstName" onChange={handleChange} value={data.firstName} required className={styles.input} />
                        <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} value={data.lastName} required className={styles.input} /> */}
                            <input type="text" placeholder="Username" name="username" onChange={(e) => setUsername(e.target.value)} value={username} required className={styles.input} />

                            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required className={styles.input} />

                            <input type="password" placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} required className={styles.input} />
                            {/* {error && <div className={styles.error_msg}>{error}</div>} */}
                            <button type="submit" className={styles.blue_btn}>
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>

            ) : (
                <form  className={styles.form_container} onSubmit={verifyAccount}>
                    Enter the OTP:
                    <input
                        type="text"
                        value={OTP}
                        onChange={(e) => setOTP(e.target.value)}
                        className={styles.input}
                    />
                    <br />
                    <button type="submit" className={styles.blue_btn}>Verify</button>
                </form>
            )}
        </div>
    );
}

export default Register;