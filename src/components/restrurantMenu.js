import { useEffect , useState , } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
     const {resId} = useParams();
     const resInfo = useRestaurantMenu(resId)
    
    if(resInfo === null) return <Shimmer/>
    const { name, cuisines, costForTwo, avgRating , cloudinaryImageId } = resInfo?.cards[2]?.card?.card?.info;
    return (
        <div className="menu">
            <img className="menu-img" src= {CDN_URL+cloudinaryImageId}/>
            <h1>{name}</h1>
             <h3>{cuisines.join(", ")}</h3>
             <h3>{costForTwo}</h3>
             <h3>{avgRating}</h3>
        </div>
    )
};

export default RestaurantMenu;