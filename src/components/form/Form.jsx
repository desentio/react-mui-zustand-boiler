import { Autocomplete, Box, Button, Chip, TextField } from "@mui/material";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import useStore from "../../store";
import { Description } from "../../constant/description";
import LoadingFallback from "../loading/LoadingFallback";

const Form = () => {
  const { blogStore } = useStore();

  useEffect(() => {
    blogStore.fetchData();
  }, []);

  return (
    <Box className="border-2 rounded-lg w-full h-fit p-4 gap-4 flex flex-col">
      <p className="font-bold text-[24px]">About Me</p>
      <p className="text-justify text-gray-800">{Description}</p>
      {blogStore.isLoading ? (
        <LoadingFallback />
      ) : (
        blogStore.data && (
          <>
            <div className="flex gap-2 flex-row">
              {blogStore?.chip.length > 0
                ? blogStore?.chip.map((item, index) => (
                    <Chip
                      label={`${item.parameter} ${item.operator} ${item.textwert}`}
                      onClick={() => {}}
                      onDelete={() => blogStore.removeChip(index)}
                      className="w-fit"
                      key={index}
                    />
                  ))
                : ""}
            </div>

            {blogStore?.chip.length > 0
              ? blogStore?.chip.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-2 w-full justify-between items-center border rounded-md p-3"
                  >
                    <Autocomplete
                      options={blogStore?.data}
                      getOptionLabel={(option) => option.name}
                      id="disable-close-on-select"
                      value={blogStore?.data.find(
                        (option) => option.name === item.parameter
                      )}
                      className="w-full"
                      onChange={(event, newValue) =>
                        blogStore.updateChip(index, {
                          parameter: newValue.name,
                          operator: item.operator,
                          textwert: item.textwert,
                        })
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Parameter"
                          variant="standard"
                        />
                      )}
                    />
                    <Autocomplete
                      options={blogStore.operator}
                      getOptionLabel={(option) => option}
                      className="w-full"
                      id="disable-close-on-select"
                      value={item.operator}
                      onChange={(event, newValue) =>
                        blogStore.updateChip(index, {
                          parameter: item.parameter,
                          operator: newValue,
                          textwert: item.textwert,
                        })
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Operator"
                          variant="standard"
                        />
                      )}
                    />
                    <Autocomplete
                      options={blogStore.data}
                      getOptionLabel={(option) => option.name}
                      className="w-full"
                      id="disable-close-on-select"
                      value={blogStore?.data.find(
                        (option) => option.name === item.parameter
                      )}
                      onChange={(event, newValue) =>
                        blogStore.updateChip(index, {
                          parameter: item.parameter,
                          operator: item.operator,
                          textwert: newValue.name,
                        })
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Text wert"
                          variant="standard"
                        />
                      )}
                    />
                    <DeleteIcon
                      className="text-gray-500 hover:text-red-500 cursor-pointer"
                      onClick={() => blogStore.removeChip(index)}
                    />
                  </div>
                ))
              : ""}
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              className="w-fit"
              onClick={() => blogStore.addEmptyChip()}
            >
              Add new
            </Button>
          </>
        )
      )}
    </Box>
  );
};

export default Form;
