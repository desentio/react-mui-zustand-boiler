import React, { useEffect } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Stack
} from "@mui/material";
import Select from "@mui/material/Select";
import DeleteIcon from "@mui/icons-material/Delete";
import { operators, parameters, texts } from "../../constant";
import useStore from "../../../../store";


const SelectsForm = () => {
  const { storedParams, addParam, patchParam, removeParam } = useStore((state => state.configStore))

  useEffect(() => {
    console.log(storedParams, "dsini")
  }, [storedParams])

  const handleChangeForm = (event, index) => {
    const { name, value } = event.target
    // console.log(name, value, index, "123")
    patchParam(index, name, value)
  };

  const addItem = () => {
    const form = { param: "", operator: "", text: "" }
    addParam(form)
  }

  return (
    <div>
      {storedParams?.map((item, index) => (
        <form className="py-4" key={index}>
          <Stack direction="row">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="param-label">Parameter</InputLabel>
              <Select
                name="param"
                labelId="param-label"
                id="param"
                value={item.param}
                onChange={(e) => handleChangeForm(e, index)}
                label="param"
              >
                <MenuItem value="">
                  <em>param</em>
                </MenuItem>
                {parameters.map((value, index) => (
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="operator-label">Operator</InputLabel>
              <Select
                name="operator"
                labelId="operator-label"
                id="operator"
                value={item.operator}
                onChange={(e) => handleChangeForm(e, index)}
                label="operator"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {operators.map((value, index) => (
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="text-label">Text Wert</InputLabel>
              <Select
                name="text"
                labelId="textlabel"
                id="text"
                value={item.text}
                onChange={(e) => handleChangeForm(e, index)}
                label="text"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {texts.map((value, index) => (
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button onClick={() => removeParam(index)} startIcon={<DeleteIcon />}></Button>
          </Stack>
        
        </form>

      ))}

      <Button variant="contained" onClick={addItem}> + Add Filter</Button>
    </div>
  );
};

export default SelectsForm;
