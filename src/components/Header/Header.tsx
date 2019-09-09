import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <header className="navbar navbar-dark bg-dark mb-4">
        <Link className="navbar-brand mr-2" to="/" aria-label="ReStore">ReStore</Link>
        <div>
            <span className="text-light">added 3 items (20$)</span>
            <Link to="/order" className="btn btn-primary ml-4" type="submit">Buy</Link>
        </div>
    </header>
);

export default Header;