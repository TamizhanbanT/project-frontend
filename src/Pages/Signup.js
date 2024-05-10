import React, { useState } from 'react';
import axios from 'axios';
import './signup.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom'
import { message } from 'antd';
const SignupForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        EmailId: '',
        password: '',
        verified:"true",
        
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://project-inventory-management.onrender.com/users/register', formData);
            console.log(formData);
            console.log(response.data); // handle response as needed
            // Redirect or show a success message
            message.success("Sign up successfull")
            navigate("/")
        } catch (error) {
            console.error('Error:', error);
            message.error("Email already registered try another")
            // Show an error message to the user
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <label htmlFor="name">name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="EmailId">EmailId:</label>
                    <input type="email" id="EmailId" name="EmailId" value={formData.EmailId} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>

                <button type="submit" className="signup-btn">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupForm;