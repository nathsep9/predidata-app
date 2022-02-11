import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export const BasicCard = React.forwardRef(
  ({ tittle, button, icon, description, ...props }, ref) => {
    return (
      <Card sx={{ width: "100%" }} {...props} ref={ref}>
        {description}
        <CardContent>{icon}</CardContent>
        <CardActions>{button}</CardActions>
      </Card>
    );
  }
);

export default BasicCard;
