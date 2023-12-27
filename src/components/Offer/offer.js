import React, { useState, useEffect } from 'react';
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { popularOffer } from "../../api/popularOffer";
import { limitedOffer } from '../../api/limitedOffer';
import { trendingOffer } from '../../api/trendingOffer';


function Offer() {
    const [popularOfferData, setPopularOfferData] = useState([]);
    const [limitedOfferData, setLimitedOfferData] = useState([]);
    const [trendingOfferData, setTrendingOfferData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const popularData = await popularOffer();
                setPopularOfferData(popularData);

                const limitedData = await limitedOffer();
                setLimitedOfferData(limitedData);

                const trendingData = await trendingOffer();
                setTrendingOfferData(trendingData);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Header />

            {/* Breadcrumb Begin */}
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="/"><i className="fa fa-home"></i> Home</a>
                                <span>Offers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}

            {/* Offer Section Begin */}
            <section className="trend spad">
                <div className="container">

                    {/* Popular */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center pt-0 pb-4">
                                <h4>Most Popular</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row horizontal-items ">
                        {popularOfferData.map((popular, index) => (
                            <div className="col-lg-4 col-md-4 col-sm-6 d-flex align-items-center justify-content-center" key={index}>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={popular.image} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>{popular.name}</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ {popular.price}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* <div className="col-lg-4 col-md-4 col-sm-6">
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
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
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
                        </div> */}
                    </div>

                    {/* Limited */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center pb-4">
                                <h4>Limited Stock</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row horizontal-items">
                        {limitedOfferData.map((limited, index) => (
                            <div className="col-lg-4 col-md-4 col-sm-6 d-flex align-items-center justify-content-center" key={index}>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={limited.image} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>{limited.name}</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ {limited.price}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* <div className="col-lg-4 col-md-4 col-sm-6">
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
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
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
                        </div> */}
                    </div>

                    {/* Trending */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center pb-4">
                                <h4>Trending</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row horizontal-items">
                        {trendingOfferData.map((trending, index) => (
                            <div className="col-lg-4 col-md-4 col-sm-6 d-flex align-items-center justify-content-center" key={index}>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={trending.image} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>{trending.name}</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ {trending.price}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* <div className="col-lg-4 col-md-4 col-sm-6">
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
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
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
                        </div> */}
                    </div>
                </div>

            </section>
            {/* Offer Section End */}

            <Footer />
        </div>
    );
}

export default Offer;