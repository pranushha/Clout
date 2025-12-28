"use client"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Layout from "../src/components/Layout"
import Dashboard from "../src/pages/Dashboard"
import Campaigns from "../src/pages/Campaigns"
import Profile from "../src/pages/Profile"
import Messages from "../src/pages/Messages"
import Settings from "../src/pages/Settings"
import "../src/styles/global.css"

export default function Page() {
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
