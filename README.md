# 📦 Backend Test Project

A modern frontend application built with **Next.js** (https://nextjs.org/) (App Router) and Tailwind CSS. This project serves as a demonstration of a clean, scalable architecture using the latest features of the Next.js framework.

## 🚀 Live Demo

👉 https://frontend-test-ver2.vercel.app/

---

## 📁 Project Structure

The project is organized to promote clarity and maintainability:

```
frontend-test-ver2/
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

## 🚀 How to Run

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
   
3. **Create a `.env` file** with these variables:

```env
NEXT_PUBLIC_API_BASE_LOCAL_URL=http://localhost:5000
# Uncomment the line below if you want to use an online backend server
# NEXT_PUBLIC_API_BASE_LOCAL_URL=https://backend-test-78ay.onrender.com
```

4. **Run the development server:**

```bash
npm run dev
```

5. **Open your browser:**

Navigate to [http://localhost:3000] (http://localhost:3000) to view the application.

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

--- Desktop
![Home-Desktop](https://github.com/user-attachments/assets/bbbee4be-df55-4883-ae96-9358f2d4bc83) 
![Login-Desktop](https://github.com/user-attachments/assets/0c5c8bd7-8301-49da-9cbf-b9d541154c5f) 
![Search-Desktop](https://github.com/user-attachments/assets/5105221f-8df1-46b6-bb9b-a07f28a40fe1)
![Profile-Desktop](https://github.com/user-attachments/assets/3382c7ab-7649-467f-b237-6694319ede43) 
![Favorite-Desktop](https://github.com/user-attachments/assets/8c73e408-b07d-4910-8a78-177556f64c90) 

--- Mobile/Tablet
![Home-Mobile](https://github.com/user-attachments/assets/9b5d6b3f-b85a-4e6c-ac23-06a30fdee3a9) ![Login-Mobile](https://github.com/user-attachments/assets/a5374ac7-fa5f-43e4-a8dc-47a3eeffe28c)
![Search-Mobile](https://github.com/user-attachments/assets/3dd13245-4a9c-4feb-a96f-516f20eb9767) ![Search-Input-Mobile](https://github.com/user-attachments/assets/23e3f730-037a-4983-a38b-0ec852f44cd1)
![Profile-Mobile](https://github.com/user-attachments/assets/fe71711a-d557-4ce3-a549-ee4998026173) ![Favorite-Mobile](https://github.com/user-attachments/assets/b4dadba8-21b2-4089-9618-7cf28c5722fd)









