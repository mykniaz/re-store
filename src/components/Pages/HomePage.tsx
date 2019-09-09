import React from "react";
import BookList from "../BookList";

const HomePage = () => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <h1 className="h1">
                        List of books
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <BookList />
                </div>
            </div>
        </div>
    )
};

export default HomePage;