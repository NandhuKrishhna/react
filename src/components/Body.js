import RestaurantCard from "./RestaurantCard.js";
import resObj from "../utils/mockData.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [filterListofRestaurant , setfilterListofRestaurant] = useState([])
  const [searchText , setSearchText] = useState("")
  // console.log('body rendered');
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9816358&lng=76.2998842&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // console.log(json);

      // Correctly extract the restaurant list
      const restaurantList =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      // console.log("Extracted Restaurant List:", restaurantList);

      // Update state with the fetched restaurant list
      if (restaurantList) {
        setlistofRestaurant(restaurantList);
        setfilterListofRestaurant(restaurantList);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // console.log("list",listofRestaurant);

  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
           <button onClick={()=>{
            const filteredList = listofRestaurant.filter(res=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setfilterListofRestaurant(filteredList);
           }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter using `info.avgRating` instead of `avgRating`
            const filtered = listofRestaurant?.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilterListofRestaurant(filtered);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
      {filterListofRestaurant.map((res) =>
        res?.info ? (
          <Link to={`/restaurant/${res.info.id}`} key={res.info.id}>
            <RestaurantCard resData={res.info} />
          </Link>
        ) : null
      )}
    </div>
    </div>
  );
};

export default Body;
