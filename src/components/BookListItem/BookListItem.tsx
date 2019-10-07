import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  book: {
    id: number,
    img: string,
    price: number,
    title: string,
    description: string,
  };
  onAddToOrder: () => void;
}

const BookListItem: React.FC<IProps> = (
  {
    book:{ id, title, description, img, price },
    onAddToOrder,
  }) => {
  return (
    <div className="card book-list-item">
      <div className="card-header">
        <Link
          to={`/card/${id}`}
          className="card-link"
        >
          {title}
        </Link>
      </div>
      <div className="card-body d-flex">
        <div className="mr-4 book-list-item__image-wrapper">
          <img
            src={img}
            className="book-list-item__image"
            alt={title}
          />
        </div>
        <div className="book-list-item__text-wrapper">
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

export default BookListItem;
