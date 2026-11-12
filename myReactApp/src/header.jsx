import React from "react";

function Header() {
    return (
        <header className="header">
            <img src="/src/assets/react-logo.png" className="nav-log" alt="React logo" />
              <nav>
                <ul className="nav-list">
                    <li className="nav-list-items">Pricing</li>
                    <li className="nav-list-items">About</li>
                    <li className="nav-list-items">Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;