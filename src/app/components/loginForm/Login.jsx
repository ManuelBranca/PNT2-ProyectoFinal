import React, { useState } from "react";
import './login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Para manejar errores si los hay

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Email: ", email, "Password: ", password);

        // Crear el objeto con los datos del formulario
        const userData = {
            email: email,
            password: password,
        };

        try {
            // Realizar la solicitud POST al backend
            const response = await fetch('http://localhost:3000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            // Verificar si la respuesta es exitosa
            if (response.ok) {
                const data = await response.json();
                console.log('Login exitoso, Token:', data.token); // Mostrar el token en consola
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error en la solicitud', error);
            setError('Error en la comunicación con el servidor');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>} 
            </form>
        </div>
    );
};

export default Login;
