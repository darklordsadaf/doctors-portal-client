import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {

    const history = useHistory();

    const handleLoginRoute = () => {

        history.push("/dashboard/appointment");
    };
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link class="nav-link mr-5" to="/"><b>Home</b></Link>
                    </li>
                    <li class="nav-item">
                        <a style={{ textDecoration: "line-through" }} class="nav-link mr-5" href="#"><b>About</b></a>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link mr-5" to="/appointment"><b>Appointment</b></Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="/login"><b>Login</b></a>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link mr-5" onClick={handleLoginRoute} href="#"><b>Dashboard</b></Link>
                    </li>
                    <li class="nav-item">
                        <a style={{ textDecoration: "line-through" }} class="nav-link mr-5" href="#"><b>Contact Us</b></a>
                    </li>

                </ul>

            </div>
        </nav>
    );
};

export default Navbar;