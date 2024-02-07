import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
  Card
} from "@mui/material";

function Sorter() {
  return (
    <Grid>
      <Card>
        <FormControl>
          <FormLabel id="sort-by">Sort By</FormLabel>
          <RadioGroup
            aria-labelledby="sort-by"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </Card>
    </Grid>
  );
}

export default Sorter;
