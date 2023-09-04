import React from 'react'
import SelectsForm from '../SelectsForm'

import {
  Typography,
} from "@mui/material";
import ChipParam from '../ChipParam';

const ParamsWrapper = () => {
  return (
    <div className='bg-white w-full min-h-[100px] p-4 rounded-2xl shadow-lg shadow-black-500/5 mt-8 '>
      <Typography
        variant="h6"
        sx={{ fontSize: "18px", pl: 2, mb: 1, fontWeight: 600 }}
      >
        Set Params
      </Typography>
      <ChipParam />
      <SelectsForm />
    </div>
  )
}

export default ParamsWrapper