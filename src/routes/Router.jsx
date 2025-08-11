import { Routes, Route } from "react-router-dom";
import Main from "../layouts/Main/Main.jsx";
import Homepage from "../page/Homepage.jsx"
function Router(){
    return(
        <>
          <Routes>
        <Route path ="/" element={<Main/>}>

           <Route index element={<Homepage />} />
        </Route>
        </Routes>
        </>
    )
}
export default Router;