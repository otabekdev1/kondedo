import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClassesofNew from "./Components/ClassesNew/ClassesofNew";
import Home from "./Components/HOME-PAGE/Home";
import ProgramDetail from "./Components/ProgramDetails/ProgramDetail";
import Shop from "./Components/ShopMain/Shop";
import ClassDetail from "./Components/ClassDetails/ClassDetail";
function App() {
  const container = "container max-w-[1440px] m-auto";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/ProgramDetail" element={<ProgramDetail />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/ClassesofNew" element={<ClassesofNew />} />{" "}
          <Route path="/ClassDetails" element={<ClassDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
