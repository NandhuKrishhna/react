import { CDN_URL } from "../utils/constants.js";
const styleCard = {
    backgroundColor: "#f0f0f0",
  };
export const RestaurandCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo } = resData
    // console.log(resData.info.cloudinaryImageId);
    return (
      <div className="res-card" style={styleCard}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL +resData.cloudinaryImageId}
        />
        <h4>{name}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
      </div>
    );
  };
  

  export default RestaurandCard