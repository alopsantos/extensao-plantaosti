import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import './styles.css';
import camera from '../../assets/camera.svg';

export default function NewCostureira({ history }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [telefone, setTelefone] = useState('');
    const [banco, setBanco] = useState('');
    const [agencia, setAgencia] = useState('');
    const [conta, setConta] = useState('');
    const [operacao, setOperacao] = useState('');
    const [foto, setFoto] = useState(null);

    const preview = useMemo(() => {
        return foto ? URL.createObjectURL(foto) : null;
    }, [foto])

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData();
        const user_token = localStorage.getItem('user_token');
        
        data.append('nome', nome);
        data.append('email', email);
        data.append('endereco', endereco);
        data.append('cidade', cidade);
        data.append('telefone', telefone);
        data.append('banco', banco);
        data.append('conta', conta);
        data.append('operacao', operacao);
        
        await api.post('/costureiras', data, { headers: {user_token} })
        
        //history.push('/costureira')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label
                    id="thumbnail"
                    style={{ backgroundImage: `url(${preview})` }}
                    className={ foto ? 'has-thumbnail': ''}
                >
                    <input type="file" onChange={event => setFoto(event.target.files[0])} />
                    <img src={camera} alt="Select imagem" />
                </label>

                <label htmlFor="nome">Nome</label>
                <input id="nome" placeholder="Nome" value={nome} onChange={event => setNome(event.target.value)} />

                <label htmlFor="email">E-mail</label>
                <input id="email" placeholder="Ex: anderson@lopscorp.com" value={email} onChange={event => setEmail(event.target.value)} />

                <label htmlFor="endereco">Endereço</label>
                <input id="endereco" placeholder="Ex: Rua Angelo Fontana, 2160" value={endereco} onChange={event => setEndereco(event.target.value)} />

                <label htmlFor="cidade">Cidade</label>
                <input id="cidade" placeholder="Ex: Santa Terezinha de Itaipu" value={cidade} onChange={event => setCidade(event.target.value)} />

                <label htmlFor="telefone">Nome</label>
                <input id="telefone" placeholder="Ex: (45) 35412940" value={telefone} onChange={event => setTelefone(event.target.value)} />

                <label htmlFor="banco">Banco</label>
                <input id="banco" placeholder="Ex: Sicredi" value={banco} onChange={event => setBanco(event.target.value)} />

                <label htmlFor="agencia">Agencia</label>
                <input id="agencia" placeholder="Ex: 3391-X" value={agencia} onChange={event => setAgencia(event.target.value)} />

                <label htmlFor="conta">Conta bancária</label>
                <input id="conta" placeholder="Conta bancária" value={conta} onChange={event => setConta(event.target.value)} />

                <label htmlFor="operacao">Tipo de operação</label>
                <input id="operacao" placeholder="Ex: 013" value={operacao} onChange={event => setOperacao(event.target.value)} />

                <button className="btn">Cadastrar</button>
            </form>
        </>
    )
}