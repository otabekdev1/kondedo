import { BrowserRouter, Route, Routes } from "react-router-dom";

import ClassesofNew from "./Components/ClassesNew/ClassesofNew";
import Home from "./Components/HOME-PAGE/Home";
import ProgramDetail from "./Components/ProgramDetails/ProgramDetail";
import Shop from "./Components/ShopMain/Shop";
import ClassDetail from "./Components/ClassDetails/ClassDetail";
import TimeTable from "./Components/TimeTable/TimeTable";
import TeacherDetail from "./Components/TeacherDetail/TeacherDetail";
import ScrollProgressBar from "./Components/assets/ScroolTop";
import Teacher from "./Components/Teacher/Teacher";
import Programs from "./Components/Programs/Programs";
import Contact from "./Components/Contact/Contact";
import AboutPg from "./Components/About/AboutPg";
import NewsPage from "./Components/NewsPage/NewsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/ProgramDetail" element={<ProgramDetail />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/ClassesofNew" element={<ClassesofNew />} />
          <Route path="/ClassDetails" element={<ClassDetail />} />
          <Route path="/TimeTable" element={<TimeTable />} />
          <Route path="/TeacherDetail" element={<TeacherDetail />} />
          <Route path="/Teacher" element={<Teacher />} />
          <Route path="/Programs" element={<Programs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<AboutPg />} />
          <Route path="/News" element={<NewsPage />} />
        </Routes>
        <ScrollProgressBar />
      </BrowserRouter>
    </>
  );
}

export default App;
