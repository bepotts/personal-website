# My personal website

Personal website for myself, built with Next.js and TypeScript.

## About

This is a modern, static personal website featuring a clean layout with header, main content, and footer sections. The site is optimized for static export and includes Google Analytics integration.

## Tech Stack

- **Framework**: Next.js 16.0.10
- **Language**: TypeScript
- **UI Library**: React 19.2.1
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans & Geist Mono (Google Fonts)
- **Testing**: Jest with React Testing Library
- **Code Quality**: ESLint, Prettier

## Features

- Static site generation (SSG) with Next.js export
- Responsive design with Tailwind CSS
- Component-based architecture
- Comprehensive test coverage
- Google Analytics integration
- Modern font loading with Next.js font optimization

## Installation

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd personal_website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production static site
- `npm run start` - Start the production server (after build)
- `npm run lint` - Run ESLint to check for code issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting without making changes
- `npm test` - Run tests once
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

## Project Structure

```
personal_website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata and fonts
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   └── layout/           # Layout components
│       ├── header/       # Header component
│       ├── main/         # Main content component
│       └── footer/       # Footer component
├── public/               # Static assets
│   ├── icons/           # SVG icons
│   └── *.svg            # Other SVG assets
```

## Building for Production

To build the static site for production:

```bash
npm run build
```

The static files will be generated in the `out/` directory, ready to be deployed to any static hosting service.

## Development

The project uses:

- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Jest** for unit testing
- **ESLint** for code linting
- **Prettier** for code formatting

Make sure to run tests and linting before committing:

```bash
npm run test
npm run lint
npm run format:check
```
