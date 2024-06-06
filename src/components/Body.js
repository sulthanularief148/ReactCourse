import { RestaurentCard } from "./RestaurentCard";
import { resList } from "../utils/mockdata";

export const Body = () => {
  return (
    <div className="body">
      <div className="filter-btn">
        <button
          style={{ margin: "5px" }}
          className="btn"
          onClick={() => {
            console.log("Clicked");
          }}
        >
          Filter food
        </button>
      </div>
      <div className="res-container">
        {resList?.map((res) => (
          <RestaurentCard resData={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};
