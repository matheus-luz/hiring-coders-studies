import { GetServerSideProps, GetStaticProps } from 'next';
import React from 'react';
import api from '../service/api';

interface IProducts {
  id: number;
  title: string;
}

interface IProductsProps {
  products: IProducts[];
}

export default function Home({ products }: IProductsProps) {
  return (
    <>
      <h1>Products</h1>

      <section>
        <ul>
          { products.map(product => {
            return (
              <li key={product.id}>
                {product.title}
              </li>
            )
          })}
        </ul>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<IProductsProps> = async () => {
  const response = await api.get('http://localhost:3333/products');

  const products = await response.data;

  return {
    props: {
      products
    },
    revalidate: 5
  }
}