import { Box } from "@mui/material";
import HomeHeader from "../components/home/HomeHeader";

export default function BlogListPage() {
  return (
    <Box>
      <HomeHeader />

      <iframe
        src="https://faisaliqbalfolio.netlify.app/"
        className="h-[100vh] w-[100vw]"
      ></iframe>
    </Box>
  );
}
