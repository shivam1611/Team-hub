import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage/AdminPage";
import HomePage from "./pages/HomePage/HomePage";
import AdminForm from "./components/AdminForm/AdminForm";
import UserForm from "./components/UserForm/UserForm";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import CreateAdmin from "./pages/CreateAdmin/CreateAdmin";
import store from "./store";
import UserPage from "./pages/UserPage/UserPage";
import CreateUser from "./pages/CreateUser/CreateUser";


function App() {
  // console.log(store.getState())
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />

        <Route path="/createAdmin" element={<CreateAdmin />} />

        <Route path="/authentication" element={<HomePage />}>
          <Route path="admin" element={<AdminForm />} />
          <Route path="user" element={<UserForm />} />
        </Route>

        <Route path="/admin" element={<AdminPage />} />

        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path ='/userData' element={<UserPage/>}/>
        <Route path="/createUser" element={<CreateUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
