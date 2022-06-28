import "./Menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">
                        Home
                    </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#aboutme">
                        About Me
                    </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#projects">
                        Projects
                    </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#toolsContainer">
                        Tools & Technologies
                    </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">
                        Contact
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default Menu
