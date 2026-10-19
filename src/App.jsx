import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Hub from "./views/Hub";
import Podcast from "./views/Podcast";
import Report from "./views/Report";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  function toggleDarkmode() {
    const body = document.body;
    if (body.getAttribute("theme") === "dark") {
      body.removeAttribute("theme");
      body.classList.add("bg-white");
      body.classList.remove("bg-black");
      setIsDark(false);
    } else {
      body.setAttribute("theme", "dark");
      body.classList.add("bg-black");
      body.classList.remove("bg-white");
      setIsDark(true);
    }
  }

  return (
    <>
      <button className="text-gray-500" onClick={toggleDarkmode}>
        {isDark ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>

      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </>
  );
};

export default App;