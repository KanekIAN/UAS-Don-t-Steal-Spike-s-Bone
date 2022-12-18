import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Halaman from "./halaman";
import Main from "./main";
import Kalah from "./kalah";
import Coba from "./coba"

  
function App() {
    
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Halaman/>}/>
        <Route exact path="/main" element={<Main/>}/>
        <Route exact path="/kalah" element={<Kalah/>}/>
        <Route exact path="/coba" element={<Coba/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}
  
export default App;