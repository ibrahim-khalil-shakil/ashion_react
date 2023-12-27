import React, { useState, useEffect } from 'react';
import Header from "../Header/header"
import Footer from "../Footer/footer";
import { product } from "../../api/product";
import AllProductsHome from '../../api/allProductsHome';

function Home() {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData = await product();
                setProductData(productData);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Header />

            {/* Categories Section Begin */}
            <section className="categories">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 p-0 ">
                            <div className="categories__item categories__large__item set-bg m-0"
                                style={{ backgroundImage: 'url("img/categories/category-1.jpg")' }}>
                                <div className="categories__text">
                                    <h1>Your Fashion Journey Begins Here</h1>
                                    <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore
                                        edolore magna aliquapendisse ultrices gravida.</p>
                                    <a href="#">Shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Categories Section End */}

            {/* Product Section Begin */}
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="section-title">
                                <h4>New product</h4>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <ul className="filter__controls">
                                <li className="active" data-filter="*">All</li>
                                <li data-filter=".women">Women's</li>
                                <li data-filter=".men">Men's</li>
                                <li data-filter=".kid">Kid's</li>
                                <li data-filter=".accessories">Accessories</li>
                                <li data-filter=".cosmetic">Cosmetics</li>
                            </ul>
                        </div>
                    </div>
                    <AllProductsHome/>
                </div>
            </section>

            {/* Banner Section start */}
            <section className="banner banner-background">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-8 m-auto">
                            <div id="bannerCarousel" className="banner__slider carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="banner__item">
                                            <div className="banner__text">
                                                <span>The Chloe Collection</span>
                                                <h1>The Project Jacket</h1>
                                                <a href="#">Shop now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="banner__item">
                                            <div className="banner__text">
                                                <span>The Chloe Collection</span>
                                                <h1>The Project Hoodie</h1>
                                                <a href="#">Shop now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="banner__item">
                                            <div className="banner__text">
                                                <span>The Chloe Collection</span>
                                                <h1>The Project Shirt</h1>
                                                <a href="#">Shop now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#bannerCarousel" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#bannerCarousel" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                                <div className="mt-5">
                                    <ol className="carousel-indicators">
                                        <li data-target="#bannerCarousel" data-slide-to="0" className="active"></li>
                                        <li data-target="#bannerCarousel" data-slide-to="1"></li>
                                        <li data-target="#bannerCarousel" data-slide-to="2"></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner Section End */}

            {/* Trend Section Begin */}
            <section className="trend spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="trend__content">
                                <div className="section-title">
                                    <h4>Hot Trend</h4>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src="img/trend/ht-1.jpg" alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Chain bucket bag</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src="img/trend/ht-2.jpg" alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Pendant earrings</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src="img/trend/ht-3.jpg" alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Cotton T-Shirt</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="trend__content">
                                <div className="section-title">
                                    <h4>Best seller</h4>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src="img/trend/bs-1.jpg" alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Cotton T-Shirt</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src="img/trend/bs-2.jpg" alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Zip-pockets pebbled tote <br />briefcase</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src="img/trend/bs-3.jpg" alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Round leather bag</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="trend__content">
                                <div className="section-title">
                                    <h4>Feature</h4>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src="img/trend/f-1.jpg" alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Bow wrap skirt</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src="img/trend/f-2.jpg" alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Metallic earrings</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src="img/trend/f-3.jpg" alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Flap cross-body bag</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Trend Section End */}

            {/* Discount Section Begin */}
            <section className="discount">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="discount__pic">
                                <img src="img/discount.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="discount__text">
                                <div className="discount__text__title">
                                    <span>Discount</span>
                                    <h2>Summer 2019</h2>
                                    <h5><span>Sale</span> 50%</h5>
                                </div>
                                <div className="discount__countdown" id="countdown-time">
                                    <div className="countdown__item">
                                        <span>22</span>
                                        <p>Days</p>
                                    </div>
                                    <div className="countdown__item">
                                        <span>18</span>
                                        <p>Hour</p>
                                    </div>
                                    <div className="countdown__item">
                                        <span>46</span>
                                        <p>Min</p>
                                    </div>
                                    <div className="countdown__item">
                                        <span>05</span>
                                        <p>Sec</p>
                                    </div>
                                </div>
                                <a href="#">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Discount Section End */}

            {/* Services Section Begin */}
            <section className="services spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-car"></i>
                                <h6>Free Shipping</h6>
                                <p>For all oder over $99</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-money"></i>
                                <h6>Money Back Guarantee</h6>
                                <p>If good have Problems</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-support"></i>
                                <h6>Online Support 24/7</h6>
                                <p>Dedicated support</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-headphones"></i>
                                <h6>Payment Secure</h6>
                                <p>100% secure payment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services Section End */}

            <Footer />
        </div>
    );
}

export default Home;