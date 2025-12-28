import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import {
  BarChart3,
  PieChart,
  User,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  Sparkles,
} from "lucide-react"
import "../styles/Sidebar.css"

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
  const [isOpen, setIsOpen] = useState(!isMobile)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024
      setIsMobile(mobile)
      if (!mobile) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const menuItems = [
    { name: "Campaigns", icon: <BarChart3 size={18} />, path: "/campaigns" },
    { name: "Dashboard", icon: <PieChart size={18} />, path: "/dashboard" },
    { name: "Profile", icon: <User size={18} />, path: "/profile" },
    { name: "Messages", icon: <MessageSquare size={18} />, path: "/messages" },
    { name: "Settings", icon: <Settings size={18} />, path: "/settings" },
  ]

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {isMobile && (
        <button className="mobile-menu-button" onClick={toggleSidebar}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}
      <aside className={`sidebar ${isOpen ? 'open' : ''} ${isMobile ? 'mobile' : ''}`}>
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

        {/* SIGN OUT */}
        <button className="nav-item sign-out">
          <span className="nav-icon">
            <LogOut size={18} />
          </span>
          <span className="nav-text">Sign Out</span>
        </button>

       {/* PRO CARD */}
    <div className="pro-card">
    <div className="pro-icon">
    <Sparkles size={24} fill="currentColor" strokeWidth={1} />
    </div>

    <h3 className="pro-title">Clout Pro</h3>

    <p className="pro-text">
    Get access to all features and exclusive deals
    </p>

  <button className="pro-btn">Get Pro</button>
</div>


        </nav>
      </aside>
      {isOpen && isMobile && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </>
  )
}

export default Sidebar
