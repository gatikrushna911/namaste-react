import { IMG_URL_CDN, restaurantList } from "./utils/Constants";

const RestaurantCard = ({ restaurant }) => {
  const { name, avgRating, cloudinaryImageId } = restaurant;
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
        {/* <RestaurantCard
          name={restaurantList[0].data.name}
          avgRating={restaurantList[0].data.avgRating}
          cloudinaryImageId={restaurantList[0].data.cloudinaryImageId}
        /> */}

        <RestaurantCard restaurant={restaurantList[0].data} />
      </div>
    </>
  );
};

export default Body;
