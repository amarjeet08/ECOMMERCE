import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:3001/api/user/login',
                userData
            );
            const token = response.data.token;
            localStorage.setItem('jwtEcom', token);
            console.log('Logged in successfully', response.data);
        } catch (error) {
            console.error('Error logged in', error);
        }
    };

    return (
        <div className="container mt-5">
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        className="form-control"
                        id="email"
                        placeholder="Enter Your Email"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                    />
                </div>

                <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn btn-success"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
