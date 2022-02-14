import React, { useCallback, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getOwnerPropertiesAvailable } from "services";
import { getLocation } from "utils";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function PropertiesField({ value = [], onChange, owner }) {
  const theme = useTheme();
  const [properties, setProperties] = React.useState([]);

  const loadData = useCallback(async () => {
    const res = await getOwnerPropertiesAvailable(owner);
    setProperties(res.data);
  }, [owner]);
  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const newValue = typeof value === "string" ? value.split(",") : value;

    onChange?.(newValue);
  };

  return (
    <FormControl sx={{ my: 1 }} fullWidth>
      <InputLabel>Propiedades</InputLabel>
      <Select
        labelId="properties-field"
        multiple
        value={value}
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
        MenuProps={MenuProps}
      >
        {properties.map(({ id, ...rest }) => (
          <MenuItem key={id} value={id} style={getStyles(id, value, theme)}>
            {getLocation(rest)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
