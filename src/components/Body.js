import RestaurantCard from "./RestaurantCard.js";
import resObj from "../utils/mockData.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9816358&lng=76.2998842&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);

      // Correctly extract the restaurant list
      const restaurantList =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log("Extracted Restaurant List:", restaurantList);

      // Update state with the fetched restaurant list
      if (restaurantList) {
        setlistofRestaurant(restaurantList);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter using `info.avgRating` instead of `avgRating`
            const filtered = listofRestaurant?.filter(
              (res) => res.info.avgRating > 4.5
            );
            setlistofRestaurant(filtered);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurant.map((res) =>
          res?.info ? (
            <RestaurantCard key={res.info.id} resData={res.info} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Body;
