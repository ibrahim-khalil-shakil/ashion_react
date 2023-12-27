import React, { useEffect, useState } from "react"
import { useCart } from "react-use-cart";

const AllProductsHome = () => {
  const [productData, setProducts] = useState([])
  const { addItem } = useCart();
  const fetchProductsData = () => {
    fetch("http://localhost/ashion_ci/product.php").then(response => {
      return response.json()
    }).then(data => {
      setProducts(data)
    })
  }
  useEffect(() => {
    fetchProductsData()
  }, []);

  return (
    <>
      {productData.length > 0 && (
        <div className="row property__gallery">
          {productData.map((product, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic" key={product.id}>
              <div className={`product__item ${product.tag == 'Sale' ? 'sale' : ''}`}>
                <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${product.image})` }}>
                  <div className={`label ${product.tag == 'New' ? 'new' : (product.tag == 'Out of Stock' ? 'stockout' : '')}`}>{product.tag}</div>
                  <ul className="product__hover">
                    <li><a href={product.image} className="image-popup"><span
                      className="arrow_expand"></span></a></li>
                    <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                    <li><a href="#" onClick={() => addItem(product)}><span className="icon_bag_alt"></span></a></li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6><a href="#">{product.name}</a></h6>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="product__price">
                    {"$" + product.price} <span className={`${product.old_price !== null ? '' : 'display-hidden'}`}>
                      {product.old_price !== null ? "$" + product.old_price : ""}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default AllProductsHome;