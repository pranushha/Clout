import "../styles/Dashboard.css"

const Dashboard = () => {
  const stats = [
    { icon: "👥", value: "658", label: "Accounts reached", change: "+1% from yesterday", color: "#FFE5E5" },
    { icon: "🔥", value: "300", label: "Accounts engaged", change: "+5% from yesterday", color: "#FFF4E5" },
    { icon: "✏️", value: "27", label: "Profile activity", change: "+12% from yesterday", color: "#E5F4FF" },
    { icon: "👤", value: "538", label: "UTM clicks", change: "+87 from yesterday", color: "#F0E5FF" },
  ]

  const categories = [
    { name: "Cosmetic & Beauty", popularity: 85, sales: "43%", color: "#99B3FC" },
    { name: "Fitness Industry", popularity: 70, sales: "22%", color: "#7BC9A3" },
    { name: "Eyewear Industry", popularity: 45, sales: "18%", color: "#DBC1F8" },
    { name: "Electronics", popularity: 30, sales: "8%", color: "#FFD69F" },
  ]

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2 className="section-title">Overview</h2>
        <button className="export-btn">📤 Export</button>
      </div>
      <p className="section-subtitle">Insights</p>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ background: stat.color }}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-change">{stat.change}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="charts-row">
        <div className="chart-card profile-activity">
          <h3 className="chart-title">Profile activity</h3>
          <div className="chart-placeholder">
            <div className="bar-chart">
              {[15, 18, 16, 20, 17, 16, 18].map((height, i) => (
                <div key={i} className="bar-group">
                  <div className="bar bar-blue" style={{ height: `${height * 8}px` }}></div>
                  <div className="bar bar-pink" style={{ height: `${(height - 5) * 8}px` }}></div>
                </div>
              ))}
            </div>
            <div className="chart-days">
              <span>Monday</span>
              <span>Tuesday</span>
              <span>Wednesday</span>
              <span>Thursday</span>
              <span>Friday</span>
              <span>Saturday</span>
              <span>Sunday</span>
            </div>
          </div>
        </div>

        <div className="chart-card gender-chart">
          <h3 className="chart-title">Gender</h3>
          <div className="line-chart-placeholder">
            <svg viewBox="0 0 300 150" className="gender-line-chart">
              <path d="M 0 80 Q 50 70, 100 75 T 200 60 T 300 85" stroke="#DBC1F8" strokeWidth="3" fill="none" />
              <path d="M 0 70 Q 50 65, 100 60 T 200 50 T 300 75" stroke="#99B3FC" strokeWidth="3" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      <div className="charts-row">
        <div className="chart-card">
          <h3 className="chart-title">Post interactions</h3>
          <div className="area-chart-placeholder">
            <div className="legend">
              <span className="legend-item">
                <span className="dot blue"></span> Last Month: 3,004
              </span>
              <span className="legend-item">
                <span className="dot green"></span> This Month: 4,504
              </span>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Target vs Reality</h3>
          <div className="bar-chart-simple">
            {[75, 85, 95, 90, 80, 100, 85].map((height, i) => (
              <div key={i} className="bar-pair">
                <div className="bar target-bar" style={{ height: `${height}px` }}></div>
                <div className="bar reality-bar" style={{ height: `${height - 10}px` }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="charts-row">
        <div className="chart-card category-card">
          <h3 className="chart-title">Top Category</h3>
          <table className="category-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, index) => (
                <tr key={index}>
                  <td>{String(index + 1).padStart(2, "0")}</td>
                  <td>{cat.name}</td>
                  <td>
                    <div className="popularity-bar">
                      <div
                        className="popularity-fill"
                        style={{ width: `${cat.popularity}%`, background: cat.color }}
                      ></div>
                    </div>
                  </td>
                  <td>
                    <span className="sales-badge" style={{ background: cat.color }}>
                      {cat.sales}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Engagement Mapping by Country</h3>
          <div className="map-placeholder">
            <div className="world-map">🗺️</div>
          </div>
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Outreach vs Engagement</h3>
          <div className="comparison-chart">
            {[60, 80, 70, 50, 90, 65, 75].map((val, i) => (
              <div key={i} className="comparison-pair">
                <div className="comp-bar outreach" style={{ height: `${val}px` }}></div>
                <div className="comp-bar engagement" style={{ height: `${val + 20}px` }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
