import React, { useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";

export default function ThankYou() {
    return (
        <>
            <Header />
            <div className="p-5 m-5">
                <div className="text-center ">
                    <h1 className="fw-bold ">
                        Thank You <br/> for placing your Order
                    </h1>
                </div>
            </div>
            <Footer />
        </>

    )
}
