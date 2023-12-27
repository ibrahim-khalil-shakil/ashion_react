import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "react-use-cart";
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/elegant-icons.css';
import './css/magnific-popup.css';
import './css/style.css';
import { logout } from "../Admin/Auth/auth";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const [isSignedIn, setIsSignedIn] = useState(() => {
        const userLogged = localStorage.getItem("access_token");
        return userLogged || false;
    });

    const signout = () => {
        setIsSignedIn(false);
        logout();
        navigate("/");
    }

    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { totalUniqueItems } = useCart();

    const menuItems = [
        { text: "Home", path: "/" },
        { text: "Blogs", path: "/blog" },
        { text: "Shop", path: "/shop" },
        {
            text: "Pages",
            path: "#",
            submenu: [
                { text: "Product Details", path: "/productDetails" },
                { text: "Blog Details", path: "/blogDetails" },
                { text: "Message List", path: "/messageList" },
            ],
        },
        { text: "Offers", path: "/offer" },
        { text: "Cart", path: "/cart" },
        { text: "Checkout", path: "/checkout" },
        { text: "Contact", path: "/contact" },
    ];

    return (
        <div>
            {/* Header Section */}
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-2 col-lg-1">
                            <div className="header__logo">
                                <a href="/"><img src="img/logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-8">
                            <nav className={`header__menu ${isMenuOpen ? "active" : ""}`}>
                                <ul>
                                    {menuItems.map((item) => (
                                        <li key={item.path} className={isMenuItemActive(location.pathname, item) ? "active" : ""}>
                                            <Link to={item.path}>{item.text}</Link>
                                            {item.submenu && (
                                                <ul className="dropdown">
                                                    {item.submenu.map((subitem) => (
                                                        <li key={subitem.path} className={location.pathname === subitem.path ? "active" : ""}>
                                                            <Link to={subitem.path}>{subitem.text}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="row">
                                <div className="col-lg-8 p-0 m-0">
                                    <div className="header__right">
                                        {isSignedIn ? (
                                            <div className="header__right__auth">
                                                <button className="btn p-0 mx-1">
                                                    <a href="#" onClick={signout}>
                                                        Sign Out
                                                    </a>
                                                </button>
                                                <span> | </span>
                                                <button className="btn p-0 mx-1">
                                                    <a href="./dashboard">
                                                        Dashboard
                                                    </a>
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="header__right__auth">
                                                <button className="btn p-0 mx-1">
                                                    <a href="./signin">
                                                        Sign In
                                                    </a>
                                                </button>
                                                <span> | </span>
                                                <button className="btn p-0 mx-1">
                                                    <a href="./register">
                                                        Registration
                                                    </a>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-4 p-0 m-0">
                                    <div className="header__right">
                                        <ul className="header__right__widget">
                                            <li><span className="icon_search search-switch"></span></li>
                                            <li><a href="#"><span className="icon_heart_alt"></span>
                                                <div className="tip">2</div>
                                            </a></li>
                                            <li><a href="./cart"><span className="icon_bag_alt"></span>
                                                <div className="tip">{totalUniqueItems}</div>
                                            </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
        </div>
    );
}

function isMenuItemActive(currentPath, menuItem) {
    if (currentPath === menuItem.path || (menuItem.submenu && menuItem.submenu.some((subitem) => currentPath === subitem.path))) {
        return true;
    }
    return false;
}

export default Header;
