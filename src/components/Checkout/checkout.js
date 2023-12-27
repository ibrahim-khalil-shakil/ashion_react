import React, { useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

function Checkout() {
    const { items, cartTotal, emptyCart } = useCart();
   
    const discount = 0; // Define discount with an initial value of 0
    const discountedTotal = cartTotal - discount;

    const [billingInfo, setBillingInfo] = useState({
        firstName: "",
        lastName: "",
        country: "",
        address: "",
        townCity: "",
        countryState: "",
        postcodeZip: "",
        phone: "",
        email: "",
        createAccount: false,
        accountPassword: "",
        noteAboutOrder: false,
        orderNotes: "",
    });
    const [paymentMethods, setPaymentMethods] = useState({
        createAccount: false,
        chequePayment: false,
        paypal: false,
    });
    const handleBillingInfoChange = (e) => {
        const { name, value, type, checked } = e.target;
        setBillingInfo((prevInfo) => ({
            ...prevInfo,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    const handlePaymentMethodChange = (e) => {
        const { id, checked } = e.target;
        setPaymentMethods((prevMethods) => ({
            ...prevMethods,
            [id]: checked,
        }));
    };
    const placeOrder = (e) => {
        // e.preventDefault();
        // Implement order placement logic here.
        // I want to send the order details to a server, save them to a database, etc.
        // I also want to clear the cart after a successful order placement.
        // For example:
        // clearCart();
        // redirectToOrderConfirmationPage();
        emptyCart();
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
                                <span>Checkout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}

            {/* Checkout Section Begin */}
            <section className="checkout spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h6 className="coupon__link"><span className="icon_tag_alt"></span> <a href="#">Have a coupon?</a> Click
                                here to enter your code.</h6>
                        </div>
                    </div>
                    <form action="#" className="checkout__form">
                        <div className="row">
                            <div className="col-lg-7">
                                <h5>Billing detail</h5>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="checkout__form__input">
                                            <p>First Name <span>*</span></p>
                                            <input type="text" name="firstName" value={billingInfo.firstName} onChange={handleBillingInfoChange} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="checkout__form__input">
                                            <p>Last Name <span>*</span></p>
                                            <input type="text" name="lastName" value={billingInfo.lastName} onChange={handleBillingInfoChange} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="checkout__form__input">
                                            <p>Country <span>*</span></p>
                                            <input type="text" name="country" value={billingInfo.country} onChange={handleBillingInfoChange} />
                                        </div>
                                        <div className="checkout__form__input">
                                            <p>Address <span>*</span></p>
                                            <input type="text" placeholder="Street Address" name="address" value={billingInfo.address} onChange={handleBillingInfoChange} />
                                            <input type="text" placeholder="Apartment. suite, unite ect ( optinal )" name="address" value={billingInfo.address} onChange={handleBillingInfoChange} />
                                        </div>
                                        <div className="checkout__form__input">
                                            <p>Town/City <span>*</span></p>
                                            <input type="text" name="townCity" value={billingInfo.townCity} onChange={handleBillingInfoChange} />
                                        </div>
                                        <div className="checkout__form__input">
                                            <p>Country/State <span>*</span></p>
                                            <input type="text" name="countryState" value={billingInfo.countryState} onChange={handleBillingInfoChange} />
                                        </div>
                                        <div className="checkout__form__input">
                                            <p>Postcode/Zip <span>*</span></p>
                                            <input type="text" name="postcodeZip" value={billingInfo.postcodeZip} onChange={handleBillingInfoChange} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="checkout__form__input">
                                            <p>Phone <span>*</span></p>
                                            <input type="text" name="phone" value={billingInfo.phone} onChange={handleBillingInfoChange} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="checkout__form__input">
                                            <p>Email <span>*</span></p>
                                            <input type="text" name="email" value={billingInfo.email} onChange={handleBillingInfoChange} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="checkout__form__checkbox">
                                            <label htmlFor="createAccount">
                                                Create an acount?
                                                <input type="checkbox" id="createAccount" name="createAccount" checked={billingInfo.createAccount} onChange={handleBillingInfoChange} />
                                                <span className="checkmark"></span>
                                            </label>
                                            <p>Create am acount by entering the information below. If you are a returing
                                                customer login at the <br />top of the page</p>
                                        </div>
                                        {billingInfo.createAccount && (
                                            <>
                                                <div className="checkout__form__input">
                                                    <p>Account Password <span>*</span></p>
                                                    <input type="password" name="accountPassword" value={billingInfo.accountPassword} onChange={handleBillingInfoChange} />
                                                </div>
                                            </>
                                        )}
                                        <div className="checkout__form__checkbox">
                                            <label htmlFor="noteAboutOrder">
                                                Note about your order, e.g., special note for delivery
                                                <input type="checkbox" id="noteAboutOrder" name="noteAboutOrder" checked={billingInfo.noteAboutOrder} onChange={handleBillingInfoChange} />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        {billingInfo.noteAboutOrder && (
                                            <>
                                                <div className="checkout__form__input">
                                                    <p>Order notes <span>*</span></p>
                                                    <input type="text" name="orderNotes" value={billingInfo.orderNotes} onChange={handleBillingInfoChange} placeholder="Note about your order, e.g., special note for delivery"
                                                    />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="checkout__order">
                                    <h5>Your order</h5>
                                    <div className="checkout__order__product">
                                        <table className="w-100 table">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th className="text-center">Price</th>
                                                    <th className="text-center">Quantity</th>
                                                    <th className="text-right">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {items.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{item.name}</td>
                                                        <td className="text-center">
                                                            {typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : `$${item.price}`}
                                                        </td >
                                                        <td className="text-center"> {item.quantity}</td>
                                                        <td className="text-right">
                                                            {typeof item.itemTotal === 'number' ? `$${item.itemTotal.toFixed(2)}` : `${item.itemTotal}`}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="checkout__order__total">
                                        <ul>
                                            <li>Subtotal <span>{"$" + cartTotal.toFixed(2)}</span></li>
                                            <li>Discount <span>{"$" + discount.toFixed(2)}</span></li>
                                            <li>Total <span>{"$" + discountedTotal.toFixed(2)}</span></li>
                                        </ul>
                                    </div>
                                    <div className="checkout__order__widget">
                                        <label htmlFor="o-acc">
                                            Create an account?
                                            <input type="checkbox" id="o-acc" checked={paymentMethods.createAccount} onChange={handlePaymentMethodChange} />
                                            <span className="checkmark"></span>
                                        </label>
                                        <p>Create am acount by entering the information below. If you are a returing customer login at the top of the page.</p>
                                        <label htmlFor="check-payment">
                                            Cheque payment
                                            <input type="checkbox" id="check-payment" checked={paymentMethods.chequePayment} onChange={handlePaymentMethodChange} />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="paypal">
                                            PayPal
                                            <input type="checkbox" id="paypal" checked={paymentMethods.paypal} onChange={handlePaymentMethodChange} />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <Link to="/thankYou">
                                        <button type="submit" className="site-btn" onClick={placeOrder}>
                                            Place Order
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            {/* Checkout Section End */}

            <Footer />
        </div>
    );
}

export default Checkout; 