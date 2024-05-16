import { Button, Grid, TextField } from "@mui/material";

export default function SearchTrip() {
  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
      >
        <Grid xs={12} sm={2}>
          <TextField label="Départ" required={true} />
        </Grid>
        <Grid xs={12} sm={2}>
          <TextField label="Destination" required={true} />
        </Grid>
        <Grid xs={12} sm={2}>
          <TextField label="Passager" required={true} />
        </Grid>
        <Grid xs={12} sm={2}>
          <TextField label="Date" required={true} />
        </Grid>
        <Grid xs={12} sm={2}>
          <Button variant="contained">Recherche</Button>
        </Grid>
      </Grid>
    </>
  );
}
