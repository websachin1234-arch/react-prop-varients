import { Routes, Route } from "react-router-dom";

import Hub from "./views/Hub";
import Podcast from "./views/Podcast";
import Report from "./views/Report";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route path="/podcast" element={<Podcast />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
};

export default App;