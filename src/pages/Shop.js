import React from "react";
import Hero from "../components/hero/Hero";
import Popular from "../components/popular/Popular";
import Offer from "../components/offers/Offer";
import NewCollection from "../components/new_collections/NewCollection";

const Shop = () => {
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offer/>
            <NewCollection/>
        </div>
    )
}

export default Shop;