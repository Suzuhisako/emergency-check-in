# 🚨 Emergency Family Check-In (緊急安否確認アプリ)

A lightweight, offline-first Progressive Web App (PWA) designed for quick family status updates during power outages, natural disasters, or network congestion. 

When cellular data (4G/5G) or Wi-Fi networks fail, traditional messaging apps (Line, WhatsApp, Email) often stop working. This application formats essential safety details into compact, standardized **SMS text messages**—which can transmit reliably even on low-bandwidth cellular voice channels.

---

## ✨ Features

- 📱 **Offline-First:** Works completely offline directly in mobile browsers without requiring continuous network connectivity.
- 💬 **SMS Fallback:** Formats location, health status, and urgent needs into structured SMS text blocks ready for instant sending.
- ⚡ **Lite Edition (`index_lite.html`):** Ultra-lightweight standalone web app stripped of heavy assets for instant loading on older devices or congested networks.
- 📱 **Full PWA Edition (`index.html`):** Feature-rich Progressive Web App that can be installed directly onto your device with standalone app integration.
- 🌐 **Multi-Language Interface:** Available in dedicated English and Japanese options for clear, fast navigation.
- 🔐 **Privacy-Focused:** No central server or data collection. All contact details remain strictly on your local device.

---

## 🚀 Live Demos & Installation Guide

You can access and bookmark both versions directly on your smartphone:

| Edition | Direct URL | Installation Method |
| :--- | :--- | :--- |
| **Full Edition (PWA)** | [Launch Full App](https://suzuhisako.github.io/emergency-check-in/index.html) | **Standalone PWA App** (Installs to App Drawer & Home Screen) |
| **Lite Edition** | [Launch Lite Page](https://suzuhisako.github.io/emergency-check-in/index_lite.html) | **Home Screen Web Shortcut** (Direct web access) |

---

### 📲 How to Install on Smartphone

#### 1. Full Edition (Standalone PWA)
- **Android (Chrome):** Open `index.html` ➔ Tap menu (`⋮`) ➔ Select **"Install app"**.
- **iOS (Safari):** Open `index.html` ➔ Tap **Share icon** ➔ Select **"Add to Home Screen"**.

#### 2. Lite Edition (Home Screen Shortcut)
- **Android (Chrome):** Open `index_lite.html` ➔ Tap menu (`⋮`) ➔ Select **"Add to Home screen"**.
- **iOS (Safari):** Open `index_lite.html` ➔ Tap **Share icon** ➔ Select **"Add to Home Screen"**.

> **Note:** Installing the Full Edition as a PWA and adding the Lite Edition as a home screen shortcut allows both apps to sit side-by-side on your home screen without conflicts, while keeping offline capability for both!

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
├── manifest.json       # PWA Configuration File (Full Edition)
└── README.md           # Documentation
📄 License
This project is open-source and available under the MIT License.
