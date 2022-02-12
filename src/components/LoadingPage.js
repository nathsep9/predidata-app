import { CircularProgress, Grid } from "@mui/material";

export const LoadingPage = () => {
  return (
    <Grid
      container
      sx={{
        marginTop: "50px",
      }}
    >
      <Grid container item xs justifyContent="center">
        <CircularProgress size="100px" />
      </Grid>
    </Grid>
  );
};

export default LoadingPage;
