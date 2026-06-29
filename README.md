Markdown
# ☁️ AuraWeather

A modern, responsive, and secure weather dashboard built with Next.js and TypeScript. AuraWeather provides real-time weather details for any city worldwide with a dynamic, glassmorphism-inspired user interface.

## ✨ Features

- **Real-time Weather Data:** Fetches live weather conditions, wind speed, and humidity using the XWeather API.
- **Dynamic Search:** Users can search for any city globally (e.g., `tehran,ir` or `london,uk`) to get instant updates via the Header search component.
- **Secure Architecture (Full-Stack):** Implements a secure Next.js API Route (`/api/weather`) to protect sensitive API credentials (`client_secret`) from being exposed to the client-side browser.
- **Environment Variables:** Uses `.env.local` for secure management of API credentials.
- **Glassmorphism UI:** A sleek, beautiful glass-effect card design optimized for all screen sizes.
- **TypeScript:** Fully typed components and API handlers for robust error prevention and code quality.

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules
- **State Management:** React Hooks (`useState`, `useEffect`)
- **API Integration:** Native Fetch API with Optional Chaining for crash-free data rendering

## 🛠️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone [https://github.com/KDMahdi/weather.git](https://github.com/KDMahdi/weather.git)
Install dependencies:

Bash
npm install
Create a .env.local file in the root directory and add your XWeather credentials:

Code snippet
XWEATHER_CLIENT_ID=your_client_id_here
XWEATHER_CLIENT_SECRET=your_client_secret_here
Run the development server:

Bash
npm run dev
