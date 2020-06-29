import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';


export default function Dashboard() {

    return (
        <ul className="menu">
            <li className="btn"><Link to="/costureira">Costureira</Link></li>
            <li><Link to="/produto">Produtos</Link></li>
            <li><Link to="/corte">Cortes</Link></li>
        </ul>
    )
}