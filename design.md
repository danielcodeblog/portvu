# Israel Amedu Portfolio Design Document

## 1. Project Overview
A boutique post-production portfolio for **Israel Amedu**, a video editor specializing in visual narratives, music videos, and commercial work. The application is designed to showcase high-quality video content while maintaining a sleek, professional, and modern aesthetic.

## 2. Design Philosophy
The design follows a **Technical Dashboard / Editorial Hybrid** aesthetic. It combines the precision of a technical tool with the bold, dramatic feel of a creative magazine.
- **Minimalism:** Focus on the content (videos) without unnecessary distractions.
- **Atmosphere:** Use of dark backgrounds, subtle noise textures, and 3D elements to create depth.
- **Typography-Driven:** Strong hierarchy using modern sans-serif and display fonts.

## 3. Visual Identity

### Color Palette
- **Primary Background:** `#0A0A0A` (Deep Black)
- **Secondary Background:** `#sky-50` (Very Light Blue/White) for content sections to create contrast.
- **Accent/Text:** `#sky-950` (Deep Blue) for light sections, White for dark sections.
- **Gradients:** Subtle radial and linear gradients (`#1A1A1A` to `#0A0A0A`) for depth.

### Typography
- **Display Font:** `Space Grotesk` (Modern, technical, bold) - Used for headings.
- **Sans-Serif Font:** `Inter` (Clean, highly legible) - Used for body text and UI elements.

## 4. Key Components

### Hero Section
- Features a **Floating 3D Background** (Three.js) to create an immediate sense of technical sophistication.
- Bold display typography for the name and title.
- Clear Call-to-Action (CTA).

### Works (Portfolio)
- Grid layout showcasing video projects.
- Uses Vimeo embeds for high-quality playback.
- Hover effects for interactive feedback.

### Toolkit
- Displays technical proficiency (Premiere Pro, After Effects, DaVinci Resolve, etc.).
- Clean, grid-based layout.

### About & Testimonials
- Narrative sections to build trust and provide context.
- Minimalist card designs.

### Contact
- Simple, direct contact form or information.

## 5. Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Motion (Framer Motion)
- **3D Rendering:** Three.js with `@react-three/fiber` and `@react-three/drei`
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Inter, Space Grotesk)

## 6. Future Considerations
- **Dynamic Content:** Integration with a CMS (e.g., Sanity or Contentful) for easier project updates.
- **Enhanced 3D:** More interactive 3D elements in the background or as part of the project cards.
- **Case Studies:** Detailed breakdown of specific projects with "Before/After" comparisons.
