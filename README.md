# 🌐 Personal Portfolio Website

A modern, responsive, and high-performance portfolio website built with React.js and Tailwind CSS. It showcases my projects, skills, and experience as a developer, featuring a functional contact form powered by EmailJS.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

![Portfolio Screenshot](https://via.placeholder.com/800x400?text=Your+Portfolio+Screenshot) <!-- Replace with an actual screenshot of your site -->

## 🚀 Live Demo

**[https://your-portfolio-link.vercel.app](https://your-portfolio-link.vercel.app)** <!-- Replace with your actual URL -->

## ✨ Features

- **⚡ Modern Stack:** Built with React.js for a fast, single-page application experience.
- **🎨 Responsive Design:** Styled with Tailwind CSS to ensure perfect rendering on all devices.
- **📞 Functional Contact Form:** Integrated with EmailJS to handle message delivery directly to my inbox.
- **🔗 Smooth Navigation:** Smooth scrolling and a dynamic navbar for seamless section navigation.
- **📂 Project Showcase:** A dedicated section to highlight my best work with links to live demos and source code.
- **🛠 Skills & About:** Clean sections to detail my technical abilities and background.

## 🛠️ Tech Stack

- **Frontend Framework:** [React.js](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Contact Form:** [EmailJS](https://www.emailjs.com/)
- **Deployment:** [Vercel](https://vercel.com/) (or Netlify/GitHub Pages)

## 📦 Installation & Local Setup

Want to explore the code or use it as a template? Follow these steps:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/your-portfolio.git
    cd your-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables**
    - Create a `.env` file in the root directory.
    - Add your EmailJS credentials (get them from your EmailJS account):
    ```env
    REACT_APP_EMAILJS_SERVICE_ID=your_service_id
    REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
    REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
    ```

4.  **Start the development server**
    ```bash
    npm start
    ```
5.  **Open your browser** and navigate to `http://localhost:3000`.

## 📁 Project Structure
src/
├── components/ # Reusable components (Navbar, Footer, Layout)
│ ├── Navbar.js
│ └── Footer.js
├── sections/ # Main page sections
│ ├── Hero.js
│ ├── About.js
│ ├── Projects.js
│ ├── Skills.js
│ └── Contact.js
├── App.js # Main App component
├── index.js # Application entry point
└── index.css # Global Tailwind imports & styles


## 🔧 Configuration

### Customizing for Your Own Use
1.  Update personal information in the respective section components (`src/sections/`).
2.  Replace the projects array in `src/sections/Projects.js` with your own projects.
3.  Modify the skills list in `src/sections/Skills.js`.
4.  Update social media links and contact details in `src/components/Footer.js` and the contact section.
5.  Replace all images in the `public/` folder with your own.

### Setting Up EmailJS
1.  Create an account on [EmailJS](https://www.emailjs.com/).
2.  Add a new email service (e.g., Gmail).
3.  Create an email template.
4.  Copy your Service ID, Template ID, and Public Key into the `.env` file.

## 🌐 Deployment

This project is deployed on **Vercel** for optimal performance. The deployment is automated: pushing any changes to the `main` branch triggers a new build and deployment.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ukvittahachchi).

---

### 📫 Let's Connect!

I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.

- **LinkedIn:** (https://www.linkedin.com/in/umindu-kethaka-5b828133a/)
- **GitHub:** (https://github.com/ukvittahachchi))
- **Email:** ukvittahachchi99@gmail.com

---

⭐ **If you like this portfolio, don't forget to give it a star on GitHub!**
