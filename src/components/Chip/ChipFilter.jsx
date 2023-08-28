import useStore from "../../store";
import { Chip } from "@mui/material";

const ComponentChips = () => {
  const { CreateChipStore } = useStore();

  return (
    <div className="gap-2 flex flex-wrap">
      {CreateChipStore.ChipFilter?.map((item) => (
        <Chip
          key={item.id}
          label={`NOAS (${item.param} ${item.operator} ${item.wert})`}
          onDelete={() => CreateChipStore.removeChipFilter(item.id)}
        />
      ))}
    </div>
  );
};

export default ComponentChips;
