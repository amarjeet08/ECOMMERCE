import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        address: '',
    });

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:3001/api/user/signup',
                userData
            );
            alert('Registered Successfully');
            const token = response.data.token;
            localStorage.setItem('jwtEcom', token);
            console.log('User created successfully', response.data);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <div className="container mt-5">
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleInputChange}
                        className="form-control"
                        id="username"
                        placeholder="Enter Your Name"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        value={userData.address}
                        onChange={handleInputChange}
                        className="form-control"
                        id="address"
                        placeholder="Enter your address"
                    />
                </div>

                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn btn-success"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
