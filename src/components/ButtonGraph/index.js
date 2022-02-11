import { Button } from "@mui/material";
import { withStyles } from "@mui/styles";
import fondo from "img/FondoBotones.png";

export const ButtonGraph = withStyles({
  containedPrimary: {
    backgroundImage: `url(${fondo})`,
    backgroundSize: "170%",
    backgroundPosition: "center -0.8em",
  },
})(Button);

export default ButtonGraph;
