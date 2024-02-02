import React, { useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const SignUp = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        address: ''
    })

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/api/user/signup', userData)
            alert('Registered Successfully')
            const token = response.data.token;
            localStorage.setItem('jwtEcom', token)
            console.log('User created successfully', response.data);
        } catch (error) {
            console.error("Error creating user:", error)
        }
    }

    return (
        <div>
            <form  >
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Name </label>
                    <input type="text" name='username' value={userData.username} onChange={handleInputChange} className="form-control" id="formGroupExampleInput" placeholder="Enter Your Name" />
                </div>

                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Email</label>
                    <input type="email" name='email' value={userData.email} onChange={handleInputChange} className="form-control" id="formGroupExampleInput2" placeholder="Enter Your Email" />
                </div>

                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="password" name='password' value={userData.password} onChange={handleInputChange} className="form-control" id="formGroupExampleInput2" placeholder="Enter your password" />
                </div>

                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Address</label>
                    <input type="text" name='address' value={userData.address} onChange={handleInputChange} className="form-control" id="formGroupExampleInput2" placeholder="Enter your address" />
                </div>

                <button type="submit" onClick={handleSubmit} class="btn btn-success">SignUp</button>
            </form>
        </div>
    )
}

export default SignUp;