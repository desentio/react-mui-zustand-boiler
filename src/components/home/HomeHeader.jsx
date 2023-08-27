import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomeHeader() {
  const navigate = useNavigate();
  return (
    <Box className="bg-slate-800 p-5 px-10 w-[100vw] text-white fixed top-0">
      <div className="flex justify-between items-center">
        <p>Faisal Iqbal</p>
        <span className="flex gap-3">
          <p
            onClick={() => navigate("/")}
            className="hover:text-slate-500 cursor-pointer"
          >
            Home
          </p>
          <p
            onClick={() => navigate("/blog")}
            className="hover:text-slate-500 cursor-pointer"
          >
            Blog
          </p>
        </span>
      </div>
    </Box>
  );
}
