const Shimmer = () =>{
    return (
        <div>
        <div>
        <button
          className="filter-btn"
        //   onClick={() => {
        //     // Filter using `info.avgRating` instead of `avgRating`
        //     const filtered = listofRestaurant.filter(
        //       (res) => res.info.avgRating > 4.5
        //     );
        //     setlistofRestaurant(filtered);
        //   }}
        >
          Top Restaurants
        </button>
      </div>
        <div className="flex flex-wrap justify-between">
            <div className="w-[200px] bg-gray-200 h-[400px] rounded-md shadow-md">Cards</div>
            <div className="w-[200px] bg-gray-200 h-[400px] rounded-md shadow-md">Cards</div>
            <div className="w-[200px] bg-gray-200 h-[400px] rounded-md shadow-md">Cards</div>
            <div className="w-[200px] bg-gray-200 h-[400px] rounded-md shadow-md">Cards</div>
            <div className="w-[200px] bg-gray-200 h-[400px] rounded-md shadow-md">Cards</div>
            <div className="w-[200px] bg-gray-200 h-[400px] rounded-md shadow-md">Cards</div>
            <div className="w-[200px] bg-gray-200 h-[400px] rounded-md shadow-md">Cards</div>
            <div className="w-[200px] bg-gray-200 h-[400px] rounded-md shadow-md">Cards</div>
            <div className="w-[200px] bg-gray-200 h-[400px] rounded-md shadow-md">Cards</div>
            <div className="w-[200px] bg-gray-200 h-[400px] rounded-md shadow-md">Cards</div>
        </div>
        </div>
    )
}

export default Shimmer;