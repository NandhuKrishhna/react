import React, { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
//   console.log(data);
  const { title } = data;
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-6/12 bg-gray-50 mx-auto shadow-lg p-4 my-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold font-sans">
          {title} ({data.itemCards.length})
        </span>
        <span className="text-lg">{showItems ? "⬆️" : "⬇️"}</span>
      </div>
      {showItems && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
