import React, { useState }  from 'react';
import { Box, TextField, IconButton, Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import useStore from "@/store";

const FilterForm = (props) => {
  if (!props.data) return null;
  const setValueFilter = useStore(state => state.filterStore.setValueFilter)

  const onBlurInput = (val, key) => {
    setValueFilter(val, key, props.idx)
  }

  const [operator, setOperator] = React.useState('');

  const handleChange = (event, key) => {
    setOperator(event.target.value);
    setValueFilter(event.target.value, key, props.idx)
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField 
              onBlur = {(e) => {
                onBlurInput(e.target.value, "parameter")
              }} size="small" id="parameter" label="Parameter" variant="outlined" />
            {/* <TextField
              onBlur = {(e) => {
                onBlurInput(e.target.value, "operator")
              }} size="small" id="operator" label="Operator" variant="outlined" /> */}
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Operator</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={operator}
                  onChange={(e) => {
                    handleChange(e, "operator")
                  }}
                  autoWidth
                  label="Operator"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"="}>{"="}</MenuItem>
                  <MenuItem value={">"}>{">"}</MenuItem>
                  <MenuItem value={"<"}>{"<"}</MenuItem>
                </Select>
              </FormControl>
            <TextField 
              onBlur = {(e) => {
                onBlurInput(e.target.value, "text")
              }} size="small" id="text" label="Text" variant="outlined" />
          </Box>
        
      </Grid>
      <Grid item xs={2}>
        
            <IconButton style={{"marginTop": ".7rem"}} size="small" aria-label="delete" onClick={(e) => props.handleRemoveFilter(props.idx)}>
              <DeleteIcon />
            </IconButton>
        
      </Grid>
    </Grid>
    
  );
}

export default FilterForm