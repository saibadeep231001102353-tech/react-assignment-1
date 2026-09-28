# Assignment 1: React Environment Setup and Personal Portfolio

A sleek, modern, and fully responsive personal portfolio webpage developed using **React (JSX)** and **External CSS**, satisfying all academic requirements and constraints.

---

## 📌 Project Overview & Requirements Checklist

| Requirement / Constraint | Status | Details |
| :--- | :---: | :--- |
| **React Development Environment** | ✅ Complete | Initialized with Vite & React 19 / ES6+ |
| **Header** | ✅ Complete | Hero header with avatar, bio, quick stats, and CTA buttons (`Header.jsx`) |
| **Footer** | ✅ Complete | Footer with navigation links, copyright, social icons, and back-to-top (`Footer.jsx`) |
| **Navigation Bar** | ✅ Complete | Sticky glassmorphism navbar with brand logo, smooth scroll, theme toggle, and mobile menu (`Navbar.jsx`) |
| **About Me** | ✅ Complete | Narrative, quick facts grid, and core competency cards (`About.jsx`) |
| **Education** | ✅ Complete | Academic timeline with BCA & 12th details plus certifications (`Education.jsx`) |
| **Skills** | ✅ Complete | Filterable technical proficiencies with animated progress bars (`Skills.jsx`) |
| **Contact Information** | ✅ Complete | Contact info cards with copy email and controlled React inquiry form (`Contact.jsx`) |
| **Minimum 6 Components** | ✅ Exceeded | **8 modular components** created in `src/components/` |
| **Responsive Design** | ✅ Complete | Mobile-first CSS media queries for desktop, tablet, and mobile views |
| **External CSS** | ✅ Complete | Dedicated `.css` files imported into each component (no CSS-in-JS / no Tailwind) |
| **Use JSX Only** | ✅ Complete | All components written in `.jsx` |

---

## 🏗️ Component Architecture

```
src/
├── components/
│   ├── Navbar.jsx        # Navigation bar with links & dark/light theme switch
│   ├── Navbar.css        # External CSS for Navbar
│   ├── Header.jsx        # Hero section with avatar, greeting & quick stats
│   ├── Header.css        # External CSS for Header
│   ├── About.jsx         # Personal narrative, key facts & areas of interest
│   ├── About.css         # External CSS for About Me
│   ├── Education.jsx     # Academic timeline & technical certifications
│   ├── Education.css     # External CSS for Education
│   ├── Skills.jsx        # Categorized skills with interactive tabs & meters
│   ├── Skills.css        # External CSS for Skills
│   ├── Projects.jsx      # Showcase of recent React projects & repos
│   ├── Projects.css      # External CSS for Projects
│   ├── Contact.jsx       # Contact details & controlled React feedback form
│   ├── Contact.css       # External CSS for Contact
│   ├── Footer.jsx        # Footer with back-to-top & copyright info
│   ├── Footer.css        # External CSS for Footer
│   └── Icons.jsx         # Custom SVG brand icons (GitHub, LinkedIn, etc.)
├── App.jsx               # Main application component managing state & theme
├── App.css               # Application layout styling
├── index.css             # Global CSS design tokens, reset & variables
└── main.jsx              # React DOM entry point
```

---

## 🚀 How to Run Locally

1. **Navigate to the project folder:**
   ```bash
   cd /Users/saibadeepmullick/.gemini/antigravity-ide/scratch/react-assignment-1
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://127.0.0.1:5173/
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```
