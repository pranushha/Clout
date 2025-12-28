import { useLocation } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"
import "../styles/Layout.css"

const Layout = ({ children }) => {
  const location = useLocation()

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">{children}</div>
      </div>
    </div>
  )
}

export default Layout
