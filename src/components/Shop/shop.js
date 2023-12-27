import React, { useState, useEffect } from 'react';
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { shop } from '../../api/shop';
import AllProducts from '../../api/allProducts';
import './shop.css';

function Shop() {
    const [shopData, setShopData] = useState([]);
    const [categories, setCategories] = useState([]); // State to store the categories
    const [selectedCategory, setSelectedCategory] = useState(null); // State to store the selected category
    const [filteredShopData, setFilteredShopData] = useState([]); // State to store filtered products


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch products based on the selected category
                const products = await shop(selectedCategory);
                setShopData(products);

                // Fetch categories
                const categoriesData = await fetchCategories();
                setCategories(categoriesData);

                // Update filtered products based on the selected category
                if (selectedCategory) {
                    const filteredProducts = products.filter(product => product.category_id === selectedCategory);
                    setFilteredShopData(filteredProducts);
                } else {
                    // If no category is selected, show all products
                    setFilteredShopData(products);
                }
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchData();
    }, [selectedCategory]);

    // Fetch categories from your API
    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost/ashion_ci/crud/index_category.php');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data.data; // Assuming your data is in the "data" property of the response
        } catch (error) {
            console.error('Error fetching categories:', error);
            return [];
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category); // Update the selected category
    };

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
                                <span>Shop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}

            {/* Shop Section Begin */}
            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="shop__sidebar">
                                <div className="sidebar__categories">
                                    <div className="section-title">
                                        <h4>Filter By Categories</h4>
                                        <button onClick={() => handleCategoryChange(null)} className="btn-cat my-2 {!selectedCategory ? 'active' : ''}">All</button>
                                        {/* Render categories dynamically */}
                                        {categories.map((category) => (
                                            <button
                                                key={category.id}
                                                onClick={() => handleCategoryChange(category.id)}
                                                className=" btn-cat my-2 {selectedCategory === category.id ? 'active' : ''}"
                                            >
                                                {category.name}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="categories__accordion">
                                        <div className="accordion" id="accordionExample">
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseOne">Women</a>
                                                </div>
                                                <div id="collapseOne" className="collapse" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <ul>
                                                            <li><a href="#">Coats</a></li>
                                                            <li><a href="#">Jackets</a></li>
                                                            <li><a href="#">Dresses</a></li>
                                                            <li><a href="#">Shirts</a></li>
                                                            <li><a href="#">T-shirts</a></li>
                                                            <li><a href="#">Jeans</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseTwo">Men</a>
                                                </div>
                                                <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <ul>
                                                            <li><a href="#">Coats</a></li>
                                                            <li><a href="#">Jackets</a></li>
                                                            <li><a href="#">Dresses</a></li>
                                                            <li><a href="#">Shirts</a></li>
                                                            <li><a href="#">T-shirts</a></li>
                                                            <li><a href="#">Jeans</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseThree">Kids</a>
                                                </div>
                                                <div id="collapseThree" className="collapse" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <ul>
                                                            <li><a href="#">Coats</a></li>
                                                            <li><a href="#">Jackets</a></li>
                                                            <li><a href="#">Dresses</a></li>
                                                            <li><a href="#">Shirts</a></li>
                                                            <li><a href="#">T-shirts</a></li>
                                                            <li><a href="#">Jeans</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseFour">Accessories</a>
                                                </div>
                                                <div id="collapseFour" className="collapse" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <ul>
                                                            <li><a href="#">Coats</a></li>
                                                            <li><a href="#">Jackets</a></li>
                                                            <li><a href="#">Dresses</a></li>
                                                            <li><a href="#">Shirts</a></li>
                                                            <li><a href="#">T-shirts</a></li>
                                                            <li><a href="#">Jeans</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseFive">Cosmetic</a>
                                                </div>
                                                <div id="collapseFive" className="collapse" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <ul>
                                                            <li><a href="#">Coats</a></li>
                                                            <li><a href="#">Jackets</a></li>
                                                            <li><a href="#">Dresses</a></li>
                                                            <li><a href="#">Shirts</a></li>
                                                            <li><a href="#">T-shirts</a></li>
                                                            <li><a href="#">Jeans</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar__filter">
                                    <div className="section-title">
                                        <h4>Shop by price</h4>
                                    </div>
                                    <div className="filter-range-wrap">
                                        <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                            data-min="33" data-max="99"></div>
                                        <div className="range-slider">
                                            <div className="price-input">
                                                <p>Price:</p>
                                                <input type="text" id="minamount" />
                                                <input type="text" id="maxamount" />
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#">Filter</a>
                                </div>
                                <div className="sidebar__sizes">
                                    <div className="section-title">
                                        <h4>Shop by size</h4>
                                    </div>
                                    <div className="size__list">
                                        <label htmlFor="xxs">
                                            xxs
                                            <input type="checkbox" id="xxs" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="xs">
                                            xs
                                            <input type="checkbox" id="xs" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="xss">
                                            xs-s
                                            <input type="checkbox" id="xss" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="s">
                                            s
                                            <input type="checkbox" id="s" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="m">
                                            m
                                            <input type="checkbox" id="m" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="ml">
                                            m-l
                                            <input type="checkbox" id="ml" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="l">
                                            l
                                            <input type="checkbox" id="l" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="xl">
                                            xl
                                            <input type="checkbox" id="xl" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="sidebar__color">
                                    <div className="section-title">
                                        <h4>Shop by size</h4>
                                    </div>
                                    <div className="size__list color__list">
                                        <label htmlFor="black">
                                            Blacks
                                            <input type="checkbox" id="black" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="whites">
                                            Whites
                                            <input type="checkbox" id="whites" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="reds">
                                            Reds
                                            <input type="checkbox" id="reds" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="greys">
                                            Greys
                                            <input type="checkbox" id="greys" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="blues">
                                            Blues
                                            <input type="checkbox" id="blues" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="beige">
                                            Beige Tones
                                            <input type="checkbox" id="beige" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="greens">
                                            Greens
                                            <input type="checkbox" id="greens" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="yellows">
                                            Yellows
                                            <input type="checkbox" id="yellows" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <AllProducts filteredShopData={filteredShopData} />
                        </div>
                    </div>

                </div>
            </section>
            {/* Shop Section End */}

            <Footer />
        </div>
    );
}

export default Shop;