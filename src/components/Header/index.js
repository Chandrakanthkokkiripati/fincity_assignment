import { useState, React } from "react";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import "./index.css";

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(true);
  // console.log(showMenu)

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-large-container">
          <h1 className="nav-heading">Madelyn Torff</h1>
          <ul className="nav-menu">
            <a href="#aboutSection" className="nav-menu-item">
              <li>About</li>
            </a>

            <a href="#projectsSection" className="nav-menu-item">
              <li>Projects</li>
            </a>

            <a href="#contactsSection" className="nav-menu-item">
              Contacts
            </a>
          </ul>
        </div>
        <div className="navbar-mobile-container">
          <h1 className="nav-heading">Madelyn Torff</h1>
          <div>
            {showMenu && (
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="menu-button"
                type="button"
              >
                <MdMenu size={20} />
              </button>
            )}
            {!showMenu && (
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="menu-button"
                type="button"
              >
                <IoMdClose size={20} />
              </button>
            )}
          </div>
        </div>
        {showMenu ? null : (
          <ul className="nav-menu-list">
            <hr className="horizontal-line"/>
            <li>
              <a className="nav-menu-item" href="#aboutSection">
                About
              </a>
            </li>
            <hr className="horizontal-line"/>
            <li>
              <a className="nav-menu-item" href="#projectsSection">
                Projects
              </a>
            </li>
            <hr className="horizontal-line"/>
            <li>
              <a className="nav-menu-item" href="#contactsSection">
                Contacts
              </a>
            </li>
            <hr className="horizontal-line"/>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
