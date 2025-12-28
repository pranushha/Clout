"use client"

import { useState } from "react"
import "../styles/Messages.css"

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(0)

  const conversations = [
    { id: 0, name: "Nykaa", preview: "Need this on priority...", logo: "💄", unread: true },
    { id: 1, name: "Cultfit", preview: "Hey", logo: "🏋️", unread: false },
    { id: 2, name: "Lenskart", preview: "Hello", logo: "👓", unread: false },
    { id: 3, name: "Nykaa", preview: "Need this on priority...", logo: "💄", unread: false },
    { id: 4, name: "Cultfit", preview: "Hey!", logo: "🏋️", unread: false },
    { id: 5, name: "Lenskart", preview: "Hello", logo: "👓", unread: false },
  ]

  const messages = [
    {
      sender: "brand",
      text: "Hi Kendall, we love your content! 💝 We're reaching out to see if you'd be interested in collaborating with Nykaa on our upcoming festive campaign.",
      image: "/images/image.png",
    },
    {
      sender: "brand",
      text: "Amazing! The campaign is around our festive beauty collection. We'd like you to create 2 reels showcasing your favorite products from the collection. We'll provide the products and remuneration.",
    },
    {
      sender: "user",
      text: "Hi Nykaa! Thank you so much 💝 I'd love to hear more about the campaign details.",
    },
    {
      sender: "user",
      text: "That sounds exciting ✨ Could you please share the deliverables, timelines, and budget so I can review?",
    },
    {
      sender: "brand",
      text: "Of course! We'll send over the brief and contract by tomorrow. Looking forward to working with you!",
    },
  ]

  return (
    <div className="messages-page">
      <div className="messages-sidebar">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className={`conversation-item ${selectedChat === conv.id ? "active" : ""} ${conv.unread ? "unread" : ""}`}
            onClick={() => setSelectedChat(conv.id)}
          >
            <div className="conv-logo">{conv.logo}</div>
            <div className="conv-info">
              <h4 className="conv-name">{conv.name}</h4>
              <p className="conv-preview">{conv.preview}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-area">
        <div className="chat-header">
          <div className="chat-brand-info">
            <div className="chat-brand-logo">💄</div>
            <div>
              <h3 className="chat-brand-name">Nykaa</h3>
              <p className="chat-brand-industry">Cosmetic Industry</p>
            </div>
          </div>
          <div className="chat-actions">
            <button className="chat-action-btn">📹</button>
            <button className="chat-action-btn">📞</button>
          </div>
        </div>

        <div className="campaign-preview">
          <div className="campaign-preview-logo">💄</div>
          <div className="campaign-preview-info">
            <h4 className="campaign-preview-title">Nykaa</h4>
            <p className="campaign-preview-subtitle">Cosmetic Industry</p>
            <p className="campaign-preview-description">
              Giveaway: Nykaa appreciates timely collaboration and gives creators the space to bring their unique voice
              to every campaign.
            </p>
            <div className="campaign-preview-stats">
              <span className="preview-stat">⏱️ 1 post + 2 stories</span>
              <span className="preview-stat">💰 ₹5,000/-</span>
              <span className="preview-stat">📅 15 days remaining</span>
              <span className="preview-stat">👥 5k</span>
            </div>
          </div>
          <button className="campaign-interested-btn">Interested</button>
        </div>

        <div className="messages-container">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.image && <img src={msg.image || "/placeholder.svg"} alt="Campaign" className="message-image" />}
              <div className="message-bubble">{msg.text}</div>
            </div>
          ))}
        </div>

        <div className="message-input-container">
          <input type="text" placeholder="Type a message" className="message-input" />
          <button className="send-btn">➤</button>
        </div>
      </div>
    </div>
  )
}

export default Messages
