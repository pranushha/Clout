import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Layout from "./components/Layout.jsx"
import Dashboard from "./pages/Dashboard"
import Campaigns from "./pages/Campaigns"
import Profile from "./pages/Profile"
import Messages from "./pages/Messages"
import Settings from "./pages/Settings"
import "./styles/global.css"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
