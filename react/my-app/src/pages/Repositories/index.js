import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as S from './styled';

export default function Repositories() {
  const [repositories, setRepositories] = useState([]);
  const navigate =  useNavigate();

  useEffect(() => {
    let repositoriesName = JSON.parse(localStorage.getItem('repositories'));
    if(repositoriesName !== null) {
      setRepositories(repositoriesName);
      localStorage.clear();
    } else {
      navigate('/');
    }

  }, [navigate]);

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        {
          repositories.map((repository) => {
            return (
              <S.ListItem>Repositório: {repository}</S.ListItem>
            )
          })
        }
      </S.List>
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
  )
}