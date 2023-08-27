import { Box, Button, Container, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import useStore from "../store";
import FilterForm from "@/components/form/Filter";
// import HomeHeader from "../components/home/HomeHeader";

export default function HomePage() {
  const filters = useStore(state => state.filterStore.data)
  const addDataFilter = useStore(state => state.filterStore.addDataFilter)
  const removeDataFilter = useStore(state => state.filterStore.removeDataFilter)

  const addFilter = () => {
    addDataFilter()
  }
  const removeFilter = (idx) => {
    removeDataFilter(idx)
  }


  if (!filters) return null;
  return (
    <Container maxWidth="md" style={{"marginTop": "10vh", marginBottom: "10vh"}}>
      <Box>
        {filters.map((filter, key) => (
          <li key={key}>
            <p>{`parameter: ${filter.parameter} | operator: ${filter.operator} | text: ${filter.text}`}</p>
            <br/>
          </li>
        ))}
      </Box>

      {filters.map((data, idx) => (
        <div key={idx}>
          <FilterForm data={data} idx={idx} handleRemoveFilter={removeFilter}/>
        </div>
      ))}
      <Box style={{"paddingLeft":".5rem"}}>
        <Button variant="outlined" endIcon={<AddIcon />} onClick={addFilter}>
          Add Filter
        </Button>
      </Box>
    </Container >
  )
}
