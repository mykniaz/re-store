import * as React from 'react';
import { connect } from 'react-redux';
import { fetchBooks, addToOrder } from '../../actions';

import { WithBookStoreService } from '../HOC';

import BookListItem from '../BookListItem';

import { compose } from '../../utils';
import Spinner from '../Spinner';
import { bindActionCreators } from 'redux';

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
  onFetchBooks: () => void;
  onAddToOrder: (id: number) => void;
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
      onAddToOrder={(id) => { onAddToOrder(id); }}
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

const mapDispatchToProps = (dispatch: any, { service }: any) => {
  return bindActionCreators(
    {
      onAddToOrder: addToOrder,
      onFetchBooks: fetchBooks(service),
    },
    dispatch,
  );
};

export default compose(
  WithBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);
