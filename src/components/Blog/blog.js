import React, { useState, useEffect } from 'react';
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { blog } from '../../api/blog';

function Blog() {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogData = await blog();
                setBlogData(blogData);
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
                                <span>Blog</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}

            {/* Blog Section Begin */}
            <section className="blog spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            {blogData.slice(0, 3).map((blog, index) => (
                                <div className="blog__item" key={index}>
                                    <div className={`blog__item__pic set-bg ${blog.size == 'Large' ? 'large__item' : ''}`}
                                        style={{ backgroundImage: `url(${blog.image})` }}></div>
                                    <div className="blog__item__text">
                                        <h6><a href="#">{blog.title}</a></h6>
                                        <ul>
                                            <li>by <span>{blog.writer}</span></li>
                                            <li>{blog.date}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            {blogData.slice(3, 7).map((blog, index) => (
                                <div className="blog__item" key={index}>
                                    <div className={`blog__item__pic set-bg ${blog.size == 'Large' ? 'large__item' : ''}`}
                                        style={{ backgroundImage: `url(${blog.image})` }}></div>
                                    <div className="blog__item__text">
                                        <h6><a href="#">{blog.title}</a></h6>
                                        <ul>
                                            <li>by <span>{blog.writer}</span></li>
                                            <li>{blog.date}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            {blogData.slice(7, 10).map((blog, index) => (
                                <div className="blog__item" key={index}>
                                    <div className={`blog__item__pic set-bg ${blog.size == 'Large' ? 'large__item' : ''}`}
                                        style={{ backgroundImage: `url(${blog.image})` }}></div>
                                    <div className="blog__item__text">
                                        <h6><a href="#">{blog.title}</a></h6>
                                        <ul>
                                            <li>by <span>{blog.writer}</span></li>
                                            <li>{blog.date}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-12 text-center">
                            <a href="#" className="primary-btn load-btn">Load more posts</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog Section End */}

            <Footer />
        </div>
    );
}

export default Blog;