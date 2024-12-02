import RestaurantCard ,{withOpenedLabel} from "./RestaurantCard.js";
import resObj from "../utils/mockData.js";
import { useState, useEffect, useRef , useContext } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
// import UserContext from "../utils/UserContext.js"
const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [filterListofRestaurant, setfilterListofRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const checkOnlineStatus = useOnlineStatus();
  const ResturantCardOpened = withOpenedLabel(RestaurantCard)
  const {setUserName} = useContext(UserContext)
  // console.log(listofRestaurant);
  useEffect(() => {
    fetchData();
  }, []);
  // const inputRef = useRef(null);
  // function Inputfocus(){

  //   const handleFocusn=()=>{
  //     inputRef.current.focus();
  //   }
  // }
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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

  if (checkOnlineStatus === false)
    return (
      <h1>Ops.. Look like you are offline. Check your internet connection!</h1>
    );
  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex pb-5 items-center">
        <div className="">
          <input
            type="text"
            className="border border-gray-300 p-1 mx-5 rounded-md 
         hover:border-blue-500 focus:border-blue-700 focus:outline-none"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-200 p-1 border border-black-500 rounded-md hover:bg-green-700 font-semibold"
            onClick={() => {
              const filteredList = listofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterListofRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className=" bg-gray-500 ml-6 p-1 border border-blue-500 rounded-md  hover:bg-gray-700">
          <button
            className="font-bold text-white"
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
        <div>
          <input onChange={(e)=> setUserName(e.target.value)} className="mx-3 border border-black p-1 rounded-sm" type="text" placeholder="Enter your name..." />
        </div>
      </div>
      <div className="flex flex-wrap justify-between ">
      {
  filterListofRestaurant.map((res) =>
    res?.info ? (
      <Link to={`/restaurant/${res.info.id}`} key={res.info.id}>
        {res.info.isOpen && res.info.avgRating > 4.6 ?  (
          <ResturantCardOpened resData={res.info} />
        ) : (
          <RestaurantCard resData={res.info} />
        )}
      </Link>
    ) : null
  )
}
      </div>
    </div>
  );
};

export default Body;
