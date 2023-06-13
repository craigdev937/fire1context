import React from "react";

export const Register = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
    };

    return (
        <React.Fragment>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>email:</span>
                    <input 
                        required
                        type="text" 
                        value={email}
                        onChange={
                            (event) => setEmail(event.target.value)
                        }
                    />
                </label>
                <label>
                    <span>password:</span>
                    <input 
                        required
                        type="text" 
                        value={password}
                        onChange={
                            (event) => setPassword(event.target.value)
                        }
                    />
                </label>
                <button>Register</button>
            </form>
        </React.Fragment>
    );
};


