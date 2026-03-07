# Prabhav Saxena - Personal Portfolio

![Portfolio Preview](./docs/preview-placeholder.png) <!-- Replace with an actual screenshot of your portfolio -->

## 📖 Description

A sleek, futuristic, and highly interactive personal portfolio website built to showcase my projects, technical experience, and achievements. The application features a custom HTML5 Canvas particle background, a modern glassmorphic UI, smooth scroll animations, and a built-in print-ready resume generator. It is designed to be fully responsive and performant across all devices.

## ✨ Features

- **Interactive Canvas Background:** A custom-built HTML5 Canvas animation featuring drifting particles and connecting network lines.
- **Glassmorphic UI:** Modern, translucent interface elements built with Tailwind CSS.
- **Smooth Animations:** Page transitions and scroll-triggered animations powered by Framer Motion.
- **Print-Ready Resume:** A hidden, ATS-friendly, black-and-white resume layout that automatically activates when users click "Download Resume" or print the page.
- **Scroll Spy Navigation:** A sticky navigation bar that highlights the current section as you scroll.
- **Data-Driven Architecture:** All portfolio content is dynamically rendered from a single `resume.json` file, making updates effortless.
- **Fully Responsive:** Optimized for mobile, tablet, and desktop viewing experiences.

## 🚀 Live Demo

[Click here to view the Live Demo](#) *(Replace `#` with your actual deployment link, e.g., Vercel, Netlify, or GitHub Pages)*

## 🛠️ Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | React 18 | Component-based UI library |
| **Language** | TypeScript | Strongly typed programming language |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **Animations** | Framer Motion | Production-ready animation library for React |
| **Icons** | Lucide React | Clean, consistent SVG icons |
| **Build Tool** | Vite | Next-generation frontend tooling |

## 💻 How to Run (Local Setup)

Follow these steps to set up and run the project locally on your machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Prabhav-1525/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` (or the port provided in your terminal) to view the application.

## 📸 Testing Screenshots

*(Add screenshots of your application here to show off the UI)*

### Hero Section
![Hero Section](./docs/hero-placeholder.png)

### Technical Experience
![Technical Experience](./docs/tech-placeholder.png)

### Print-Ready Resume
![Print View](./docs/print-placeholder.png)

## 🔌 API Reference

This application is designed as a static Single Page Application (SPA) and does not rely on an external backend API. 

Instead, it uses a local JSON data structure as its primary data source. To update the portfolio content, simply modify the JSON file:

- **Data Source:** `/src/data/resume.json`
- **Structure:** Contains objects for `basics`, `experience`, `projects`, `Technical Experience`, `education`, and `certifications`.

Example Data Structure:
```json
{
  "basics": {
    "name": "Prabhav Saxena",
    "email": "prabhavsaxena1525@gmail.com",
    "links": [
      { "name": "GitHub", "url": "https://github.com/Prabhav-1525" }
    ]
  }
}
```

## 👨‍💻 Author

Developed and maintained by **Prabhav Saxena**.

- GitHub: [@Prabhav-1525](https://github.com/Prabhav-1525)
- LinkedIn: [Prabhav Saxena](https://www.linkedin.com/in/prabhav-saxena15)
- Email: prabhavsaxena1525@gmail.com
