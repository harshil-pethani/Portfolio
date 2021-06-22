import './Topbar.scss';

const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"topbar " + ( menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        HP
                    </a>
                    <div className="itemContainer">
                        <i className="icon fas fa-user"></i>
                        <span>
                            +91 8530321640
                        </span>
                    </div>
                    <div className="itemContainer">
                        <i className="icon far fa-envelope"></i>
                        <span>
                            harshilpethani8990@gmail.com
                        </span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
