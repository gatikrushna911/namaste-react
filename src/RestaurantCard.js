import { IMG_URL_CDN } from "./utils/Constants";

const RestaurantCard = ({ name, avgRating, cloudinaryImageId }) => {
  return (
    <>
      <div className="restaurant-card">
        <img src={IMG_URL_CDN + cloudinaryImageId}></img>
        <h1>{name}</h1>
        <h4>Ratings {avgRating} stars</h4>
      </div>
    </>
  );
};

export default RestaurantCard;
