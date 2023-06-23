import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProdutoCard from './ProdutoCard'; // Import do componente ProdutoCard

function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  // Função para buscar todos os produtos da API
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/produtos'); // Substitua pela URL correta da sua API
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Função para filtrar os produtos com base no termo de busca
  const filterProducts = (term) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Função para classificar os produtos
  const sortProducts = (option) => {
    let sorted = [...filteredProducts];
    if (option === 'priceAsc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (option === 'priceDesc') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (option === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    setFilteredProducts(sorted);
  };

  // Função para lidar com o envio do formulário de pesquisa
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    filterProducts(searchTerm);
  };

  // Função para redirecionar para a página de detalhes do produto
  const navigateToProductDetails = (productId) => {
    navigate(`/produtos/${productId}`);
  };

  // Carrega a lista de produtos ao montar o componente
  useEffect(() => {
    fetchProducts();
  }, []);

  // Atualiza a lista de produtos filtrados e/ou ordenados quando os valores de searchTerm e sortOption mudarem
  useEffect(() => {
    filterProducts(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    sortProducts(sortOption);
  }, [sortOption]);

  return (
    <div className="container">
      <h2>Produtos</h2>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Pesquisar..."
        />
        <button type="submit">Buscar</button>
      </form>
      <div>
        <label>
          Ordenar por:
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="priceAsc">Preço (Menor para Maior)</option>
            <option value="priceDesc">Preço (Maior para Menor)</option>
            <option value="name">Nome</option>
          </select>
        </label>
      </div>
      <div className="product-list">
        {filteredProducts.map((produto) => (
            <div
                key={produto.codigo}
                className='produto-card'
                onClick={() => navigateToProductDetails(produto.codigo)}
            >
                <ProdutoCard produto={produto}/>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Home;


