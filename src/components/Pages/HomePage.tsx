import * as React from 'react';
import ProductList from 'components/ProductList';

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h1 className="h1">
            List of Products
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ProductList/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
