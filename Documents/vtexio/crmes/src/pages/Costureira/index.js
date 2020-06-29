import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';
import profile from '../../assets/profile.jpg';

export default function Costureira() {
    const [costureiras, setCostureiras] = useState([]);
    useEffect(() => {
        async function loadCostureiras() {
            const user_token = localStorage.getItem('user_token');
            const response = await api.get('/costureiras', { headers: { bearerAuth: user_token } });

            setCostureiras(response.data);

        }
        loadCostureiras();
    }, []);
    return (
        <>
            <ul className="costureira-list">
                {costureiras.map(costureira => (
                    <li key={costureira.id}>
                        <header style={{ backgroundImage: `url(${profile})` }} />
                        <strong>{costureira.nome} </strong>
                        <span>{costureira.telefone}</span>
                    </li>
                ))}

                <li>
                    <header style={{ backgroundImage: `url(${profile})` }} />
                    <strong>Helena Obvio</strong>
                    <span>(45) 3541-2940</span>
                </li>
                <li>
                    <header style={{ backgroundImage: `url(${profile})` }} />
                    <strong>Maria Elizabete</strong>
                    <span>(45) 3541-2940</span>
                </li>
                <li>
                    <header style={{ backgroundImage: `url(${profile})` }} />
                    <strong>Maria Elizabete</strong>
                    <span>(45) 3541-2940</span>
                </li>
                <li>
                    <header style={{ backgroundImage: `url(${profile})` }} />
                    <strong>Maria Elizabete</strong>
                    <span>(45) 3541-2940</span>
                </li>
            </ul>

            <Link to="/Newcostureira">
                <button className="btn">Cadastar Costureira</button>
            </Link>
        </>
    )
}