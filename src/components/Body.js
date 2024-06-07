import { RestaurentCard } from "./RestaurentCard";
import { resList } from "../utils/mockdata";
import { useState } from "react";

export const Body = () => {
  //useState it's comes form react, It's normal JS Utility Function.
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  return (
    <div className="body">
      <div className="filter-btn">
        <button
          style={{ margin: "5px" }}
          className="btn"
          onClick={() => {
            // const filteredRestaurant = resList.filter(
            //   (res) => res.info.avgRatingString > 4
            // );
            setListOfRestaurant(resList);
          }}
        >
          Filter food
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurant?.map((res) => (
          <RestaurentCard resData={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};
