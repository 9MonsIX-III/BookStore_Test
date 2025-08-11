import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import './Main.css';
function MainLayout(){
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>)
}
export default MainLayout