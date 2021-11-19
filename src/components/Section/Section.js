import React from "react";
import Slider from "react-slick";
import Card from "./Card/Card";
import "./Section.css";

export default function Section({ title, data }) {
  console.log(data);

  return (
    <section className="Section">
      <h4>{title}</h4>
      <Slider slidesToShow={3} slidesToScroll={3} >
        {data?.map((item) => (
          
          <Card key={item.id} movie={item} />
        
        ))}
      </Slider>
    </section>
  );
}
