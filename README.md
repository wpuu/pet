# Family Pet Judge 🐾

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.2.3-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC.svg)

A gentle, AI-powered mediation web application designed to resolve family conflicts between parents and children. By adopting the persona of a cute family pet (Cat, Dog, or Rabbit), this React + Vite tool acts as a bridge to soothe emotions, foster understanding, and propose actionable, warm resolutions. It utilizes Google's Gemini API to analyze the conflict and generate empathetic mediation scripts.

## ✨ Features

- **🐾 Pet Personas**: Choose from Cat, Dog, or Rabbit as the mediator. Each pet has its unique tone, emoji, and communication style.
- **👨‍👩‍👧 Dad Mode**: A specialized mediation mode where "Dad" steps in to gently resolve conflicts specifically between Mom and Daughter, promoting family harmony.
- **👶 Dynamic Age Adaptation**: The app adapts its language style and metaphors based on the child's age group (3-15 years old) to ensure the advice is comprehensible and effective.
- **🛡️ Safety First**: Built-in safety rules to detect severe scenarios (e.g., self-harm, abuse) and pivot to emergency alerts and professional help suggestions.
- **🏆 Intimacy Rewards**: Suggests micro-agreements and small, immediate actions (like a high-five or a secret handshake) to rebuild the parent-child bond.
- **💾 Local Storage**: Uses the browser's `localStorage` to save settings, drafts, and mediation records securely on your device.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **API Integration**: Google Gemini API (`gemini-3.1-flash-lite-preview` by default)

## 🛠️ Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/wpuu/pet.git
cd pet
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the provided local URL (usually `http://localhost:5173`).

### Build for Production

To build the app for production, run:
```bash
npm run build
```
The optimized files will be generated in the `dist` directory, ready to be deployed to Vercel, Netlify, or GitHub Pages.

## ⚙️ Configuration

Within the application's settings panel, you can configure:
- **Child Profile**: Name, gender, and birthday (to auto-calculate age).
- **Gemini API Key**: Your personal Google Gemini API key to power the AI mediation.
- **Pet Selection**: Choose your preferred mediator persona.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
