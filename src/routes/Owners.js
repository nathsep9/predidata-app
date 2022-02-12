import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import client from "client";
import OwnersForm from "components/owners/Form";
import OwnersTable from "components/owners/Table.js";
import { useCallback, useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
}));

export const Owners = () => {
  const [data, setData] = useState([]);
  const classes = useStyles();
  const loadData = useCallback(async () => {
    const res = await client.get("/owners");
    setData(res.data);
  }, []);
  useEffect(() => {
    loadData();
  }, [loadData]);
  console.log(data);
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs="auto">
          <OwnersForm
            onSave={(owner) => {
              setData([...data, owner]);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <OwnersTable data={data} reload={loadData} />
        </Grid>
      </Grid>
    </Container>
  );
};
