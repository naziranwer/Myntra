import React from "react";
import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const ProductRating = ({ rating, rateCount }) => {
  // Assuming rating is a number between 0 and 5
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const filledStar =
      i <= rating ? (
        <StarIcon key={i} style={{ color: "#90EE90" }} />
      ) : (
        <StarIcon key={i} style={{ color: "#C0C0C0" }} />
      );
    stars.push(filledStar);
  }

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
      {stars}
      <Typography variant="body2" style={{ marginLeft: 5 }}>
        ({rateCount})
      </Typography>
    </div>
  );
};

export default ProductRating;
