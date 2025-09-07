import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User routes */}
        <Route path="/" element={<UserLayout />} />

        {/* Admin routes example */}
        {/* <Route path="/admin" element={<AdminLayout />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
