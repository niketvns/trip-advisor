import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Countries from "./pages/Countries.jsx";
import Destinations from "./pages/Destinations.jsx";
import DestinationDetails from "./pages/DestinationDetails.jsx";

function App() {

  return (
      <div className={'app-main bg-black/90 text-white min-h-[100vh]'}>
          <Routes>
              <Route path={'/'} element={<Home/>} />
              <Route path={'/:continentName/countries/:continentId'} element={<Countries/>} />
              <Route path={'/:countryName/destinations/:countryId'} element={<Destinations/>} />
              <Route path={'/destination-details'} element={<DestinationDetails/>} />
          </Routes>
      </div>
  )
}

export default App
