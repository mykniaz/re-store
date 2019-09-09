import React from "react";

interface IProps {
    book: {
        id: number,
        title: string,
        author: string,
    }
}

const BookListItem = ({book: {title, author}}: IProps) =>  {
    return (
        <div className="card book-list-item">
            <div className="card-body">
                <div className="card-title">
                    {title}
                </div>
                <div className="card-text">
                    {author}
                </div>
            </div>
        </div>
    )
};

export default BookListItem;