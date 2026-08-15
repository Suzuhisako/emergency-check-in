# 🚨 Family Emergency Board

A Progressive Web App (PWA) designed to quickly and safely share emergency status updates among family members during disasters or network disruptions, working completely offline.

---

## 🌟 Key Features

- **Full Offline Support**: Launches and operates without an active internet or cellular data connection.
- **Real-Time Battery Detection**: Automatically attaches your phone's current battery percentage to outbound emergency status updates.
- **Misdelivery Guardrail**: Resets the recipient dropdown to blank on app launch to prevent accidental texts.
- **Cross-Platform PWA**: Runs as a standalone full-screen application on both iOS (Safari) and Android (Chrome).
- **JSON Data Management**: Easily export and restore family contacts via lightweight `.json` backup files across devices.

---

## 🔘 Buttons & Features Guide

Below is a detailed guide explaining the controls and interactive features in the application:

### 1. Select Recipient (Dropdown Menu)
- **Function**: Selects which family member to contact.
- **Safety Guardrail**: Automatically defaults to `-- Select Family Member --` (blank) every time the app opens. If you tap the send button without choosing a recipient, an alert triggers to prevent accidental misdelivery.

### 2. 📲 Copy Status & Open SMS (Button)
- **Function**: Compiles your status into a clean, structured message, copies it directly to your phone's clipboard, and launches your default messaging application (SMS, iMessage, +メッセージ, etc.).
  - **Formatted Message Example**:  
    `[EMERGENCY CHECK-IN] Status: SAFE | Batt: 95% | Note: At shelter near school`
- **Offline Reliability**: Even if your phone is out of service range or in Airplane Mode, the status payload is safely saved to your clipboard. Once cellular connectivity returns, simply paste the message into your chat thread and send.

### 3. 📤 Export Backup (Button)
- **Function**: Downloads your saved family list (names, phone numbers, and notes) as a `.json` backup file (`family_board_backup_YYYY-MM-DD.json`) to your device's **Downloads** folder.
- **Use Cases**: 
  - Creating a local safety backup of your configuration.
  - Transferring your configured family list to another family member's phone without manual data entry.

### 4. 📥 Import Backup (Button)
- **Function**: Opens your device's file picker to select a previously saved `.json` backup file and restore (overwrite) the family board data instantly.
- **Mobile Optimized**: Configured with a universal filter (`accept="*/*"`) so mobile web browsers (Safari & Chrome) can easily select `.json` files from local storage. Triggers a confirmation pop-up prior to overwriting data.

---

## 📱 Installation Guide (Standalone App)

Installing the app on your home screen allows it to open full-screen like a native application without browser address bars.

### iOS (iPhone / iPad - Safari)
1. Open the app link in **Safari**.
2. Tap the **Share button** (square with an upward arrow) at the bottom of the screen.
3. Scroll down and tap **"Add to Home Screen"**.

### Android (Google Chrome)
1. Open the app link in **Google Chrome**.
2. Tap the **three vertical dots** (menu icon) in the top-right corner.
3. Tap **"Install app"** or **"Add to Home screen"**.

---

## 📄 License
Personal / Family Use
