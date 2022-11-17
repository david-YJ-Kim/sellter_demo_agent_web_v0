import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import Hello from "./routes/Hello";
import Home from "./routes/Home";
import "./App.css";
import Login from "./routes/LogIn";
import BizAccount from "./routes/BizAccount";
import SalesManagement from "./routes/SalesManagement";
import KeywordCollection from "./routes/KeywordCollection​";
import ItemDeploy from "./routes/ItemDeploy";
import ItemCollection from "./routes/ItemCollection";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bizAccount" element={<BizAccount />} />
        <Route path="/itemCollection" element={<ItemCollection />} />
        <Route path="/itemDeploy" element={<ItemDeploy />} />
        <Route path="/keywordCollection" element={<KeywordCollection />} />
        <Route path="/salesManagement" element={<SalesManagement />} />
      </Routes>
    </Router>
  );
}
