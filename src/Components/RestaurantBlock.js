import React from "react";
import { createComponent } from "react-fela";
import RatingComponent from './RatingComponent'

const RestaurantContainer = createComponent(
  () => ({
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 16%)",
    margin: "8px 0",
    padding: "16px",
    textDecoration: 'none',
    color: 'black'
  }),
  "a",
  ['href']
);
const LogoContainer = createComponent(
  () => ({
    width: "50%",
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 16%)",
    padding: "8px",
    "@media (min-width: 768px)": {
      width: "25%",
    },
  }),
  "div"
);

const Logo = createComponent(
  () => ({
    width: "55px",
  }),
  "img",
  ["alt", "src"]
);

const InfoContainer = createComponent(
  () => ({
    width: "50%",
    textAlign: "right",
    padding: "8px",
    "@media (min-width: 768px)": {
      width: "25%",
    },
  }),
  "div"
);

const RestaurantName = createComponent(
  () => ({
    fontFamily: "JetSansDigital,Arial,sans-serif",
    fontSize: "16px",
    margin: "0",
  }),
  "h4"
);

const LabelContainer = createComponent(
  () => ({
    display:'flex',
    justifyContent: 'flex-end',
  }),
  "div"
);

const TypeLabel = createComponent(
  () => ({
    fontFamily: "JetSansDigital,Arial,sans-serif",
    fontSize: "12px",
    padding: "4px",
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 16%)",
    margin: '4px'
  }),
  "span",
);

const RestaurantComponent = ({ restaurant }) => {
  const { LogoUrl, Name, Rating, Cuisines, Url } = restaurant;
  return (
    <RestaurantContainer href={Url}>
      <LogoContainer>
        <Logo src={LogoUrl} alt="logo" />
        <RestaurantName>{Name}</RestaurantName>
      </LogoContainer>
      <InfoContainer>
        <RatingComponent Rating={Rating}/>
        <LabelContainer>
          {Cuisines.map((cuisine, i)=><TypeLabel key={i}>{cuisine.Name}</TypeLabel>)}
        </LabelContainer>
      </InfoContainer>
    </RestaurantContainer>
  );
};

export default RestaurantComponent;
