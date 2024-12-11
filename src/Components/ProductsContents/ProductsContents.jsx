import React from "react";
import Filter from "./Filter/Filter";
import NewProducts from "./NewProducts/NewProducts";
import PopularProducts from "./PopularProducts/PopularProducts";
import FilterToggleButton from "./Filter/FilterToggleButton";

export default function ProductsContents() {
  
  return (
    <div className="lg:flex grid grid-cols-1">
      <div className="lg:w-1/4 ">
        {/* <Filter /> */}
        <FilterToggleButton/>
        <NewProducts />
      </div>
      <PopularProducts />
    </div>
  );
}
