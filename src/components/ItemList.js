import { CAT_LOGO_URL } from "../utils/constants";
import {useDispatch} from "react-redux"
import {addItems} from "../utils/cartSlice"
const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch()
  const handleAddItems = (item) => {
      dispatch(addItems(item))
  }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex items-center justify-between border-b border-gray-300 py-4"
        >
          <div className="flex-1">
            <h1 className="font-bold text-lg">{item.card.info.name}</h1>
            <h1 className="font-bold text-md">₹{item.card.info.price / 100}</h1>
            <p className="text-slate-800">{item.card.info.description}</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-[142px] w-[155px] rounded-lg object-cover"
              src={CAT_LOGO_URL + item.card.info.imageId}
              alt=""
            />
            <button className="font-bold text-xl text-green-600 w-[118px] bg-slate-100 rounded-md p-1 border border-gray-300 relative bottom-3 hover:bg-slate-400" 
             onClick={()=> handleAddItems(item)}>
              ADD
              
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
