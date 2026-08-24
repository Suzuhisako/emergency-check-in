# 🚨 Emergency Family Check-In (緊急安否確認アプリ)

A lightweight, offline-first Progressive Web App (PWA) designed for quick family status updates during power outages, natural disasters, or network congestion. 

When cellular data (4G/5G) or Wi-Fi networks fail, traditional messaging apps (Line, WhatsApp, Email) often stop working. This application formats essential safety details into compact, standardized **SMS text messages**—which can transmit reliably even on low-bandwidth cellular voice channels.

---

## ✨ Features

- 📱 **Offline-First (PWA):** Works completely offline directly in mobile browsers without requiring app store installation.
- 💬 **SMS Fallback:** Formats location, health status, and urgent needs into structured SMS text blocks ready for instant sending.
- ⚡ **Lite Edition (`index_lite.html`):** Ultra-lightweight version stripped of heavy assets for instant loading on older phones or weak signals.
- 🌐 **Independent Language Versions:** Available in dedicated English and Japanese interfaces for intuitive emergency access.
- 🔐 **Privacy-Focused:** No central server or data collection. All contact data remains locally stored on your phone.

---

## 🚀 Live Demos

You can access or bookmark the live web apps directly on your smartphone:

| Edition | English Version | Japanese Version (日本語) |
| :--- | :--- | :--- |
| **Lite Edition** | [Launch Lite (EN)](https://suzuhisako.github.io/emergency-check-in/index_lite.html) | *(Coming Soon)* |
| **Full Edition** | [Launch Full (EN)](https://suzuhisako.github.io/emergency-check-in/index.html) | *(Coming Soon)* |

> **Pro Tip:** Open the link on your mobile phone, open your browser menu (`⋮` or Share icon), and tap **"Add to Home Screen"** for offline access during emergencies.

---

## 📑 SMS Format & Examples

To keep messages reliable during network strain, the application encodes safety status into a structured text template. 

### SMS Template Structure
```text
[STATUS] | [NAME] | [LOCATION] | [NEEDS/NOTES] | [TIMESTAMP]
Examples
1. Safe Status Update
[SAFE] | Hanako | Home (2nd Floor) | Power is out, but we have battery & water. | 10:42 AM

2. Assistance Needed
[NEED HELP] | Taro | Near Station Exit 3 | Minor injury on left leg. Need first-aid supplies. | 02:15 PM

3. Evacuation Notice
[EVACUATING] | Kenji & Family | Moving to Central High School Shelter | Leaving home due to flood warning. | 08:05 AM

🛠️ Repository Structure
Plaintext
emergency-check-in/
├── index.html          # Full PWA Application (English)
├── index_lite.html     # Ultra-lightweight standalone version (English)
├── sw.js               # Service Worker for offline caching
├── manifest.json       # PWA Configuration File
└── README.md           # Documentation
📄 License
This project is open-source and available under the MIT License.
