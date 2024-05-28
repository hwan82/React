import './Navbar.css';
function Navbar() {
    return (
        <div className="Navbar">
            <div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/test">TestHome</a>
                    </li>
                    <li>
                        <a href="/create">Create</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar;