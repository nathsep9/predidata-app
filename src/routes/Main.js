import { HomeWorkSharp, Person } from "@mui/icons-material";
import { Grid, Box, Tooltip, Container } from "@mui/material";

import ButtonGraph from "components/ButtonGraph";
import { LinkBehavior } from "components/LinkBehavior";
import { ROUTES } from "constantsApp";
import Cards from "../components/Cards";

export function Main() {
  return (
    <Container>
      <Grid
        container
        spacing={4}
        component={Box}
        marginTop={"10px"}
        justifyContent="center"
      >
        <Grid item xs={12} md={4}>
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
                  <ButtonGraph
                    variant="contained"
                    size="small"
                    component={LinkBehavior}
                    href={ROUTES.owners}
                  >
                    Ver Propietarios
                  </ButtonGraph>
                </Grid>
              }
            />
          </Tooltip>
        </Grid>
        <Grid item xs={12} md={4}>
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
                  <ButtonGraph
                    variant="contained"
                    size="small"
                    component={LinkBehavior}
                    href={ROUTES.properties}
                  >
                    Ver Propiedades
                  </ButtonGraph>
                </Grid>
              }
            />
          </Tooltip>
        </Grid>
      </Grid>
    </Container>
  );
}
