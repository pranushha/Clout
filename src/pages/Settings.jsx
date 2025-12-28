import "../styles/Settings.css"

const Settings = () => {
  return (
    <div className="settings-page">
      <div className="settings-container">
        <h2 className="settings-title">Account Settings</h2>

        <div className="settings-section">
          <h3 className="settings-section-title">Notifications</h3>
          <div className="settings-item">
            <div className="settings-item-info">
              <p className="settings-item-label">Email Notifications</p>
              <p className="settings-item-desc">Receive email updates about campaigns and messages</p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" defaultChecked />
              <span className="toggle-slider"></span>
            </label>
          </div>
          <div className="settings-item">
            <div className="settings-item-info">
              <p className="settings-item-label">Push Notifications</p>
              <p className="settings-item-desc">Get notified about new opportunities</p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" defaultChecked />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <h3 className="settings-section-title">Privacy</h3>
          <div className="settings-item">
            <div className="settings-item-info">
              <p className="settings-item-label">Profile Visibility</p>
              <p className="settings-item-desc">Make your profile visible to brands</p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" defaultChecked />
              <span className="toggle-slider"></span>
            </label>
          </div>
          <div className="settings-item">
            <div className="settings-item-info">
              <p className="settings-item-label">Show Analytics</p>
              <p className="settings-item-desc">Display your performance metrics publicly</p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <h3 className="settings-section-title">Account</h3>
          <div className="settings-item clickable">
            <div className="settings-item-info">
              <p className="settings-item-label">Change Password</p>
              <p className="settings-item-desc">Update your account password</p>
            </div>
            <span className="arrow-right">→</span>
          </div>
          <div className="settings-item clickable">
            <div className="settings-item-info">
              <p className="settings-item-label">Delete Account</p>
              <p className="settings-item-desc">Permanently remove your account</p>
            </div>
            <span className="arrow-right">→</span>
          </div>
        </div>

        <button className="save-settings-btn">Save Changes</button>
      </div>
    </div>
  )
}

export default Settings
