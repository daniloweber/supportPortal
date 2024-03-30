import React from 'react';
import { useForm } from 'react-hook-form';
import {useNavigate} from "react-router-dom";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {

        const userData = {
            mail: data.mail,
            password: data.password,
            name: data.firstName,
            surname: data.lastName,
            phone: data.phone,
            role: data.role
        };
    
        const response = await fetch('http://localhost:8080/user/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const responseData = await response.json();
        localStorage.setItem('token', responseData.token);
        navigate('/');
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1em',
        color: 'black',
        backgroundColor: 'white',
        padding: '1em',
        borderRadius: '8px',
        maxWidth: '500px',
        margin: '20px auto',
        marginBottom: '100px',
    };

    const inputStyle = {
        padding: '0.5em',
        borderRadius: '4px',
        border: '1px solid black',
        width: '100%',
    };

    return (
        <div style={{ textAlign: 'center', fontSize: '20px', marginBottom: '20px' }}>
            <h2>Registrierung</h2>
            <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
            <input {...register("firstName", { required: "Vorname ist erforderlich" })} placeholder="Vorname" style={inputStyle} />
{errors.firstName && <p>{errors.firstName.message}</p>}

<input {...register("lastName", { required: "Nachname ist erforderlich" })} placeholder="Nachname" style={inputStyle} />
{errors.lastName && <p>{errors.lastName.message}</p>}

                <input {...register("mail", { required: "E-Mail ist erforderlich", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Ungültige E-Mail-Adresse" } })} placeholder="E-Mail" style={inputStyle} />
                {errors.email && <p>{errors.email.message}</p>}

                <input {...register("phone", { required: "Telefonnummer ist erforderlich", minLength: { value: 10, message: "Telefonnummer muss mindestens 10 Ziffern lang sein" } })} placeholder="Telefonnummer" style={inputStyle} />
                {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}

                <select {...register("role", { required: "Nutzerrolle ist erforderlich" })} style={inputStyle}>
                    <option value="">Wählen Sie eine Rolle</option>
                    <option value="admin">Administrator</option>
                    <option value="stuff">Support-Mitarbeiter</option>
                    <option value="customer">User</option>
                </select>
                {errors.userRole && <p>{errors.userRole.message}</p>}

                <input {...register("password", { required: "Passwort ist erforderlich", minLength: { value: 8, message: "Passwort muss mindestens 8 Zeichen lang sein" } })} type="password" placeholder="Passwort" style={inputStyle} />
                {errors.password && <p>{errors.password.message}</p>}

                <button style={inputStyle} type="submit">Registrieren</button>
            </form>
        </div>
    );
};

export default Register;