import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage/AdminPage";
import HomePage from "./pages/HomePage/HomePage";
import AdminForm from "./components/AdminForm/AdminForm";
import UserForm from "./components/UserForm/UserForm";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import CreateAdmin from "./pages/CreateAdmin/CreateAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />

        <Route path="/createAdmin" element={<CreateAdmin />} />

        <Route path="/authentication" element={<HomePage />}>
          <Route path="admin" element={<AdminForm />} />
          <Route path="user" element={<UserForm />} />
        </Route>

        <Route path="admin" element={<AdminPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
