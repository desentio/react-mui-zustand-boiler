import { produce } from "immer";

const CreateChipStore = (set) => ({
  ChipFilter: [],
  addChipFilter: (chip) =>
    set(
      produce((updatedState) => {
        updatedState.CreateChipStore.ChipFilter.push(chip);
      })
    ),
  removeChipFilter: (id) =>
    set(
      produce((updatedState) => {
        updatedState.CreateChipStore.ChipFilter =
          updatedState.CreateChipStore.ChipFilter.filter(
            (filter) => filter.id !== id
          );
      })
    ),
});

export default CreateChipStore;
