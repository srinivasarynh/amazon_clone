import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2022/GWherotater/Aug/Shirts/PC_2x._CB630564265_.jpg" alt="" />
        <div className="home__row">
        <Product 
        id="1"
        title="2022 Apple iPad Air with Apple M1 Chip (10.9-inch/27.69 cm, Wi-Fi + Cellular, 64GB) - Purple (5th Generation)"
        price={999}
        rating={5}
        image="https://images-eu.ssl-images-amazon.com/images/I/31gfdFpnbXL._SY445_SX342_QL70_FMwebp_.jpg" />

        <Product 
        id="2"
        title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD) - Space Grey"
        price={999}
        rating={5}
        image="https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg" />
        </div>

        <div className="home__row">
        <Product 
        id="3"
        title="2022 Apple iPad Air with Apple M1 Chip (10.9-inch/27.69 cm, Wi-Fi + Cellular, 64GB) - Purple (5th Generation)"
        price={999}
        rating={5}
        image="https://images-eu.ssl-images-amazon.com/images/I/31gfdFpnbXL._SY445_SX342_QL70_FMwebp_.jpg" />

        <Product 
        id="123"
        title="Apple Watch Series 7 (GPS + Cellular, 45mm) - Blue Aluminium Case with Abyss Blue Sport Band - Regular"
        price={999}
        rating={5}
        image="https://m.media-amazon.com/images/I/71SFsTBSJgL._SX679_.jpg" />

        <Product 
        id="13"
        title="2022 Apple iPad Air with Apple M1 Chip (10.9-inch/27.69 cm, Wi-Fi + Cellular, 64GB) - Purple (5th Generation)"
        price={999}
        rating={5}
        image="https://images-eu.ssl-images-amazon.com/images/I/31gfdFpnbXL._SY445_SX342_QL70_FMwebp_.jpg" />
        </div>

        <div className="home__row">
        <Product 
        id="23"
        title="2022 Apple iPad Air with Apple M1 Chip (10.9-inch/27.69 cm, Wi-Fi + Cellular, 64GB) - Purple (5th Generation)"
        price={999}
        rating={5}
        image="https://images-eu.ssl-images-amazon.com/images/I/31gfdFpnbXL._SY445_SX342_QL70_FMwebp_.jpg" />

        <Product 
        id="223"
        title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD) - Space Grey"
        price={999}
        rating={5}
        image="https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg" />
        </div>
        <div className="home__row">
        <Product 
        id="233"
        title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD) - Space Grey"
        price={999}
        rating={5}
        image="https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg" />
        </div>
        </div>
    )
}

export default Home;