import "../styles/Profile.css"

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <img src="/images/image.png" alt="Profile" className="profile-avatar" />
          <div className="profile-info">
            <h2 className="profile-name">Kendall Jenner</h2>
            <p className="profile-email">kendall@gmail.com</p>
          </div>
        </div>

        <div className="profile-form">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Your First Name" />
            </div>
            <div className="form-group">
              <label>Nick Name</label>
              <input type="text" placeholder="Your First Name" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Gender</label>
              <select>
                <option>Your First Name</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Country</label>
              <select>
                <option>Your First Name</option>
                <option>United States</option>
                <option>United Kingdom</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Language</label>
              <select>
                <option>Your First Name</option>
                <option>English</option>
                <option>Spanish</option>
              </select>
            </div>
            <div className="form-group">
              <label>Time Zone</label>
              <select>
                <option>Your First Name</option>
                <option>EST</option>
                <option>PST</option>
              </select>
            </div>
          </div>

          <div className="email-section">
            <h3 className="section-heading">My email Address</h3>
            <div className="email-item">
              <div className="email-icon">📧</div>
              <div className="email-details">
                <p className="email-address">kendall@gmail.com</p>
                <p className="email-time">1 month ago</p>
              </div>
            </div>
          </div>

          <div className="social-section">
            <h3 className="section-heading">Social Media Accounts</h3>
            <div className="social-item">
              <div className="social-icon instagram">📷</div>
              <div className="social-details">
                <p className="social-username">@Kendall</p>
                <p className="social-time">1 month ago</p>
              </div>
            </div>
            <button className="add-account-btn">+Add Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
