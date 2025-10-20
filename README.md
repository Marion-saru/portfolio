# Modern React Portfolio

A stunning, modern portfolio website built with React, Tailwind CSS, and Framer Motion. Features a dark theme with glassmorphism effects, smooth animations, and responsive design.

## ✨ Features

- **Dark Theme**: Sleek, contemporary aesthetic with gradient accents
- **Smooth Animations**: Micro-interactions and scroll-triggered animations throughout
- **Glassmorphism Effects**: Premium glass-like cards with backdrop blur
- **Responsive Design**: Flawless experience across all devices
- **Particle Background**: Animated particle system for visual appeal
- **3D Card Effects**: Interactive project cards with hover animations
- **Intersection Observer**: Scroll-triggered animations for better performance
- **Modern UI/UX**: Professional design with attention to detail

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and formatting

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## 🛠️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.jsx   # Floating navigation bar
│   ├── Hero.jsx        # Hero section with animations
│   ├── About.jsx       # About section with skills
│   ├── Projects.jsx    # Projects showcase
│   ├── Contact.jsx     # Contact form and info
│   ├── Footer.jsx      # Footer component
│   └── ParticleBackground.jsx # Animated background
├── hooks/              # Custom React hooks
│   └── useIntersectionObserver.js # Scroll animation hook
├── data/               # Static data
│   ├── projects.js     # Project information
│   └── personal.js     # Personal information
├── App.jsx             # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Personal Information
Edit the following files to customize your information:

- `src/data/personal.js` - Update your name, bio, contact info
- `src/data/projects.js` - Add your projects and skills
- `public/resume.pdf` - Replace with your actual resume

### Styling
- Colors and gradients can be customized in `tailwind.config.js`
- Animation timings and effects in `src/index.css`
- Component-specific styles use Tailwind classes

### Content
- Update project images in `src/data/projects.js`
- Modify social media links in the data files
- Customize the hero section greeting and taglines

## 🌟 Key Features Explained

### Particle Background
Interactive particle system that creates floating dots with connecting lines, adding visual depth to the hero section.

### 3D Card Effects
Project cards use CSS transforms and Framer Motion for realistic 3D hover effects and smooth transitions.

### Scroll Animations
Intersection Observer API is used to trigger animations when elements come into view, improving performance.

### Glassmorphism
Modern glass-like effects using backdrop-filter and semi-transparent backgrounds for a premium feel.

### Responsive Design
Mobile-first approach with Tailwind's responsive utilities ensuring perfect display on all devices.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for the animation library
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Unsplash](https://unsplash.com/) for the project images

---

Built with ❤️ and lots of coffee ☕




