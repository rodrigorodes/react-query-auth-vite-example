import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { IFormInputValue } from "./FormInputValue";

export const FormInputText = ({ name, control, label }: IFormInputValue) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          margin="normal"
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};
