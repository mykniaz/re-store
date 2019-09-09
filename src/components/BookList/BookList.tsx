import React from "react";
import { connect } from "react-redux";
import { booksLoaded } from "../../actions"

import { WithBookStoreService } from "../HOC"

import BookListItem from "../BookListItem";

import { compose } from "../../utils"

interface IProps {
    books: [];
    service: {
        getBooks: () => []
    };
    booksLoaded: (data: []) => any;
}

class BookList extends React.Component<IProps>  {
    componentDidMount(): void {
        const { service, booksLoaded } = this.props;
        const data = service.getBooks();

        booksLoaded(data);
    }

    render() {
        const { books } = this.props;

        const bookList = books.map((book:any) => {
            return (
                <div
                    className="book-list__item mb-4"
                    key={book.id}
                >
                    <BookListItem book={book} />
                </div>
            )
        });

        return (
            <div className="book-list">
                {bookList}
            </div>
        )
    }
}

const mapStateToProps = ({ books }: {books: []}) => ({ books });

export default compose(
    WithBookStoreService(),
    connect(mapStateToProps, { booksLoaded }),
)(BookList)