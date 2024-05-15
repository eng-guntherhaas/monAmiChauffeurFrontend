import { Button, Grid } from "@mui/material";
import InputFieldText from "./inputFieldText";
import InputFieldNumber from "./inputFieldNumber";
import InputFieldDate from "./inputFieldDate";

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
          <InputFieldText label="Départ" required={true} />
        </Grid>
        <Grid xs={12} sm={2}>
          <InputFieldText label="Destination" required={true} />
        </Grid>
        <Grid xs={12} sm={2}>
          <InputFieldNumber label="Passager" required={true} />
        </Grid>
        <Grid xs={12} sm={2}>
          <InputFieldDate label="Date" required={true} />
        </Grid>
        <Grid xs={12} sm={2}>
          <Button variant="contained">Recherche</Button>
        </Grid>
      </Grid>
    </>
  );
}
