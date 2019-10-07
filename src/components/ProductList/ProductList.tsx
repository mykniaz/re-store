import * as React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addToOrder } from 'actions';

import ProductListItem from 'components/ProductListItem';

import Spinner from 'components/Spinner';

interface IProps {
  products: [];
  onAddToOrder: (id: number) => void;
}

const ProductList: React.FC<IProps> = ({ products, onAddToOrder }) => {
  const list = products.map((product: any) => {
    return (
      <div
        className="product-list__item mb-4"
        key={product.id}
      >
        <ProductListItem
          product={product}
          onAddToOrder={() => { onAddToOrder(product.id); }}
        />
      </div>
    );
  });

  return (
    <div className="product-list">
      {list}
    </div>
  );
};

interface IProductListContainer {
  products: [];
  isLoading: boolean;
  onFetchProducts: () => any;
  onAddToOrder: (id: number) => any;
}

const ProductListContainer: React.FC<IProductListContainer> = (
  { products, isLoading, onFetchProducts, onAddToOrder },
) => {
  React.useEffect(
  () => {
    onFetchProducts();
  },
  [onFetchProducts],
);

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <ProductList
      products={products}
      onAddToOrder={onAddToOrder}
    />
  );
};

const mapStateToProps = (
  { productList: { products, isLoading } }
  : { productList: { products: Array<{}>, isLoading: boolean },
  }) => ({
    products,
    isLoading,
  }
);

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddToOrder: (id: number) => dispatch(addToOrder(id)),
    onFetchProducts: () => fetchProducts(dispatch),
  };
};

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
