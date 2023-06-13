import React from "react";

export const BookForm = () => {
    const [newBook, setNewBook] = React.useState("");

    const handleChange = (event) => {
        setNewBook(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(newBook);
        setNewBook("");
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Add a new book title:</span>
                    <input 
                        required
                        type="text" 
                        value={newBook}
                        onChange={handleChange}
                    />
                </label>
                <button>Add</button>
            </form>
        </React.Fragment>
    );
};


