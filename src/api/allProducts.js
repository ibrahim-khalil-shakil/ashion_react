import React, { useEffect, useState } from "react"
import { useCart } from "react-use-cart";

const AllProducts = ({ filteredShopData }) => {
  const { addItem } = useCart();

  return (
    <>
      {filteredShopData && filteredShopData.length > 0 && (
        <div className="row">
          {filteredShopData.map((shop, index) => (
            <div className="col-lg-4 col-md-6" key={shop.id}>
              <div className={`product__item ${shop.tag == 'Sale' ? 'sale' : ''}`}>
                <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${shop.image})` }}>
                  <div className={`label ${shop.tag == 'New' ? 'new' : (shop.tag == 'Out of Stock' ? 'stockout' : '')}`}>{shop.tag}</div>
                  <ul className="product__hover">
                    <li><a href={shop.image} className="image-popup"><span className="arrow_expand"></span></a></li>
                    <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                    <li><a href="#" onClick={() => addItem(shop)}><span className="icon_bag_alt"></span></a></li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6><a href="#">{shop.name}</a></h6>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="product__price">
                    {"$" + shop.price}
                    <span className={`${(shop.old_price !== null && parseFloat(shop.old_price) !== 0.00) ? '' : 'display-hidden'}`}>
                      {(shop.old_price !== null && parseFloat(shop.old_price) !== 0.00) ? "$" + shop.old_price : ""}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-12 text-center">
            <div className="pagination__option">
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#"><i className="fa fa-angle-right"></i></a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AllProducts;