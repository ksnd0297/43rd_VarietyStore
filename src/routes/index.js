import { Routes, Route } from "react-router-dom";

import App from "../App";
import ProfileView from "./views/profile";
import Tarot from "./views/tarot";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/profile" element={<ProfileView />}></Route>
      <Route path="/tarot" element={<Tarot />}></Route>
    </Routes>
  );
};
export default Router;
