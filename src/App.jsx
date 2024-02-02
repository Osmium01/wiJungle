import { useState } from "react";

import "./App.css";
import lan from "./language.js";
import Login from "./components/Login";
import Logotheme from "./components/Logo/Logotheme.jsx";

function App() {
  const [language, setLanguage] = useState("English");

  console.log(lan[language]);
  return (
    <>
    
    <div className="nav">
      <div className="language">
      <select
        className="select"
        name="cars"
        id="cars"
        defaultValue="English"
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
      >
        {Object.keys(lan).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      </div>
      </div>
      {/* -------------------------------------------------------------------------------------------------- */}
      <Logotheme />
      <div className="hero">
        <Login title={lan[language]} />
      </div>
    </>
  );
}

export default App;
