import React from "react";
import { connect } from "react-redux";
import { fetchBooks, addToOrder } from "../../actions"

import { WithBookStoreService } from "../HOC"

import BookListItem from "../BookListItem";

import { compose } from "../../utils"
import Spinner from "../Spinner";
import { bindActionCreators } from "redux";

interface IProps {
    books: [],
    onAddToOrder: (id: number) => void,
}

const BookList:React.SFC<IProps> = ({ books, onAddToOrder }) => {
    const bookList = books.map((book:any) => {
        return (
            <div
                className="book-list__item mb-4"
                key={book.id}
            >
                <BookListItem book={book} onAddToOrder={() => {onAddToOrder(book.id)}} />
            </div>
        )
    });

    return (
        <div className="book-list">
            {bookList}
        </div>
    )
};

interface IPropsContainer {
    books: [],
    isLoading: boolean,
    fetchBooks: () => void,
    addToOrder: (id: number) => void,
}

class BookListContainer extends React.Component<IPropsContainer>  {
    componentDidMount() {
        this.props.fetchBooks();
    };

    render() {
        const { books, isLoading } = this.props;

        if (isLoading) {
            return <Spinner />;
        }

        return <BookList books={books} onAddToOrder={(id) => {this.props.addToOrder(id)}} />;
    }
}

const mapStateToProps = ({booksList: {books, isLoading}}: {booksList: {books: Array<{}>, isLoading: boolean}}) => ({books, isLoading});

const mapDispatchToProps = (dispatch: any, { service }: any) => {
    return bindActionCreators(
        {
            fetchBooks: fetchBooks(service),
            addToOrder: addToOrder,
        },
        dispatch
    );
};

export default compose(
    WithBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer)