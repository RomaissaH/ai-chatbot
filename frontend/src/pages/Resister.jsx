import React, { useState } from "react";
import axios from "axios";

export default function Register() {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password1: "",
		password2: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
	
    const handleSubmit = async (e) => {
		e.preventDefault();
        if(isLoading){
            return
        }

        setIsLoading(true);

        try{
            const response = await axios.post("http://127.0.0.1:8000/api/register/", formData)
            console.log("Success!", response.data)
            setSuccessMessage("Registration Successful!")
        }
        catch(error){
            console.log("Error during registration!", error.response?.data);
            if(error.response && error.response.data){
                Object.keys(error.response.data).forEach(field => {
                    const errorMessages = error.response.data[field];
                    if(errorMessages && errorMessages.length > 0){
                        setError(errorMessages[0]);
                    }
                })
            }
        }
        finally{
            setIsLoading(false)
        }

	};
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    //const [icon, setIcon] = useState(eyeOff);
    const handleToggle = () => {
        if (type==='password'){
            //setIcon(eye);
            setType('text')
        } else {
            //setIcon(eyeOff)
            setType('password')
        }
    }
    function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === 'password' ? 'text' : 'password';
}

	return (
		<div>
            {error && <p style={{color:"red"}}>{error}</p>}
            { successMessage && <p style={{color:"green"}}>{successMessage}</p>}
			<h2>Register:</h2>
			<form>
				<label>username:</label>
				<br />
				<input
					type="text"
					name="username"
					value={formData.username}
					onChange={handleChange}
				></input>{" "}
				<br />
				<br />
				<label>email:</label>
				<br />
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
				></input>{" "}
				<br />
				<br />
				<label>password:</label>
				<br />
				<input
					type={type}
					name="password1"
					value={formData.password1}
					onChange={handleChange}
				></input>{" "}
				<br />
				<br />
				<label>confirm password:</label>
				<br />
				<input
					type={showPassword ? "text" : "password"}
					name="password2"
					value={formData.password2}
					onChange={handleChange}
				></input>{" "}
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "Hide" : "Show"}
                 </button>
				<br />
				<br />
				<button type="submit" disabled={isLoading} onClick={handleSubmit}>
					Register
				</button>
			</form>
		</div>
	);
}