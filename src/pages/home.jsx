import { Box } from "@mui/material";
import HomeHeader from "../components/home/HomeHeader";
import FilterOptions from "../components/Chip";

export default function HomePage() {
  return (
    <Box>
      <HomeHeader />
      <FilterOptions />
    </Box>
  );
}
