# Pratham Shandilya - Interactive Resume Portfolio

A modern, responsive, single-page portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Features smooth animations, dark/light theme toggle, real-time GitHub integration, and a fully functional contact form.

## 🚀 Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Dark/Light Theme**: Toggle between themes with preference saving
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Real-time GitHub Stats**: Live integration with GitHub API
- **Interactive Contact Form**: Form validation and submission handling
- **Scroll-based Navigation**: Smooth scrolling with active section highlighting
- **Performance Optimized**: Built with Next.js 15 and modern best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/Pratham0320/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Netlify

1. Build the project:
\`\`\`bash
npm run build
\`\`\`

2. Deploy the `out` folder to Netlify

### Other Platforms

The project can be deployed to any platform that supports Next.js applications.

## 📁 Project Structure

\`\`\`
/src
  /components
    - Header.tsx          # Hero section with profile and contact info
    - Navigation.tsx      # Scroll-spy navigation
    - ThemeToggle.tsx     # Dark/light theme switcher
    - About.tsx           # About me section
    - Education.tsx       # Education details
    - Skills.tsx          # Skills with progress bars
    - Experience.tsx      # Work experience timeline
    - Projects.tsx        # Featured projects grid
    - GitHubStats.tsx     # Real-time GitHub statistics
    - Achievements.tsx    # Awards and recognition
    - Contact.tsx         # Contact form and information
    /ui                   # shadcn/ui components
  /app
    - layout.tsx          # Root layout
    - page.tsx            # Main page component
    - globals.css         # Global styles
  /lib
    - utils.ts            # Utility functions
\`\`\`

## 🎨 Customization

### Personal Information

Update the personal information in each component:

- **Header.tsx**: Name, title, profile photo, contact links
- **About.tsx**: Personal description and interests
- **Education.tsx**: Educational background
- **Skills.tsx**: Technical skills and proficiency levels
- **Experience.tsx**: Work experience and achievements
- **Projects.tsx**: Featured projects with descriptions
- **Achievements.tsx**: Awards and recognition
- **Contact.tsx**: Contact information

### GitHub Integration

The GitHub stats are fetched from the GitHub API. Update the username in `GitHubStats.tsx`:

\`\`\`typescript
const response = await fetch('https://api.github.com/users/YOUR_USERNAME')
\`\`\`

### Styling

- Colors and gradients can be customized in `tailwind.config.ts`
- Component-specific styles are in individual component files
- Global styles are in `app/globals.css`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Performance Optimizations

- Next.js App Router for optimal performance
- Image optimization with Next.js Image component
- Lazy loading for components and images
- Efficient bundle splitting
- CSS optimization with Tailwind CSS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: prathamshandilya2207@gmail.com
- **Phone**: +91 7084918772
- **LinkedIn**: [linkedin.com/in/Pratham](https://linkedin.com/in/Pratham)
- **GitHub**: [github.com/Pratham0320](https://github.com/Pratham0320)

---

Built with ❤️ by Pratham Shandilya
