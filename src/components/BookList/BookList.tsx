import React from "react";
import { connect } from "react-redux";
import { booksLoaded, toggleLoading } from "../../actions"

import { WithBookStoreService } from "../HOC"

import BookListItem from "../BookListItem";

import { compose } from "../../utils"
import Spinner from "../Spinner";

type TActionReturns = {type: string, payload: any};

interface IProps {
    books: [],
    isLoading: boolean,
    service: {
        getBooks: () => Promise<Array<any>>,
    },
    booksLoaded: (data: []) => TActionReturns,
    toggleLoading: (isLoading?: boolean) => TActionReturns,
}

class BookList extends React.Component<IProps>  {
    componentDidMount() {
        const { service, toggleLoading, booksLoaded } = this.props;

        toggleLoading(true);

        service.getBooks()
            .then((data: any) => {
                booksLoaded(data);
                toggleLoading(false);
            });
    };

    render() {
        const { books, isLoading } = this.props;

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

interface IStateProps {
    books: [],
    isLoading: boolean,
    error: {} | null,
}

const mapStateToProps = ({ books, isLoading, error }:IStateProps):IStateProps => ({ books, isLoading, error });

export default compose(
    WithBookStoreService(),
    connect(mapStateToProps, { booksLoaded, toggleLoading }),
)(BookList)