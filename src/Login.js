import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
					alt="logoAmazon"
					className="login__logo"
				/>
			</Link>

			<div className="login__container">
				<h2>Sign-in</h2>

				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						className="login__signInButton"
						type="submit"
						onClick={signIn}
					>
						Sign In
					</button>

					<p>
						By Signing-in, you agree to the AMAZON fake Clone Coordination of
						Use & safe. Please see our Privacy Notice, Our Cookies Notice and
						Our interest-based Ads Notice.
					</p>

					<button
						className="login__registerButton"
						type="submit"
						onClick={register}
					>
						Create Your Amazon Account
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
