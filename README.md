# Sanskriti Variya - Portfolio Website Foundation

This is a clean, production-ready personal portfolio website foundation for **Sanskriti Variya** built with Next.js (App Router), React, and raw CSS.

This skeleton provides a responsive, semantic HTML structure, and segregates data from visual presentation components to allow seamless visual styling updates later.

## 🛠️ Tech Stack
- **Framework**: Next.js (App Router)
- **Library**: React
- **Styling**: Standard CSS (Modular styling per component)
- **Deployment**: Optimized for Vercel

---

## 📂 Folder Structure

```text
portfolio/
│
├── app/
│   ├── layout.js          # Main layout & SEO configurations
│   ├── page.js            # Home landing page routing
│   ├── globals.css        # CSS Resets, Typography & CSS variables
│   │
│   └── components/        # Reusable component UI & CSS
│       ├── Header/
│       ├── Footer/
│       ├── Hero/
│       ├── About/
│       ├── Skills/
│       ├── Experience/
│       ├── Projects/
│       ├── Education/
│       ├── Certification/
│       └── Contact/
│
├── data/                  # Decoupled resume data models
│   ├── personal.js
│   ├── education.js
│   ├── experience.js
│   ├── projects.js
│   ├── skills.js
│   └── certification.js
│
├── public/                # Static assets (images, icons, etc.)
│   └── resume/
│
├── package.json
├── next.config.mjs
└── README.md
```

---

## 🚀 Getting Started

### 1. Installation

Install project dependencies:
```bash
npm install
```

### 2. Local Development

Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Production Build

Compile the production bundle to verify correctness:
```bash
npm run build
```

---

## 💾 Decoupled Data Layer

All portfolio content is stored in JS data structures in the `/data` directory. To update details like projects, experience descriptions, and technical skills:
1. Open the relevant file (e.g. `data/projects.js`).
2. Add your content to the exported array or object.
3. Save the file. The UI will automatically rebuild and render your changes.

---

## ☁️ Deployment

This project is fully compatible with standard **Vercel** deployment:
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Go to the [Vercel Dashboard](https://vercel.com) and click **Add New Project**.
3. Select your repository and click **Deploy**. Vercel will automatically detect Next.js and build/host the site.
