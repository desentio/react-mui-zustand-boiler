import { useState } from "react";
import {
  InputLabel,
  MenuItem,
  Select,
  IconButton,
  Button,
  FormControl,
  FormHelperText,
  Grid,
} from "@mui/material";
import useStore from "../../store";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const Form = () => {
  const add = useStore((state) => state.CreateChipStore.addChipFilter);
  const [errors, setErrors] = useState({
    param: "",
    operator: "",
    wert: "",
  });
  const [form, setForm] = useState({
    param: "",
    operator: "",
    wert: "",
  });

  const handleSubmit = () => {
    const newErrors = {};

    // Validation for each field
    if (!form.param) {
      newErrors.param = "Parameter cannot be empty.";
    }

    if (!form.operator) {
      newErrors.operator = "Operator cannot be empty.";
    }

    if (!form.wert) {
      newErrors.wert = "Text Wert cannot be empty.";
    }

    // Check if any error messages are set
    if (Object.values(newErrors).some((error) => error !== "")) {
      setErrors(newErrors);
      return;
    }

    // If there are no error messages, add a chip filter and reset the field
    add({ ...form, id: new Date() });
    handleReset();
  };

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setForm((prev) => ({ ...prev, [fieldName]: fieldValue }));

    if (fieldValue) {
      // Clear error message if no value is entered
      setErrors((prev) => ({ ...prev, [fieldName]: "" }));
    }
  };

  const handleReset = () => {
    setForm({ param: "", operator: "", wert: "" });
    setErrors({ param: "", operator: "", wert: "" });
  };

  return (
    <>
      <div className="mt-12 border rounded-md mb-6 p-3 max-w-3xl">
        <Grid container spacing={3}>
          <Grid item md={4}>
            <FormControl variant="standard" fullWidth error={errors.param}>
              <InputLabel>Parameter</InputLabel>
              <Select
                label="Parameter"
                value={form.param}
                name="param"
                onChange={handleChange}
              >
                <MenuItem value="query">query</MenuItem>
                <MenuItem value="item">item</MenuItem>
                <MenuItem value="index">index</MenuItem>
                <MenuItem value="prop">prop</MenuItem>
              </Select>
              <FormHelperText error={errors.param}>
                {errors.param}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item md={2}>
            <FormControl variant="standard" fullWidth error={errors.operator}>
              <InputLabel>Operator</InputLabel>
              <Select
                label="Operator"
                value={form.operator}
                name="operator"
                onChange={handleChange}
              >
                <MenuItem value="=">=</MenuItem>
                <MenuItem value="==">=</MenuItem>
                <MenuItem value="!=">!=</MenuItem>
                <MenuItem value="&&">!=</MenuItem>
                <MenuItem value=">">{`>`}</MenuItem>
                <MenuItem value=">=">{`>`}</MenuItem>
                <MenuItem value="<=">{`<`}</MenuItem>
              </Select>
              <FormHelperText error={errors.operator}>
                {errors.operator}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={5}>
            <FormControl variant="standard" fullWidth error={errors.wert}>
              <InputLabel>Text Wert</InputLabel>
              <Select
                label="Text Wert"
                value={form.wert}
                name="wert"
                onChange={handleChange}
              >
                <MenuItem value="LOL">LOL</MenuItem>
                <MenuItem value="WDYT">WDYT</MenuItem>
                <MenuItem value="COD">COD</MenuItem>
              </Select>
              <FormHelperText error={errors.wert}>{errors.wert}</FormHelperText>
            </FormControl>
          </Grid>

          <Grid mt={1} item md={1}>
            <IconButton onClick={handleReset}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>

      <Button startIcon={<AddIcon />} variant="outlined" onClick={handleSubmit}>
        FILTER HINZUFÜGEN
      </Button>
    </>
  );
};

export default Form;
