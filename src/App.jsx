import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Countries from "./pages/Countries.jsx";
import Destinations from "./pages/Destinations.jsx";
import DestinationDetails from "./pages/DestinationDetails.jsx";

function App() {

  return (
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/countries'} element={<Countries/>} />
        <Route path={'/destinations'} element={<Destinations/>} />
        <Route path={'/destination-details'} element={<DestinationDetails/>} />
      </Routes>
  )
}

export default App
