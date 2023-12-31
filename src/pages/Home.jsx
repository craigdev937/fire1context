import React from "react";
import { BookList } from "../components/BookList";
import { BookForm } from "../components/BookForm";

export const Home = () => {
    const [books, setBooks] = React.useState([
        { title: "the name of the wind", id: 1 },
        { title: "the dragon reborn", id: 2 },
        { title: "the final empire", id: 3 },
        { title: "the way of kings", id: 4 },
    ])

    return (
        <React.Fragment>
            {books && <BookList books={books} />}
            <BookForm />
        </React.Fragment>
    );
};


