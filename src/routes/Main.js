import { HomeWorkSharp, Person } from "@mui/icons-material";
import { AppBar, Grid, Box, Toolbar, Typography, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";

import ButtonGraph from "components/ButtonGraph";
import Cards from "../components/Cards";

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

export function Main() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            PrediData
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        spacing={4}
        component={Box}
        marginTop={"10px"}
        justifyContent="center"
      >
        <Grid item xs={4}>
          <Tooltip
            title="Con PrediData puedes administrar la información de los propietarios y agregar nuevos propietarios"
            justifyContent="center"
            placeholder="top"
          >
            <Cards
              icon={
                <Grid container justifyContent={"center"}>
                  <Person sx={{ fontSize: 60 }} />
                </Grid>
              }
              button={
                <Grid container justifyContent={"center"}>
                  <ButtonGraph variant="contained" size="small">
                    Ver Propietarios
                  </ButtonGraph>
                </Grid>
              }
            />
          </Tooltip>
        </Grid>
        <Grid item xs={4}>
          <Tooltip
            title="Con PreDita puedes administrar la información de los predios y agregar nuevas propiedades "
            placeholder="top"
          >
            <Cards
              icon={
                <Grid container justifyContent={"center"}>
                  <HomeWorkSharp sx={{ fontSize: 60 }} />
                </Grid>
              }
              button={
                <Grid container justifyContent={"center"}>
                  <ButtonGraph variant="contained" size="small">
                    Ver Propiedades
                  </ButtonGraph>
                </Grid>
              }
            />
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
}
