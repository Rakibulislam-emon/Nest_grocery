import Container from "@/Components/Container";
import Header from "@/Components/Header/Header";
import React from "react";
import Hero from "@/Components/HeroSection/Hero";
import ProductsContents from "@/Components/ProductsContents/ProductsContents";
import FeaturedCategory from "@/Components/FeaturedCategory/FeaturedCategory";

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <FeaturedCategory />
      <ProductsContents />
    </Container>
  );
}
