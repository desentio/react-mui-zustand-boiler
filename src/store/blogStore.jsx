import { produce } from "immer";
import axios from "axios";
import { Operator } from "../constant/operator";

const blogStore = (set, get, api) => ({
  data: null,
  operator: Operator,
  textwert: null,
  chip: [
    {
      parameter: "bulbasaur",
      operator: "=",
      textwert: "charizard",
    },
  ],
  isLoading: false,
  updateChip: (index, newData) =>
    set(
      produce((draft) => {
        draft.blogStore.chip[index] = newData;
      })
    ),

  setLoading: (isLoading) =>
    set(
      produce((draft) => {
        draft.blogStore.isLoading = isLoading;
      })
    ),

  setData: (newData) =>
    set(
      produce((draft) => {
        draft.blogStore.data = newData;
      })
    ),

  removeChip: (index) =>
    set(
      produce((draft) => {
        draft.blogStore.chip.splice(index, 1); // Menghapus satu elemen berdasarkan index
      })
    ),

  addEmptyChip: () =>
    set(
      produce((draft) => {
        draft.blogStore.chip.push({
          parameter: "",
          operator: "",
          textwert: "",
        });
      })
    ),

  fetchData: async () => {
    if (get().blogStore.isLoading) return;
    const apiUrl = get().staticStore.apiUrl;

    try {
      get().blogStore.setLoading(true);

      const response = await axios.get(apiUrl);
      const data = response.data.results;

      get().blogStore.setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      get().blogStore.setLoading(false);
    }
  },
});

export default blogStore;
