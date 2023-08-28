import { Box, Button, Container, Chip, Stack } from "@mui/material";
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
    <Container maxWidth="md" sx={{marginTop: "10vh", marginBottom: "10vh", border:"1px solid #e5e7eb", borderRadius:".2rem", padding:"1rem"}}>
      <Box>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" style={{"marginBottom":"2rem", padding:".5rem"}}>
          {filters.map((filter, idx) => {
            return (
                <Chip
                  key={idx}
                  variant="outlined"
                  label={`parameter: ${filter.parameter} | operator: ${filter.operator} | text: ${filter.text}`}
                  onDelete={() => removeFilter(idx)}
                />
            );
          })}
        </Stack>
      </Box>

      {filters.map((data, idx) => (
        <div key={idx}>
          <FilterForm data={data} idx={idx} handleRemoveFilter={removeFilter}/>
        </div>
      ))}
      <Box sx={{paddingLeft:".5rem", marginTop:"1rem"}}>
        <Button variant="outlined" endIcon={<AddIcon />} onClick={addFilter}>
          Add Filter
        </Button>
      </Box>
    </Container >
  )
}
