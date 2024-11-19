import { useEffect , useState , } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setresInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);
    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9816358&lng=76.2998842&restaurantId=" + resId) 
        const json = await data.json();
        console.log(json);
        setresInfo(json.data)
    }
    
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