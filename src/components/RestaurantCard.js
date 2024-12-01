import { CDN_URL } from "../utils/constants.js";

export const RestaurandCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo } = resData
    // console.log(resData.info.cloudinaryImageId);
    return (
      <div className="m-4 p-4 w-[200px] bg-slate-200 h-[400px]  hover:bg-slate-300 shadow-md" >
        <img
          className="h-[200px] rounded-md"
          alt="res-logo"
          src={CDN_URL +resData.cloudinaryImageId}
        />
        <h4 className="font-bold"> Name : {name}</h4>
        <h5 className="text-green-600"><span className="font-bold">Cuisins : </span>{cuisines.join(", ")}</h5>
        <h5 className="text-yellow-600 font-bold"> Ratings : {avgRating}</h5>
        <h5 className="text-red-800 font-semibold">Price : {costForTwo}</h5>
      </div>
    );
  };
  

  export default RestaurandCard