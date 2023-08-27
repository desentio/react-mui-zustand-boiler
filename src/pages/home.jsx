import { Box } from "@mui/material";
import HomeHeader from "../components/home/HomeHeader";
import Form from "../components/form/Form";

export default function HomePage() {
  return (
    <Box className="flex flex-col">
      <HomeHeader />
      <div className="p-5 mt-[100px]">
        <Form />
      </div>
    </Box>
  );
}
