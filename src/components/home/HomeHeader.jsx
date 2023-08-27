import { Box } from "@mui/material";
import useStore from "../../store";

export default function HomeHeader() {
  const homeText = useStore((state) => state.staticStore.homeText);

  return (
    <Box className="bg-slate-500 rounded-md text-center p-5 max-w-xs mx-auto text-white">
      {homeText}
    </Box>
  );
}
