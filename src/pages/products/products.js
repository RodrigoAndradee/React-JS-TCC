import React, { useState } from "react";

import { Input, Row, Col } from "antd";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import AddProductCard from "../../components/productsCards/addProductCard/addProductCard";
import ProductsCard from "../../components/productsCards/productCard/productCard";

import "./products.scss";

const arrayOfCards = [
  {
    name: "Picanha Maturata",
    description: "Carne de Primeira",
    weight: "350g",
    photo:
      "https://www.beefpoint.com.br/wp-content/uploads/2020/03/AAK5oqN-360x233.jpeg",
    disabled: false,
  },
  {
    name: "Maminha",
    description: "Carne de Primeira",
    weight: "550g",
    photo:
      "https://www.beefpoint.com.br/wp-content/uploads/2020/03/AAK5oqN-360x233.jpeg",
    disabled: true,
  },
  {
    name: "Maminha",
    description: "Carne de Primeira",
    weight: "550g",
    photo:
      "https://www.beefpoint.com.br/wp-content/uploads/2020/03/AAK5oqN-360x233.jpeg",
    disabled: false,
  },
  {
    name: "Maminha",
    description: "Carne de Primeira",
    weight: "550g",
    photo:
      "https://www.beefpoint.com.br/wp-content/uploads/2020/03/AAK5oqN-360x233.jpeg",
    disabled: false,
  },

  {
    name: "Maminha",
    description: "Carne de Primeira",
    weight: "550g",
    photo:
      "https://www.beefpoint.com.br/wp-content/uploads/2020/03/AAK5oqN-360x233.jpeg",
    disabled: false,
  },
  {
    name: "Maminha",
    description: "Carne de Primeira",
    weight: "550g",
    photo:
      "https://www.beefpoint.com.br/wp-content/uploads/2020/03/AAK5oqN-360x233.jpeg",
    disabled: false,
  },
  {
    name: "Maminha",
    description: "Carne de Primeira",
    weight: "550g",
    photo:
      "https://www.beefpoint.com.br/wp-content/uploads/2020/03/AAK5oqN-360x233.jpeg",
    disabled: false,
  },

  {
    name: "Maminha",
    description: "Carne de Primeira",
    weight: "550g",
    photo:
      "https://www.beefpoint.com.br/wp-content/uploads/2020/03/AAK5oqN-360x233.jpeg",
    disabled: false,
  },
  {
    name: "Maminha",
    description: "Carne de Primeira",
    weight: "550g",
    photo:
      "https://www.beefpoint.com.br/wp-content/uploads/2020/03/AAK5oqN-360x233.jpeg",
    disabled: false,
  },
];

const { Search } = Input;

export default function Products() {
  const [loadingSearch, setLoadingSearch] = useState(false);

  const onSearch = () => {
    setLoadingSearch(true);
  };

  function createProduct() {
    console.log("TO CRIANDO");
  }

  return (
    <div className="main-div-products">
      <Header />

      <Search
        placeholder="Digite o Nome de um Produto"
        onSearch={onSearch}
        loading={loadingSearch}
        className="search-bar"
      />

      <div className="products-body">
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <AddProductCard
              key="add-product"
              handleCreateProduct={createProduct}
            />
          </Col>
          {arrayOfCards.map((cardInfo, index) => {
            const key = index;
            return (
              <Col span={6} key={key}>
                <ProductsCard productsInfo={cardInfo} />
              </Col>
            );
          })}
        </Row>
      </div>
      <Footer />
    </div>
  );
}
