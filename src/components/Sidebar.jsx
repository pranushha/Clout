import { NavLink } from "react-router-dom"
import {
  BarChart3,
  PieChart,
  User,
  MessageSquare,
  Settings,
  LogOut,
  Crown,
   Sparkles,
} from "lucide-react"
import "../styles/Sidebar.css"

const Sidebar = () => {
  const menuItems = [
    { name: "Campaigns", icon: <BarChart3 size={18} />, path: "/campaigns" },
    { name: "Dashboard", icon: <PieChart size={18} />, path: "/dashboard" },
    { name: "Profile", icon: <User size={18} />, path: "/profile" },
    { name: "Messages", icon: <MessageSquare size={18} />, path: "/messages" },
    { name: "Settings", icon: <Settings size={18} />, path: "/settings" },
  ]

  return (
    <aside className="sidebar">
  {/* LOGO */}
  <div className="logo">
    <span className="logo-icon">
      <Sparkles size={18} />
    </span>
    <span className="logo-text">CLOUT</span>
  </div>

      <nav className="nav-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.name}</span>
          </NavLink>
        ))}

        {/* PRO CARD (small) */}
        <div className="pro-card">
          <Crown size={14} />
          <span>Go Pro</span>
        </div>

        {/* SIGN OUT */}
        <button className="nav-item sign-out">
          <span className="nav-icon">
            <LogOut size={18} />
          </span>
          <span className="nav-text">Sign Out</span>
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar
