import React, { useContext} from 'react';
import Home from "./Pages/Home/Home";
import List from './Pages/List/List';
import App1 from './components/App1';
import New from './Pages/New/New';
import Single from './Pages/Single/Single';
import{ BrowserRouter, Routes, Route} from "react-router-dom";
import { productInputs, userInputs } from './formSource';
import "./style/dark.scss";
import { DarkModeContext } from './context/darkModeContext';

function App() {

  const{darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<App1/>}/>
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New inputs= {userInputs} title="Add New User"/>}/>
            </Route>
            <Route path="product">
              <Route index element={<List/>}/>
              <Route path=":productId" element={<Single/>}/>
              <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
 