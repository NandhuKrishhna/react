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
        <div className="shimmer-container">
            <div className="shimmer-cards">Cards</div>
            <div className="shimmer-cards">Cards</div>
            <div className="shimmer-cards">Cards</div>
            <div className="shimmer-cards">Cards</div>
            <div className="shimmer-cards">Cards</div>
            <div className="shimmer-cards">Cards</div>
            <div className="shimmer-cards">Cards</div>
            <div className="shimmer-cards">Cards</div>
            <div className="shimmer-cards">Cards</div>
            <div className="shimmer-cards">Cards</div>
            <div className="shimmer-cards">Cards</div>
        </div>
        </div>
    )
}

export default Shimmer;