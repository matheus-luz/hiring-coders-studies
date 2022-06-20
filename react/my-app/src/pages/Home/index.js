import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import * as S from './styled';

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [erro, setErro] = useState(false);
  

  function handleSearch() {
    axios.get(`https://api.github.com/users/${user}/repos`).then((r) => {
      const repositories = r.data;
      
      const repositoriesName =[];
      repositories.map((repository) => repositoriesName.push(repository.name));
      localStorage.setItem('repositories', JSON.stringify(repositoriesName));
      
      setErro(false);
      navigate('/repositories');
    })
      .catch((err) => {
        setErro(true);
      });
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input type="text"placeholder="Usuário" value={user} onChange={(e)=> setUser(e.target.value)} />
        <S.Button type="button" onClick={handleSearch}>Pesquisar</S.Button>
      </S.Content>
      {
        erro && <S.ErrorMessage>Ocorreu um erro. Tente novamente.</S.ErrorMessage>
      }
    </S.HomeContainer>
  )
}
