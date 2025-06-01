# 📦 Frontend Test

A modern frontend application built with [Next.js](https://nextjs.org/) (App Router) and Tailwind CSS. This project serves as a demonstration of a clean, scalable architecture using the latest features of the Next.js framework.

## 🚀 Live Demo

👉 [frontend-test-ashy-ten.vercel.app](https://frontend-test-ashy-ten.vercel.app)

---

## 📁 Project Structure

The project is organized to promote clarity and maintainability:

```
frontend-test/
├── app/                # App Router pages and layouts
│   └── page.js         # Main entry point
├── components/         # Reusable UI components
├── constant/           # Static values and configuration constants
├── libs/               # Shared libraries or custom hooks
├── public/             # Static assets (images, icons, etc.)
├── utils/              # Utility functions
├── .vscode/            # Editor settings (optional)
├── .gitignore
├── README.md
├── package.json
├── next.config.mjs     # Next.js configuration
├── postcss.config.mjs  # PostCSS configuration
├── eslint.config.mjs   # ESLint configuration
├── jsconfig.json       # JavaScript project configuration
└── package-lock.json
```

### Key Directories

- **`app/`**: Utilizes Next.js App Router for routing and layout management.
- **`components/`**: Contains modular and reusable UI components.
- **`constant/`**: Stores static constants and configuration values.
- **`libs/`**: Houses shared libraries and custom hooks.
- **`utils/`**: Contains utility functions for various operations.

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (version 7 or higher)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/TruongCongTri/frontend-test-ver2.git
   cd frontend-test-ver2
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🧩 Features

- ✅ Next.js App Router (`app/` directory)
- ✅ Tailwind CSS for utility-first styling
- ✅ Modular component architecture
- ✅ Clean and scalable project structure
- ✅ ESLint configured for code quality

---

## ❓ Why Next.js (Without TypeScript)

### Why Next.js?

Next.js offers a robust framework for building React applications with features like:

- **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)**
- **API Routes** for backend functionality
- **Optimized performance** with automatic code splitting
- **Built-in routing** and **image optimization**

These features make Next.js an excellent choice for developing modern web applications.

### Why Not TypeScript?

While TypeScript provides static typing and can enhance code quality, this project opts for JavaScript to:

- **Reduce complexity** for demonstration purposes
- **Lower the learning curve** for developers new to TypeScript
- **Focus on showcasing Next.js features** without additional overhead

This decision aims to keep the project accessible and straightforward.

---

Made with ❤️ by [@TruongCongTri](https://github.com/TruongCongTri)
