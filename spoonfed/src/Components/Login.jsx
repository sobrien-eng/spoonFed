import { useContext, useState } from 'react';
import { AccountContext } from './Account';
import styles from "../Styles/Login.module.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { authenticate } = useContext(AccountContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticate(username, password)
            .then((data) => {
                console.log(data);
                alert('login success');
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                //setError(err.response.data.message);
                alert('login failure');
            });
    };

    return (
        <div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="username"
							placeholder="Username"
							name="username"
							onChange={(e) => setUsername(e.target.value)}
							value={username}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							required
							className={styles.input}
						/>
						{/* {err && <div className={styles.error_msg}>{error}</div>} */}
						<button type="submit" className={styles.blue_btn}>
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New to SpoonFed?</h1>
					<Link to="/register">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
    );
}

export default Login;