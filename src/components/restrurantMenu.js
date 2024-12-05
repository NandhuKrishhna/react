import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  if (resInfo === null) return <Shimmer />;
  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    cloudinaryImageId,
    costForTwoMessage,
    areaName,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("items", categories);
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-[200px] shadow-lg rounded-md"
        src={CDN_URL + cloudinaryImageId}
      />
      <h1 className="font-bold">{name}</h1>
      <h3 className="font-bold">
        ⭐{avgRating}({totalRatingsString}) ▶️{" "}
        <span className="text-green-500">{costForTwoMessage}</span>
      </h3>
      <h3 className="text-orange-700 font-bold underline">
        {cuisines.join(", ")}
      </h3>
      {/* <h3>{costForTwo}</h3> */}
      <h3 className="font-bold">Outlet : {areaName}</h3>

      {categories.map((cat, index) => (
  <RestaurantCategory
    key={cat?.card?.card?.title}
    data={cat?.card?.card}
    showItems={index === showIndex}
    setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
  />
))}

    </div>
  );
};

export default RestaurantMenu;
