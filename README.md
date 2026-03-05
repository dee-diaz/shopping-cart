# Grain & Noise — Shopping Cart

A React e-commerce project. The app simulates a vinyl store with product browsing, filtering, sorting, cart, wishlist, and product detail flows. This project focuses on scalable component architecture, state management with Context API, reusable custom hooks, and comprehensive UI unit testing.

[Live Demo](https://vinyl-shop-project.netlify.app/) | [Report Bug](https://github.com/dee-diaz/shopping-cart/issues)

![Screenshot](screenshot.png)

---

## Project highlights

- **Large component-driven UI architecture** with dedicated routes, reusable feature components, and service layers.
- **Global state with Context API** (albums, cart, wishlist) and provider composition.
- **Custom hooks** for domain logic extraction (data loading and URL-based filters).
- **Comprehensive unit/integration-style UI testing** with Vitest + Testing Library.
- **Backend proxy API** for Discogs with in-memory caching.

---

## Tech Stack

### Frontend

- React 19
- React Router 7
- Vite
- CSS Modules
- Vitest + Testing Library
- ESLint + Prettier

### Backend

- Node.js
- Express
- CORS
- dotenv
- Discogs API

---

## 🏗️ Architecture & Engineering Decisions

### State Management (Context API)

Global state is split by domain into separate providers:

- `AlbumsContext` (catalog data, sort state, loading/error)
- `CartContext` (cart items + updates)
- `WishlistContext` (wishlist items + updates)

Providers are composed in a single root wrapper for app-wide availability.

### Custom Hooks

Business logic is extracted from UI into reusable hooks:

- `useLoadAlbums(searchParams)` — loads featured or genre-based catalog data
- `useLoadAlbum(id)` — loads single product data + loading/error states
- `useGenreFilters()` — syncs selected genres with URL query params

This keeps components focused on rendering and interaction.

### Service Layer

Data operations are separated from components:

- catalog fetchers
- price transformation
- filtering
- sorting

This improves testability and separation of concerns.

---

## 🧪 Testing

Testing stack:

- **Vitest**
- **@testing-library/react**
- **@testing-library/user-event**
- **jsdom**
- **jest-dom matchers**

### Scope

The project includes extensive component and route tests, including:

- rendering behavior
- accessibility labels and roles
- user interactions (clicks, toggles, quantity updates)
- conditional states (loading/error/empty states)
- routing-dependent UI
- context-dependent UI behavior

### Test Utilities

A custom `renderWithProviders` helper wraps tested UI with:

- `MemoryRouter`
- Albums, Cart, and Wishlist providers
- configurable mock state per test

This enables realistic and maintainable test setup for context-heavy components.

---

## ♿ Accessibility

The UI includes accessibility-oriented patterns:

- semantic headings and regions
- `aria-label`, `aria-expanded`, `aria-selected`
- grouped controls (`role="group"`)
- keyboard support for dropdown interactions
- live regions for quantity updates

---

## Project Structure

```bash
shopping-cart/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   ├── routes/
│   │   ├── services/
│   │   └── data/
│   └── tests/
└── backend/
    └── server.js
```
