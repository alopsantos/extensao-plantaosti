import React, { useState, useEffect } from 'react';

import { Container, Content } from './styles';
import api from '../../services/api';

interface IntLinks {
  id: number;
  title: string;
  url: string;
}
interface IntPerfil {
  id: number;
  title: string;
  urlavatar: string;
}
const Atacado: React.FC = () => {
  const [Apilinks, setLinks] = useState<IntLinks[]>([]);
  const [perfils, setPerfils] = useState<IntPerfil[]>([]);
  console.log(api);

  useEffect(() => {
    loadApi();
  }, []);

  async function loadApi(){
    const response = await api.get('/linksatacado');
    const responseperfil = await api.get('/perfil?id=2');
    setPerfils(responseperfil.data);
    setLinks(response.data);
  }
  return (
    <Container>
      <Content>
        {perfils.map(perfil => (
          <div key={perfil.id}>
            <img src={perfil.urlavatar} alt={perfil.title} />
            <span>{perfil.title}</span>
          </div>
        ))}
        <ul>
          {Apilinks.map(link => (
            <li key={link.id}>
              <a href={link.url} target="_blank" title={link.title}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </Content>
    </Container>
  );
};

export default Atacado;
