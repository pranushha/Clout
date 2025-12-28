import "../styles/Campaigns.css"

const Campaigns = () => {
  const brands = [
    {
      name: "Nykaa",
      logo: "💄",
      industry: "Beauty Industry",
      description:
        "Giveaway: Nykaa appreciates timely collaboration and gives creators the space to bring their unique voice to every campaign.",
      duration: "1 post + 2 stories",
      budget: "₹5,000/-",
      timeLeft: "15 days remaining",
      followers: "5k",
      color: "#FF1493",
    },
    {
      name: "Cult Fit",
      logo: "🏋️",
      industry: "Fitness Industry",
      description:
        "Event Collaboration: Join a brand that's transforming everyday fitness into a community celebration. Cult Fit values content that feels genuine, aspirational, and appreciative.",
      duration: "1 post",
      budget: "₹18,000/-",
      timeLeft: "2 days remaining",
      followers: "20k",
      color: "#272727",
    },
    {
      name: "Lenskart",
      logo: "👓",
      industry: "Eyewear Industry",
      description:
        "Product Promotion: Be part of a brand that redefines how the world sees style, confidence, and modernity. Lenskart wants to partner with influencers who have a fun yet loud impact.",
      duration: "1 day",
      budget: "₹7,000/-",
      timeLeft: "6 days remaining",
      followers: "10k",
      color: "#4169E1",
    },
  ]

  const tabs = ["For you", "Requests", "Applied", "Closed"]
  const filters = [
    "Campaign Type",
    "Platform",
    "Content Format",
    "Category/Industry",
    "Budget",
    "Campaign Duration",
    "Deliverables",
  ]

  return (
    <div className="campaigns-page">
      <div className="filters-bar">
        <button className="filter-icon">🔍</button>
        {filters.map((filter, index) => (
          <button key={index} className="filter-btn">
            {filter} <span className="dropdown-arrow">▼</span>
          </button>
        ))}
      </div>

      <div className="brands-section">
        <h2 className="brands-title">Brands</h2>

        <div className="tabs-container">
          {tabs.map((tab, index) => (
            <button key={index} className={`tab-btn ${index === 0 ? "active" : ""}`}>
              {index === 0 && "💝 "}
              {tab}
            </button>
          ))}
        </div>

        <div className="brands-list">
          {brands.map((brand, index) => (
            <div key={index} className="brand-card">
              <button className="favorite-btn">❤️</button>

              <div className="brand-header">
                <div className="brand-logo" style={{ color: brand.color }}>
                  {brand.logo}
                </div>
                <div className="brand-info">
                  <h3 className="brand-name">{brand.name}</h3>
                  <p className="brand-industry">{brand.industry}</p>
                </div>
              </div>

              <p className="brand-description">{brand.description}</p>

              <div className="brand-stats">
                <div className="stat-item">
                  <span className="stat-icon">⏱️</span>
                  <span className="stat-text">{brand.duration}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">💰</span>
                  <span className="stat-text">{brand.budget}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">📅</span>
                  <span className="stat-text">{brand.timeLeft}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">👥</span>
                  <span className="stat-text">{brand.followers}</span>
                </div>
              </div>

              <button className="apply-btn">Apply</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Campaigns
