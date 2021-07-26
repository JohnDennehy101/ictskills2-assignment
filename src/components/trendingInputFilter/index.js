import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function TrendingInputFilter({
  labelValue,
  value,
  handleChange,
  menuItems,
  helperText,
}) {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: "20px",
      width: "250px",
      minWidth: 120,
    },
  }));

  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-helper-label">{labelValue}</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={value}
        onChange={handleChange}
      >
        {menuItems.map((item) => {
          return <MenuItem value={item}>{item.toUpperCase()}</MenuItem>;
        })}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
