import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import client from "client";
import PropertiesForm from "components/properties/Form";
import PropertiesTable from "components/properties/Table";
import { useCallback, useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
}));

export const Properties = () => {
  const [data, setData] = useState([]);
  const classes = useStyles();
  const loadData = useCallback(async () => {
    const res = await client.get("/properties");
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
          <PropertiesForm
            onSave={(property) => {
              setData([...data, property]);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <PropertiesTable data={data} reload={loadData} />
        </Grid>
      </Grid>
    </Container>
  );
};
