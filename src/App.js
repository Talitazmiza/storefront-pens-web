import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import DetailProject from "./pages/DetailProject";
import Profile from "./pages/Profile";
import Dashboard from "./pages/admin/dashboard";
import DashboardStudent from "./pages/admin/dashboard-student";
import DashboardTechnology from "./pages/admin/dashboard-technologies";
import DashboardProjects from "./pages/admin/dashboard-projects";
import DashboardLecturer from "./pages/admin/dashboard-lecturer/dashboard-lecturer";

function App() {
  return (
    <div className="background">
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/detailproject" element={<DetailProject />} />
            <Route path="/detailproject/:id" element={<DetailProject />} />
            <Route path="/profile" element={<Profile />}/>
            <Route path="/dashboard" element={<Dashboard/> }/>
            <Route path="/dashboard-student" element={<DashboardStudent />} />
            <Route path="/dashboard-technology" element={<DashboardTechnology />} />
            <Route path="/dashboard-project" element={<DashboardProjects />}/>
            <Route path="/dashboard-lecturers" element={<DashboardLecturer />}/>
        </Routes>
    </div>
  );
}

export default App;
