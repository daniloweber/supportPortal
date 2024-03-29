import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
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

                <input {...register("email", { required: "E-Mail ist erforderlich", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Ungültige E-Mail-Adresse" } })} placeholder="E-Mail" style={inputStyle} />
                {errors.email && <p>{errors.email.message}</p>}

                <input {...register("phoneNumber", { required: "Telefonnummer ist erforderlich", minLength: { value: 10, message: "Telefonnummer muss mindestens 10 Ziffern lang sein" } })} placeholder="Telefonnummer" style={inputStyle} />
                {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}

                <select {...register("userRole", { required: "Nutzerrolle ist erforderlich" })} style={inputStyle}>
                    <option value="">Wählen Sie eine Rolle</option>
                    <option value="Administrator">Administrator</option>
                    <option value="Support-Mitarbeiter">Support-Mitarbeiter</option>
                    <option value="User">User</option>
                </select>
                {errors.userRole && <p>{errors.userRole.message}</p>}

                <input {...register("password", { required: "Passwort ist erforderlich", minLength: { value: 8, message: "Passwort muss mindestens 8 Zeichen lang sein" } })} placeholder="Passwort" style={inputStyle} />
                {errors.password && <p>{errors.password.message}</p>}

                <button style={inputStyle} type="submit">Registrieren</button>
            </form>
        </div>
    );
};

export default Register;