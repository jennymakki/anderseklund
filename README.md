# Anders Eklund – Author Website

A modern, component-driven author website built for local historical writer Anders Eklund.

The project focuses on storytelling, readability, and modular frontend architecture using Next.js and reusable UI patterns.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Architecture

The application is structured around reusable and scalable components.

### Folder Structure

app/
├── api/
│ └── contact/
├── components/
│ ├── blocks/
│ └── ui/
├── data/
│ ├── books.ts
│ └── events.ts

### Component Strategy

The project separates:

- **Blocks** → page-level content sections
- **UI components** → reusable interface primitives
- **Data layer** → centralized structured content

This approach makes the website:
- easier to maintain
- scalable for future content
- consistent in styling and behavior
- simple to extend with new sections or books

### Examples

#### Blocks
Located in `components/blocks`

These are larger content-driven sections:
- Hero
- Author
- BookSection
- Events
- Contact

#### UI Components
Located in `components/ui`

Reusable building blocks:
- Buttons
- Cards
- Containers
- Inputs
- Dividers

This creates a clean separation between:
- presentation
- layout
- content logic

## Features

- Event presentation system
- Contact form API route
- Responsive layout
- Modular design system
- Clean content hierarchy

## Design Philosophy

The website was designed to support:
- long-form storytelling
- historical content presentation
- accessibility and readability
- calm Scandinavian-inspired visual design

The component-based structure also allows future additions such as:
- CMS integration
- animations
- multilingual support
- searchable archives
- book filtering