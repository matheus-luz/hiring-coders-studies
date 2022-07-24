import React from 'react';
import { GetStaticProps } from 'next';
import api from '../service/apiInterna.json';

interface ICategorie {
  id: number;
  title: string;
}

interface ICategoryProps {
  categories: ICategorie[];
}

export default function categories({ categories }: ICategoryProps) {
  return (
    <>
      <h1>Categorias</h1>

      <section>
        <ul>
          { categories.map(categorie => {
            return (
              <li key={categorie.id}>
                {categorie.title}
              </li>
            )
          })}
        </ul>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps<ICategoryProps> = async () => {
  const response = await api.get('http://localhost:3333/categories');

  const categories = await response.data;

  return {
    props: {
      categories
    },
    revalidate: 5
  }
}