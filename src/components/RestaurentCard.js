import { CDN_URL } from "../utils/constants";
export const RestaurentCard = (props) => {
  console.log(`The Output is ${props} `);
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="restaurent-card">
      <img src={`${CDN_URL}/${cloudinaryImageId}`} className="card-img" />

      <div className="card-body">
        <h2 className="restaurent-name">{name}</h2>
        <h3 className="restaurent-cuisine">{cuisines.join(", ")}</h3>
        <h3 className="food-cost">{costForTwo}</h3>
        <h3 className="restaurent-ratings">{avgRating}</h3>
        <h4 className="delivery-time">{deliveryTime}</h4>
      </div>
    </div>
  );
};
