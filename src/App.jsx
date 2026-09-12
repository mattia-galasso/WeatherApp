import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import SettingsPage from "./pages/SettingsPage";

export default function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route index element={<Homepage/>} />
      <Route path="settings" element={<SettingsPage/>} />
    </Routes>
  </BrowserRouter>
  </>
  );
}
