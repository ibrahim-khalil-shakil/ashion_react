import React, { useState, useEffect } from 'react';
import { instagram } from '../../api/instagram';

function Footer() {
    const [instaData, setInstaData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const instaData = await instagram();
                setInstaData(instaData);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {/* Instagram Begin */}
            <div className="instagram">
                <div className="container-fluid">
                    <div className="row">
                        {instaData.map((instagram, index) => (
                            <div className="col-lg-2 col-md-4 col-sm-4 p-0" key={index}>
                                <div className="instagram__item set-bg" style={{ backgroundImage: `url(${instagram.image})` }}>
                                    <div className="instagram__text">
                                        <i className={instagram.icon}></i>
                                        <a href="#">{instagram.name}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Instagram End */}

            {/* Footer Section Begin */}
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-7">
                            <div className="footer__about">
                                <div className="footer__logo">
                                    <a href="/"><img src="img/logo.png" alt="" /></a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    cilisis.</p>
                                <div className="footer__payment">
                                    <a href="#"><img src="img/payment/payment-1.png" alt="" /></a>
                                    <a href="#"><img src="img/payment/payment-2.png" alt="" /></a>
                                    <a href="#"><img src="img/payment/payment-3.png" alt="" /></a>
                                    <a href="#"><img src="img/payment/payment-4.png" alt="" /></a>
                                    <a href="#"><img src="img/payment/payment-5.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-5">
                            <div className="footer__widget">
                                <h6>Quick links</h6>
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Blogs</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="footer__widget">
                                <h6>Account</h6>
                                <ul>
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Orders Tracking</a></li>
                                    <li><a href="#">Checkout</a></li>
                                    <li><a href="#">Wishlist</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-8">
                            <div className="footer__newslatter">
                                <h6>NEWSLETTER</h6>
                                <form action="#">
                                    <input type="text" placeholder="Email" />
                                    <button type="submit" className="site-btn">Subscribe</button>
                                </form>
                                <div className="footer__social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            <div className="footer__copyright__text">
                                <p>Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script> All rights reserved | This
                                    template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a
                                        href="/" target="_blank">Ibrahim Khalil</a> <span>: WDPF - 54</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Section End */}

            {/* Search Begin */}
            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch">+</div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
            {/* Search End */}
        </div>
    );
}

export default Footer;