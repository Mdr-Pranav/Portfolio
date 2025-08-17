# Pranav Mudar - Portfolio Website

A modern, responsive portfolio website showcasing my journey as a Computer Science student and developer. Built with clean HTML, CSS, and JavaScript, featuring smooth animations and a professional dark theme.

![Portfolio Preview](Images/background.webp)

## 🚀 Features

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Dark theme with smooth animations and transitions
- **Interactive Elements** - Animated project cards, modal windows, and scroll effects
- **Contact Form** - Functional contact form with EmailJS integration
- **Project Showcase** - Detailed project pages with technical descriptions
- **Skills & Experience** - Comprehensive sections highlighting technical expertise
- **Certifications** - Interactive scrolling carousel of professional certifications
- **Resume Download** - Direct PDF download functionality

## 🛠️ Tech Stack

### Frontend

- **HTML5** - Semantic markup with modern best practices
- **CSS3** - Custom styles with Flexbox/Grid, animations, and responsive design
- **JavaScript (ES6+)** - Interactive functionality and DOM manipulation
- **Font Awesome** - Professional icons throughout the site
- **Google Fonts** - Typography with Montserrat and Roboto

### Libraries & Frameworks

- **AOS (Animate On Scroll)** - Smooth scroll-triggered animations
- **EmailJS** - Client-side email functionality for contact form
- **Normalize.css** - Cross-browser styling consistency

### Tools & Services

- **EmailJS** - Contact form backend service
- **GitHub Pages** - Hosting and deployment (ready)
- **Responsive Images** - WebP format for optimized loading

## 📁 Project Structure

```
Portfolio/
├── css/
│   └── styles.css              # Main stylesheet with all components
├── docs/
│   └── Pranav_Mudar_Resume.pdf # Downloadable resume
├── dp/
│   ├── Me.jpeg                 # Profile pictures
│   ├── Me2.jpg
│   └── Me21.jpg
├── Images/
│   ├── background.webp         # Hero background
│   ├── isro-logo.png          # Company logos
│   ├── pes-logo.png
│   ├── Michigan.jpeg
│   └── LearnQuest.png
├── projects/
│   ├── *.html                  # Individual project pages
│   └── Pictures/               # Project screenshots
├── scripts/
│   ├── add-animations.js       # Animation utilities
│   ├── apply-animations.js
│   └── project-animations.js
├── index.html                  # Main portfolio page
└── README.md                   # This file
```

## 🎯 Featured Projects

### Research Projects

1. **Generative AI for 3D Cardiac Modeling** - Advanced medical imaging using GANs and 3D U-Net
2. **Background Music Generation** - AI-powered custom music creation using deep learning
3. **Ultimate Tic-Tac-Toe with RL** - Reinforcement learning implementation with Q-Learning

### Web Development Projects

4. **Personal Finance Manager** - Full-stack application with Node.js and MySQL
5. **E-Learning Platform** - Java Spring Boot with React frontend
6. **Student Tools** - Attendance calculator and academic utilities
7. **Disaster Management Website** - Emergency response platform
8. **Chat Server with File Transfer** - Real-time communication using Python sockets
9. **Event Management Platform** - PHP-based event organization system

## 🚦 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.) for modifications
- Local web server (optional, for development)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mdr-Pranav/portfolio.git
   cd portfolio
   ```

2. **Open in browser**

   ```bash
   # Option 1: Direct file opening
   open index.html

   # Option 2: Local server (recommended)
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

3. **For development**
   ```bash
   # Install Live Server extension in VS Code
   # Right-click index.html → "Open with Live Server"
   ```

### Configuration

#### Email Contact Form Setup

1. Create an [EmailJS](https://www.emailjs.com/) account
2. Update the following in `index.html`:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams);
   ```

#### Customization

- **Colors**: Modify CSS variables in `css/styles.css`
- **Content**: Update personal information in `index.html`
- **Projects**: Add new project pages in `projects/` directory
- **Resume**: Replace `docs/Pranav_Mudar_Resume.pdf` with your resume

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:

- **Mobile**: < 768px - Single column layout
- **Tablet**: 768px - 1024px - Adapted grid system
- **Desktop**: > 1024px - Full multi-column layout

## 🎨 Theme & Styling

- **Primary Colors**: Dark theme with accent gradients
- **Typography**: Professional font pairing
- **Animations**: Subtle AOS animations for better UX
- **Layout**: CSS Grid and Flexbox for modern layouts

## 📈 Performance Optimizations

- WebP image format for faster loading
- Minified CSS and optimized JavaScript
- Lazy loading for images and animations
- Mobile-optimized touch interactions

## 🔧 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact

**Pranav Mudar**

- 📧 Email: [mudarpranav3@gmail.com](mailto:mudarpranav3@gmail.com)
- 📱 Phone: +91 9959956470
- 💼 LinkedIn: [linkedin.com/in/Pranav-Mudar](https://linkedin.com/in/Pranav-Mudar/)
- 🐱 GitHub: [github.com/Mdr-Pranav](https://github.com/Mdr-Pranav)
- 📍 Location: Bangalore, India

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **AOS Library** - Smooth scroll animations
- **Font Awesome** - Professional iconography
- **EmailJS** - Contact form functionality
- **Google Fonts** - Beautiful typography
- **Normalize.css** - Cross-browser consistency

---

⭐ If you found this portfolio inspiring, please give it a star on GitHub!

_Last updated: January 2025_
