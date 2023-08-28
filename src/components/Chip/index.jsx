import { Container } from "@mui/material";
import ComponentChips from "./ChipFilter";
import Form from "./FormFilter";

const FilterOptions = () => {
  return (
    <div className="flex justify-center align-middle ">
      <Container
        maxWidth={"md"}
        className=" border-[#c2c2c2] border-2 mt-14 rounded-2xl p-10"
      >
        <h1 className="text-3xl font-bold">Some MUI Component</h1>
        <h1 className="text-lg mt-3">This is some text</h1>
        <ComponentChips />
        <Form />
      </Container>
    </div>
  );
};

export default FilterOptions;
