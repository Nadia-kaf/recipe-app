import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Autocomplete, Button, Card } from "@mui/material";

export default function AddRecipe() {
    

    const countries =[
        { code: 'DZ', label: 'Algeria', phone: '213' },
        { code: 'EC', label: 'Ecuador', phone: '593' },
        { code: 'EE', label: 'Estonia', phone: '372' },
        { code: 'ES', label: 'Spain', phone: '34' },
        { code: 'ET', label: 'Ethiopia', phone: '251'}
          ];

  return (
    <Card>
         <h3>ADD A NEW RECIPE</h3>
        <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="TITLE"
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue="Start typing..."
        />
      </div>

      <div>
      <TextField type="file" />
      
      </div>

      <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
    </Box>
    </Card>
  );
}


