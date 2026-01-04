# Portfolio v1

A modern, responsive personal portfolio website built with React and Tailwind CSS. Designed to showcase projects and technical skills with a clean, dark-mode aesthetic.

## 🚀 Tech Stack

* **Framework:** [React](https://react.dev/) (via [Vite](https://vitejs.dev/))
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (Lucide & FontAwesome)
* **Deployment:** GitHub Pages / Vercel (Ready to deploy)

## ✨ Features

* **Responsive Navbar:** Semantic HTML structure with social links and smooth hover effects.
* **Interactive Hero Section:** Includes a "stacked card" profile image with a toggle/hover animation (Personal vs. Professional mode).
* **Dark Mode UI:** Built with a custom slate/gray color palette (`bg-gray-900`, `text-gray-300`).
* **Performance:** Optimized with Vite for lightning-fast HMR and build times.

## 🛠️ Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/portfolio-v1.git](https://github.com/YOUR_USERNAME/portfolio-v1.git)
    cd portfolio-v1
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```text
src/
├── assets/          # Static images (profile photos)
├── components/      # Reusable UI components
│   ├── Hero.jsx     # Main landing area with text & photo
│   ├── Navbar.jsx   # Top navigation & social links
│   └── ProfileImage.jsx # The interactive photo card
├── App.jsx          # Main application layout
└── index.css        # Tailwind directives & global styles
