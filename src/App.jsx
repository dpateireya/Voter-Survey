import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";
import DashboardPage from "./components/DashboardPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RegistrationPage />} path="/" />
          <Route element={<DashboardPage />} path="/dashboard" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
