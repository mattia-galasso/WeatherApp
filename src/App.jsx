import { BrowserRouter, Route, Routes } from "react-router";

/* LAYOUT */
import DefaultLayout from "./layouts/DefaultLayout";

/* PAGES */
import Homepage from "./pages/Homepage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route Component={DefaultLayout}>
        <Route index element={<Homepage/>} />
        <Route path="settings" element={<SettingsPage/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}
