import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import OwnersForm from "components/owners/Form";
import OwnersTable from "components/owners/Table.js";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
}));

export const Owners = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs="auto">
          <OwnersForm />
        </Grid>
        <Grid item xs={12}>
          <OwnersTable />
        </Grid>
      </Grid>
    </Container>
  );
};
