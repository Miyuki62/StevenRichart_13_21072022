import React from "react";
import { Link } from "react-router-dom";
import logo from "../asset/img/argentBankLogo.png";

const Logo = () => (
	<Link className="main-nav-logo" to="/">
		<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
		<h1 className="sr-only">Argent Bank</h1>
	</Link>
);

export default Logo;
