import { makeStyles } from "@mui/styles";

const { AppBar, Typography, Button, Toolbar } = require("@mui/material");
const { LinkBehavior } = require("components/LinkBehavior");
const { ROUTES } = require("constantsApp");

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  button: {
    backgroundColor: "#006850",
    backgroundSize: 145,
    justifyContent: "center",
    display: "flex",
  },
  description: {
    fontSize: "1.5rem",
  },
}));

export const Navegation = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={LinkBehavior} href={ROUTES.main}>
          <Typography variant="h6" className={classes.title} color="white">
            PrediData
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
