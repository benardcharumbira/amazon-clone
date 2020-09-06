import React from "react";
import Header from "../Header/Header";
import Product from "../Product/Product";

import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        {/* Product id, title, price, rating, image */}
        <div className="home__row">
          <Product
            id="1"
            title="Midnight sun"
            price={29}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81j8pE4PWXL.__BG0,0,0,0_FMpng_AC_SY220_.jpg"
          />
          <Product
            id="2"
            title="Amazon Basics Nylon Braided Lightning to USB A Cable, MFi Certified Apple iPhone Charger, Dark Gray, 6-Foot - Pack of 10"
            price={75}
            rating={4}
            image="https://m.media-amazon.com/images/I/71p11135VSL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Amazon Basics Air-Circulator 3 Speed Small Room Floor Fan"
            price={19}
            rating={3}
            image="https://m.media-amazon.com/images/I/91pOLl2YUsL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="4"
            title="Dual Arm Monitor Stand - Lift Engine Arm Mount, Aluminum - Silver"
            price={169}
            rating={5}
            image="https://m.media-amazon.com/images/I/71PyeB2baxL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="5"
            title="Racing Style Office Chair with Removable Headrest and High Back Cushion - Red"
            price={99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61JUe6eJUZL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Garden Tool Collection - 3-Way Front Push Button Nozzle with Zinc Alloy Base"
            price={49}
            rating={2}
            image="https://m.media-amazon.com/images/I/71e8hwb2ZsL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
