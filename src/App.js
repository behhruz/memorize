import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import data from "./utils/navbar";
import HomePage from "./components/home";
import './index.css'
function App() {
  return (
    <div className="Wrapper">
      <Routes>
        <Route path="*" element={<h1>404 page a not found</h1>} />
        <Route path="/" element={<HomePage />} />
        {data.map(({ path, element, id }) => {
          return <Route key={id} path={path} element={element} />;
        })}
      </Routes>
      <Navbar/>
    </div>
  );
}

export default App;
