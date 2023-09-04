import { Box } from "@mui/material";
import HomeHeader from "../components/home/HomeHeader";
import { Link } from "react-router-dom";
Link

export default function HomePage() {
  return (
    <Box>
      <HomeHeader />
      <div className="px-10">
        <Link to={"/config"}>go to Filter Param Page</Link>
      </div>
    </Box>
  )
}
