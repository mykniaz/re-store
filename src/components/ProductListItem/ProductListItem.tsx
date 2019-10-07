import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  product: {
    id: number,
    img: string,
    price: number,
    title: string,
    description: string,
  };
  onAddToOrder: () => void;
}

const ProductListItem: React.FC<IProps> = (
  {
    product:{ id, title, description, img, price },
    onAddToOrder,
  }) => {
  return (
    <div className="card product-list-item">
      <div className="card-header">
        <Link
          to={`/card/${id}`}
          className="card-link"
        >
          {title}
        </Link>
      </div>
      <div className="card-body d-flex">
        <div className="mr-4 product-list-item__image-wrapper">
          <img
            src={img}
            className="product-list-item__image"
            alt={title}
          />
        </div>
        <div className="product-list-item__text-wrapper">
          <p className="card-text">Author: {description}</p>
          <p className="card-text">Price: {price}</p>
        </div>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-primary"
          onClick={onAddToOrder}
        >
          Add to card
        </button>
      </div>
    </div>
  );
};

export default ProductListItem;
