import React from "react";
import { createComponent } from "react-fela";
import RestaurantComponent from "./RestaurantBlock";

const WrapperBox = createComponent(
  () => ({
    marginTop: "24px",
  }),
  "div"
);
const Header2 = createComponent(
  () => ({
    color: "#000",
    fontSize: "16px",
    margin: "0 0 16px",
    "@media (min-width: 1024px)": {
      fontSize: "20px",
    },
  }),
  "h2"
);

const RestaurantsListSection = ({ restaurantData }) => {

  const { ShortResultText, Area, Restaurants } = restaurantData;
  const resultHeading = `${ShortResultText}, ${Area}`;
  return (
    restaurantData && (
      <WrapperBox>
        <Header2>{resultHeading}</Header2>
        {Restaurants &&
          Restaurants.map((restaurant, index) => (
            <RestaurantComponent key={index} restaurant={restaurant}/>
          ))}
      </WrapperBox>
    )
  );
};

export default RestaurantsListSection;
