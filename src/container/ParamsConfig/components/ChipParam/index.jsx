import React from "react";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import useStore from "../../../../store";

const ChipParam = () => {
  const { storedParams, removeParam } = useStore((state) => state.configStore);
  return (
    <div>
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
        {storedParams?.map((item, index) => (
          <Chip
            key={index}
            label={`NOAS (${item.param} ${item.operator} ${item.text})`}
            onDelete={() => removeParam(index)}
          />
        ))}
      </Stack>
    </div>
  );
};

export default ChipParam;
