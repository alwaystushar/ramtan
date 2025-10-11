import React from "react";
import GsapCarousel from "../../../components/GsapCarousel";

export default function Hero() {
  const slides = [
    {
      image: "/img/home-hero1.jpg",
      title: "Crafting Unforgettable Event Experiences",
    },
    {
      image: "/img/home-hero2.jpg",
      title: "Empower Your Brand’s Vision With Us",
    },
    {
      image: "/img/home-hero3.jpg",
      title: "Crafting Unforgettable Event Experiences",
    },
  ];

  return (
    <section id="home">
      {" "}
      {/* ✅ Added ID here */}
      <GsapCarousel slides={slides} dark={true} />
    </section>
  );
}
