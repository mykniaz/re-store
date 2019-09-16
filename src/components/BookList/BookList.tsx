import * as React from 'react';
import { connect } from 'react-redux';
import { fetchBooks, addToOrder } from '../../actions';

import BookListItem from '../BookListItem';

import Spinner from '../Spinner';

interface IProps {
  books: [];
  onAddToOrder: (id: number) => void;
}

const BookList: React.FC<IProps> = ({ books, onAddToOrder }) => {
  const bookList = books.map((book: any) => {
    return (
      <div
        className="book-list__item mb-4"
        key={book.id}
      >
        <BookListItem
          book={book}
          onAddToOrder={() => { onAddToOrder(book.id); }}
        />
      </div>
    );
  });

  return (
    <div className="book-list">
      {bookList}
    </div>
  );
};

interface IBookListContainer {
  books: [];
  isLoading: boolean;
  onFetchBooks: () => any;
  onAddToOrder: (id: number) => any;
}

const BookListContainer: React.FC<IBookListContainer> = (
  { books, isLoading, onFetchBooks, onAddToOrder },
) => {
  React.useEffect(
  () => {
    onFetchBooks();
  },
  [onFetchBooks],
);

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <BookList
      books={books}
      onAddToOrder={onAddToOrder}
    />
  );
};

const mapStateToProps = (
  { booksList: { books, isLoading } }
  : { booksList: { books: Array<{}>, isLoading: boolean },
  }) => ({
    books,
    isLoading,
  }
);

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddToOrder: (id: number) => dispatch(addToOrder(id)),
    onFetchBooks: () => fetchBooks(dispatch),
  };
};

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);
