import { useLocation } from "react-router-dom"
import "../styles/Header.css"
import { UserCircle2, Bell, Search} from "lucide-react"


const Header = () => {
  const location = useLocation()

  const getPageTitle = () => {
    const path = location.pathname.slice(1)
    return path.charAt(0).toUpperCase() + path.slice(1) || "Dashboard"
  }

  const isProfilePage = location.pathname === "/profile"

  return (
    <header className="header">
      <h1 className="page-title">{isProfilePage ? "Welcome Kendall" : getPageTitle()}</h1>

      <div className="header-right">
      <div className="search-bar">
      <span className="search-icon">
      <Search size={16} />
      </span>
      <input type="text" placeholder="Search here..." />
      </div>

      <button className="notification-btn" aria-label="Notifications">
      <Bell size={18} />
      <span className="notification-badge"></span>
      </button>


        {!isProfilePage && (
          <div className="user-profile">
            <UserCircle2 className="user-avatar-small" />
            <div className="user-info">
              <span className="user-name">Kendall</span>
              <span className="user-role">Admin</span>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
