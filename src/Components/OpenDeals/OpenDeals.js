import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDeals } from "../../dealsReducer";
import "./OpenDeals.css";

const OpenDeals = () => {
  const dispatch = useDispatch();
  const deals = useSelector((state) => state.deals);

  useEffect(() => {
    dispatch(getDeals());
  }, [dispatch]);

  return (
    <div className="deals-wrapper">
      <h1 className="deals-title">Open Deals</h1>
      <div className="deals-grid">
        {deals.map((deal) => (
          <div
            key={deal._id}
            className="deal-item"
            style={{ backgroundImage: `url(${deal.imageUrl})` }}
          >
            <div className="deal-img">
              <div className="deal-info">
                <p style={{ fontSize: "20px", lineHeight: "34px", margin: 0 }}>
                  {deal.name}
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "22px",
                    margin: 0,
                    textAlign: "justify",
                  }}
                >
                  {deal.price} Dhs Yield {deal.yield} Sold {deal.sold}
                </p>
                <p style={{ fontSize: "18px", lineHeight: "22px", margin: 0 }}>
                  Tiket {deal.tiket} Dhs Days left {deal.daysLeft}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenDeals;
