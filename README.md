# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Mantine v7.

## Features

- **Responsive Design**: Fixed sidebar on desktop, collapsible drawer on mobile
- **Modern UI**: Built with Mantine v7 components and Tabler icons
- **TypeScript**: Fully typed for better development experience
- **Smooth Transitions**: Tab navigation with smooth content switching
- **Accessibility**: Keyboard navigation and proper ARIA labels

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Mantine v7** for UI components and theming
- **@tabler/icons-react** for icons
- **CSS-in-JS** styling with Mantine's sx prop

## Project Structure

```
src/
├── components/
│   ├── PortfolioApp.tsx      # Main app component with AppShell
│   ├── ProfileAside.tsx      # Left sidebar with profile info
│   └── sections/             # Page sections
│       ├── About.tsx         # About section
│       ├── Resume.tsx        # Resume/experience section
│       ├── Portfolio.tsx     # Projects showcase
│       ├── Blog.tsx          # Blog posts
│       └── Contact.tsx       # Contact form
├── types/                    # TypeScript type definitions
│   ├── project.ts
│   ├── blog-post.ts
│   ├── experience.ts
│   ├── paths.ts
│   └── index.ts
├── data.ts                   # Mock data
├── App.tsx                   # App root with Mantine providers
└── main.tsx                  # Entry point
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Sections

### About
- Personal bio and introduction
- Skills showcase with badges
- Quick facts in a grid layout

### Resume
- Professional experience timeline
- Education background
- Key achievements for each role

### Portfolio
- Project showcase in responsive grid
- Project details with tags
- Live demo and code repository links

### Blog
- Article cards with excerpts
- Publication dates
- Read more links

### Contact
- Contact form with validation
- Contact information
- Response time information

## Customization

To customize the portfolio:

1. **Profile Information**: Update `ProfileAside.tsx` with your details
2. **Projects**: Modify the `projects` array in `data.ts`
3. **Experience**: Update the `experiences` array in `data.ts`
4. **Blog Posts**: Modify the `blogPosts` array in `data.ts`
5. **Skills**: Update the `skills` array in `data.ts`
6. **Styling**: Customize Mantine theme or component styles

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!