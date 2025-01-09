import {Routes, Route} from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/auth";
import Home from "./components/common-form/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>

    // <Home />
  );
}

export default App;
