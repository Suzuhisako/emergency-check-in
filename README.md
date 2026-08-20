#🚨 Global Emergency Check-In (Offline PWA)
A serverless, offline-first Progressive Web Application (PWA) designed to maintain critical family safety communications during major disasters when internet infrastructure and mobile data networks fail.

🌟 Key Features
100% Offline-First Architecture: Operates entirely inside the mobile browser using localStorage and Service Worker caching. Zero backend server dependency.

Resilient SMS Mesh Transport: Uses low-bandwidth cellular SMS to transmit structured safety status updates when 4G/5G/Wi-Fi networks are congested or down.

Universal Phone Number Support: Full E.164 international support (+1, +44, +81) with automatic normalization for domestic Japanese formats (090, 03).

Automated Data Payload Generation: Encodes current status, live battery level, notes, and timestamps into a standardized clipboard text payload.

Cross-Platform Compatibility: Works with default native text messaging apps globally (Apple Messages, Google Messages, Samsung Messages, +メッセージ).

Private & Secure: All data remains strictly on your local device. No personal information is ever collected or transmitted to a server.

📱 How It Works
[ Sender Device ]                                      [ Recipient Device ]
┌────────────────────────┐                             ┌────────────────────────┐
│ 1. Select Status       │                             │ 4. Receive SMS         │
│ 2. Tap "Copy Status"   │ ─── (Cellular SMS Channel) ─>│ 5. Paste payload into  │
│ 3. Paste into Text App │                             │    Import SMS Modal    │
└────────────────────────┘                             └────────────────────────┘
Update Status: Choose your safety condition (SAFE, NEED HELP, IN TRANSIT) and add an optional note.

Generate Payload: Tap Copy Status & Open Text App. The app formats your status, copies it to your clipboard, and launches your device's native messaging app.

Send & Import: Paste the payload into the message input box and hit send. The recipient copies the received SMS string into their app's Import SMS tool to update their local board.

## 🛠️ Deployment & Usage
### 1. Host Static Files
Deploy the single-page web app to any free static host supporting HTTPS:
* **GitHub Pages**
* **Cloudflare Pages**
* **Vercel / Netlify**

### 2. Pre-Disaster Family Setup (Essential)
1. **Install as Standalone App (Critical):** Open the app URL on your mobile browser (Safari on iOS, Chrome on Android) and select **Add to Home Screen**. You **must** install it as a standalone app rather than running it inside a browser tab. This locks all files into permanent local storage, prevents the operating system from clearing your offline cache, and guarantees instant 1-tap access during a crisis.
2. **Execute Initial Offline Cache:** Launch the app from your Home Screen at least once while connected to the internet so the Service Worker can cache all necessary files for complete offline availability.
3. **Pre-Register Contacts:** Open the app and save your family members' phone numbers into the local Family Board ahead of time (include country codes for international numbers, e.g., `+819012345678` or `+14155550100`).

🌍 Global Compatibility
The application utilizes the universal sms: URI scheme (RFC 5724) combined with clipboard API fallbacks, rendering it compatible across all global cellular operators and smartphone operating systems.

📄 License
MIT License — Free to use, modify, and distribute worldwide for disaster preparedness.
