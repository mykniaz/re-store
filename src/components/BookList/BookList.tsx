import React from "react";
import { connect } from "react-redux";
import { booksLoaded } from "../../actions"

import { WithBookStoreService } from "../HOC"

import BookListItem from "../BookListItem";

import { compose } from "../../utils"
import Spinner from "../Spinner";

interface IProps {
    books: [];
    service: {
        getBooks: () => Promise<Array<any>>
    };
    booksLoaded: (data: []) => any;
}

class BookList extends React.Component<IProps, { isLoading: boolean }>  {
    state = {
        isLoading: false,
    };

    componentDidMount() {
        const { service, booksLoaded } = this.props;

        this.setState({ isLoading: true });

        service.getBooks()
            .then((data: any) => {
                booksLoaded(data);
                this.setState({ isLoading: false });
            });
    };

    render() {
        const { books } = this.props;
        const { isLoading } = this.state;

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
                {isLoading ? <Spinner /> : bookList}
            </div>
        )
    }
}

const mapStateToProps = ({ books }: {books: []}) => ({ books });

export default compose(
    WithBookStoreService(),
    connect(mapStateToProps, { booksLoaded }),
)(BookList)