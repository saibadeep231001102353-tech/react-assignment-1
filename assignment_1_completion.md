# Assignment 1: React Environment Setup and Personal Portfolio

> **Assignment Objective:** Develop a simple personal portfolio webpage using React with external CSS, responsive layout, JSX only, and a minimum of 6 components.

---

## 📋 Requirements & Compliance Matrix

| Requirement / Constraint | Specified in Assignment | Implementation Details | Status |
| :--- | :--- | :--- | :---: |
| **Development Environment** | Installation of React environment | Configured with Vite, React 19, and Node.js v20 LTS | ✅ Met |
| **Navigation Bar** | Navigation Bar required | [Navbar.jsx](file:///Users/saibadeepmullick/.gemini/antigravity-ide/scratch/react-assignment-1/src/components/Navbar.jsx) with smooth scroll navigation, brand logo, mobile hamburger drawer, and theme switcher | ✅ Met |
| **Header** | Header required | [Header.jsx](file:///Users/saibadeepmullick/.gemini/antigravity-ide/scratch/react-assignment-1/src/components/Header.jsx) with profile picture, greeting, role subtitle, CTA buttons, and stats ribbon | ✅ Met |
| **About Me** | About Me section required | [About.jsx](file:///Users/saibadeepmullick/.gemini/antigravity-ide/scratch/react-assignment-1/src/components/About.jsx) with bio, quick facts grid, core engineering strengths, and tech interest tags | ✅ Met |
| **Education** | Education section required | [Education.jsx](file:///Users/saibadeepmullick/Desktop/React%20Assignment/react-assignment-1/src/components/Education.jsx) with 4th-year BCA academic timeline, coursework, Class XII, and verified certifications | ✅ Met |
| **Skills** | Skills section required | [Skills.jsx](file:///Users/saibadeepmullick/.gemini/antigravity-ide/scratch/react-assignment-1/src/components/Skills.jsx) with category filter tabs (Frontend, Backend, Tools) and animated proficiency meters | ✅ Met |
| **Contact Information** | Contact Information required | [Contact.jsx](file:///Users/saibadeepmullick/.gemini/antigravity-ide/scratch/react-assignment-1/src/components/Contact.jsx) with email, location, phone, social handles, and interactive controlled contact form | ✅ Met |
| **Footer** | Footer required | [Footer.jsx](file:///Users/saibadeepmullick/.gemini/antigravity-ide/scratch/react-assignment-1/src/components/Footer.jsx) with quick navigation, social links, copyright, and smooth back-to-top button | ✅ Met |
| **Minimum 6 Components** | Minimum 6 components | **8 components** created (`Navbar`, `Header`, `About`, `Education`, `Skills`, `Projects`, `Contact`, `Footer`) | ✅ Exceeded |
| **Responsive Design** | Responsive design required | Pure CSS media queries (`max-width: 992px`, `768px`, `580px`) with mobile-friendly drawer menu | ✅ Met |
| **External CSS** | External CSS required | Modular external `.css` files imported into each component (no inline styles or CSS-in-JS) | ✅ Met |
| **Use JSX Only** | JSX only | All components written in standard `.jsx` format | ✅ Met |

---

## 🏛️ Project Directory Structure

```
/Users/saibadeepmullick/.gemini/antigravity-ide/scratch/react-assignment-1/
├── index.html                   # HTML entry point with Google Fonts & metadata
├── package.json                 # Project manifest & build scripts
├── vite.config.js               # Vite bundler configuration
├── public/
│   └── avatar.jpg               # Developer portrait photo
└── src/
    ├── App.jsx                  # Main application component & theme management
    ├── App.css                  # Section layouts & accent styling
    ├── index.css                # Global design system & theme variables
    ├── main.jsx                 # React root DOM mount
    └── components/
        ├── Navbar.jsx           # Glassmorphism navbar & mobile menu
        ├── Navbar.css           # External stylesheet for Navbar
        ├── Header.jsx           # Hero intro header with stats ribbon
        ├── Header.css           # External stylesheet for Header
        ├── About.jsx            # Detailed About Me section & highlight cards
        ├── About.css            # External stylesheet for About
        ├── Education.jsx        # Academic timeline & certifications list
        ├── Education.css        # External stylesheet for Education
        ├── Skills.jsx           # Categorized skills with progress indicators
        ├── Skills.css           # External stylesheet for Skills
        ├── Projects.jsx         # Showcase cards of recent React projects
        ├── Projects.css         # External stylesheet for Projects
        ├── Contact.jsx          # Contact details & controlled React form
        ├── Contact.css          # External stylesheet for Contact
        ├── Footer.jsx           # Footer with links & scroll-to-top
        ├── Footer.css           # External stylesheet for Footer
        └── Icons.jsx            # Custom SVG brand icons
```

---

## 🎨 Visual Profile Preview

![Portfolio Profile Photo](/Users/saibadeepmullick/.gemini/antigravity-ide/brain/f5a87040-29e7-4c01-8196-82e5766d2db2/profile_photo_1790431996741.jpg)

---

## 💻 Running the Application

The development server is currently running at:
```
http://127.0.0.1:5173/
```

You can view it directly in your browser. To build for production, run:
```bash
cd /Users/saibadeepmullick/.gemini/antigravity-ide/scratch/react-assignment-1
npm run build
```
