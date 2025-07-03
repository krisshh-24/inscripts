# React Spreadsheet UI

A pixel-perfect, spreadsheet-like UI built with React, TypeScript, Tailwind CSS, and lucide-react icons.  
Features interactive tabs, a styled toolbar, a dynamic data grid, and a status filter footer—closely matching a provided design screenshot.

## Features

- **Spreadsheet Table**:  
  - Sticky headers, colored column groups, status/priority badges, clickable URLs, row numbering.
  - Extra empty rows auto-fill the viewport (no scrollbars).
  - Built with `react-data-grid` for keyboard navigation and spreadsheet features.

- **Tabs Section**:  
  - Custom pixel-width tabs with colored backgrounds and icons.
  - All tabs are clickable and flush with the toolbar.

- **Toolbar**:  
  - Styled with Tailwind, includes interactive buttons, and is flush with the tabs.

- **Footer/Status Bar**:  
  - Status filter bar with "All", "Order", "Pending", "Reviewed", and a green "+ Add" button.
  - All buttons are interactive.

- **TypeScript**:  
  - Strict typing throughout, with type-check and lint scripts.

- **Styling**:  
  - Uses Tailwind CSS for rapid, consistent styling.
  - Icons from lucide-react.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
git clone <your-repo-url>
cd react-spreadsheet
npm install
```

### Development

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    Table.tsx
    Tabs.tsx
    Toolbar.tsx
    Footer.tsx
    ui/
      navigation-menu.tsx
      navigation-menu-styles.ts
  App.tsx
  main.tsx
```

## Customization

- **Table columns, tabs, and footer** can be easily customized in their respective components.
- **Styling** is handled via Tailwind classes in each component.

## Dependencies

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/)
- [react-data-grid](https://github.com/adazzle/react-data-grid)
- [@radix-ui/react-navigation-menu](https://www.radix-ui.com/primitives/docs/components/navigation-menu)

## License

MIT
