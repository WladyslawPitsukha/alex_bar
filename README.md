# Alex Bar

This is a pet project I built to practice modern frontend development. It's a website for a fictional bar & restaurant called **Alex Bar** — a place with a Norwegian vibe located in Poland. The goal was to create a realistic multi-page website that looks and feels like something you'd see for an actual business.

---

## 💡 Idea

I wanted to build something more than just a "to-do list" or a counter app. A restaurant website seemed like a good challenge because it has a lot of real-world UI requirements — a gallery, a menu with categories, a map with location, event listings, and multiple pages with their own layouts. It also gave me a chance to work with routing, component design, and real data structures.

---

## 📄 Pages

- **Home** — The main landing page with a photo gallery, a short intro, upcoming events section, and an interactive map showing the bar's location
- **Menu** — A full food & drink menu with category navigation on the sidebar and cards for each item
- **Cafes** — A list of cafe locations, each with its own detail page
- **Reservations** — A dynamic table reservation request flow with live booking summary
- **Register** — A responsive account registration prototype with password feedback

---

## 🛠️ Tech Stack

| Tool | Why I used it |
|------|--------------|
| [Next.js 15](https://nextjs.org/) | React framework with App Router and file-based routing |
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | To practice typed code and avoid runtime errors |
| [Tailwind CSS v4](https://tailwindcss.com/) | Fast and flexible utility-first styling |
| [Material UI v7](https://mui.com/) | Ready-made components like image lists, accordions, icons |
| [Headless UI](https://headlessui.com/) | Accessible UI primitives (used for accordion/menu) |
| [React Leaflet](https://react-leaflet.js.org/) | Interactive map to show the bar location |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library used across the UI |

---

## 🗂️ Project Structure

```
src/
├── app/              # Next.js App Router pages and layouts
├── components/       # Reusable UI components
├── constants/        # Static data (menu, cafes, events, etc.)
├── types/            # TypeScript type definitions
├── utils/            # Small helper functions
├── assets/           # Images (menu photos, cafe photos, events)
└── styles/           # Global CSS
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the project for production |
| `npm run start` | Run the production build |
| `npm run lint` | Check code with ESLint |

---

## 📌 Status

The frontend prototype is complete. Reservations and registration currently use client-side demo state; connecting them to authentication, availability checks, and persistent storage is the next production step.