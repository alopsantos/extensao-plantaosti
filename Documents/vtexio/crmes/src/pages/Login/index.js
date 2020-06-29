import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/sessions', { email, password });
        const { token } = response.data;
        const { setor } = response.data.user;

        localStorage.setItem('user_token', token);
        localStorage.setItem('setor', setor);
        console.log(response);

        history.push('/dashboard');
    }
    return (
        <>
            <p>
                Gerenciador <strong>Aline Mezzari Brand 0.1</strong>
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail *</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Seu e-email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <label htmlFor="senha">Senha *</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}