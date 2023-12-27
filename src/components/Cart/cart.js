import React, { useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { useCart } from "react-use-cart";
import { applyCoupon } from "../../api/applyCoupon";

function Cart() {
    const { isEmpty, cartTotal, items, updateItemQuantity, removeItem } = useCart();
    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const [couponError, setCouponError] = useState(null);
    const [discountPercentage, setDiscountPercentage] = useState(0);

    const applyCouponCode = async () => {
        console.log(couponCode)
        try {
            const data = await applyCoupon(couponCode);

            if (data && data.discount_percentage) {
                const couponDiscounts = {};

                items.forEach((item) => {
                    item.coupon_code = 'code';
                    if (item.coupon_code) {
                        if (!couponDiscounts[item.coupon_code]) {
                            couponDiscounts[item.coupon_code] = 0;
                        }
                        const itemDiscount =
                            (item.price * item.quantity * data.discount_percentage) / 100;

                        console.log(`Item: ${item.name}, Coupon: ${item.coupon_code}`);
                        console.log(`Item Discount: $${itemDiscount.toFixed(2)}`);

                        couponDiscounts[item.coupon_code] += itemDiscount;
                        console.log(`Coupon ${item.coupon_code} Total Discount: $${couponDiscounts[item.coupon_code].toFixed(2)}`);
                    }
                });

                const totalDiscount = Object.values(couponDiscounts).reduce(
                    (acc, discount) => acc + discount,
                    0
                );

                console.log('Coupon Discounts:', couponDiscounts);
                console.log('Total Discount Applied:', `$${totalDiscount.toFixed(2)}`);

                setDiscount(totalDiscount);
                setDiscountPercentage(data.discount_percentage); // Set the discount percentage.

            } else {
                // Display an error message if the coupon is not valid.
                setCouponError('Coupon is not valid or does not provide a discount.');
                setDiscount(0); // Reset the discount to 0.
                setDiscountPercentage(0); // Reset the discount percentage to 0.
            }
        } catch (error) {
            console.error(error.message);
            // Handle any API request error here.
        }
    };

    const discountedTotal = cartTotal - discount;

    if (isEmpty) return (
        <>
            <Header /> <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="/"><i className="fa fa-home"></i> Home</a>
                                <span>Shopping cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-5 m-5 text-center"><h1 className="p-5 m-5">Your cart is empty</h1></div>
            <Footer />
        </>
    )

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
                                <span>Shopping cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}

            {/* Shop Cart Section Begin */}
            <section className="shop-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shop__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.map((item) => (
                                            <tr>
                                                <td className="cart__product__item">
                                                    <img src={item.image} width="100px" alt="" />
                                                    <div className="cart__product__item__title">
                                                        <h6>{item.name}</h6>
                                                        <div className="rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="cart__price">{"$" + item.price}</td>
                                                <td className="cart__quantity">
                                                    <div className="pro-qty">
                                                        <button className="btn btn-link" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                                        {item.quantity}
                                                        <button className="btn btn-link" onClick={() => updateItemQuantity(item.id, item.quantity + 1)} > + </button>
                                                    </div>
                                                </td>
                                                <td className="cart__total">{"$" + item.itemTotal.toFixed(2)}</td>
                                                <td className="cart__close"><span className="icon_close" onClick={() => removeItem(item.id)}></span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="cart__btn">
                                <a href="./shop">Continue Shopping</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="cart__btn update__btn">
                                <a href="#"><span className="icon_loading"></span> Update cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="discount__content">
                                <h6>Discount codes</h6>
                                <form onSubmit={(e) => { e.preventDefault(); applyCouponCode(); }}>
                                    <input type="text" placeholder="Enter your coupon code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
                                    <button type="submit" className="site-btn">Apply</button>
                                </form>
                            </div>
                            {discount > 0 && (
                                <div className="applied-discount text-right pr-2">
                                    Coupon Applied. You've Got <span style={{ fontWeight: 'bold', color: 'red' }}>{discountPercentage}%</span> Discount!
                                </div>
                            )}
                            {couponError && (
                                <div className="coupon-error text-right pr-2">
                                    <span className="text-danger">{couponError}</span>
                                </div>
                            )}
                        </div>
                        <div className="col-lg-4 offset-lg-2">
                            <div className="cart__total__procced">
                                <h6>Cart total</h6>
                                <ul>
                                    <li>Subtotal <span>{"$" + cartTotal.toFixed(2)}</span></li>
                                    <li>Discount <span>{"$" + discount.toFixed(2)}</span></li>
                                    <li>Total <span>{"$" + discountedTotal.toFixed(2)}</span></li>
                                </ul>
                                <a href="./checkout" className="primary-btn">Proceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Cart Section End */}

            <Footer />
        </div>
    );
}

export default Cart;