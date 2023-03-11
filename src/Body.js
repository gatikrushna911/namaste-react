import { useEffect, useState } from "react";
import Empty from "./Empty";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { restaurantList, SWIGGY_PUBLIC_URL } from "./utils/Constants";
import { filterData } from "./utils/Helper";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getResturants();
  }, []);
  async function getResturants() {
    const data = await fetch(SWIGGY_PUBLIC_URL);
    const json = await data.json();
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurnat-list">
        {filteredRestaurants.length === 0 ? (
          <Empty />
        ) : (
          filteredRestaurants.map((restaurnat) => (
            <RestaurantCard {...restaurnat.data} key={restaurnat.data.id} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
