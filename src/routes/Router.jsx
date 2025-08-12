import { Routes, Route } from "react-router-dom";
import Main from "../layouts/Main/Main.jsx";
import Homepage from "../page/Homepage.jsx";
import Books from "../page/Books.jsx";
import Categories from "../page/Categories.jsx"; 
import About from "../page/Categories.jsx";
import Contact from "../page/Categories.jsx";
import Deals from "../page/Categories.jsx"; 

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Homepage />} />
          <Route path="books" element={<Books />} />
          <Route path="categories" element={<Categories />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="deals" element={<Deals />} />
        </Route>
      </Routes>
    </>
  );
}
export default Router;