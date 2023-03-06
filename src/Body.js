import { IMG_URL_CDN, restaurantList } from "./utils/Constants";

const RestaurantCard = ({ name, avgRating, cloudinaryImageId }) => {
  //const { name, avgRating, cloudinaryImageId } = restaurant;
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
const Body = () => {
  return (
    <>
      <div className="search-container">
        <input type="search" className="search-input" placeholder="search" />
        <button className="search-btn">Search</button>
        <RestaurantCard {...restaurantList[0].data} />
      </div>
    </>
  );
};

export default Body;
