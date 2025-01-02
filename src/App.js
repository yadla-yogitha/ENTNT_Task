import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { Bell } from "lucide-react";
import { useCommunication } from "./context/data";
import AdminModule from "./routes/adminModule";
import UserDashboard from "./routes/userDashboard";
import CalendarView from "./components/notificationCalander";
import CompanyListPage from "./routes/companies";
import NotificationsPage from "./components/notification";
import Analytics from "./routes/Analytical"; // Correct import

import "./App.css";

function App() {
  const { overdueCommunicationsCount } = useCommunication();

  return (
    <Router>
      <div className="app-container">
        <nav className="main-navigation">
          <div className="logo">Communication Tracker</div>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Add Company
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/company"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Company List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/calendar"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Calendar
              </NavLink>
            </li>
            <li>
              <NavLink to="/analytics" className="analytics-link">
                Analytics
              </NavLink>
            </li>
            <li>
              <NavLink to="/notification" className="overdue-notification">
                <Bell size={24} />
                {overdueCommunicationsCount > 0 && (
                  <span className="notification-badge">
                    {overdueCommunicationsCount}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<UserDashboard />} />
            <Route path="/admin" element={<AdminModule />} />
            <Route path="/calendar" element={<CalendarView />} />
            <Route path="/company" element={<CompanyListPage />} />
            <Route path="/notification" element={<NotificationsPage />} />
            <Route path="/analytics" element={<Analytics />} /> {/* New route for Analytics */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
