# React + Vite + Tailwind Setup Guide

## Table of Contents

1. [Introduction](#introduction)
2. [Installation Steps](#installation-steps)
3. [Setting up the Project](#setting-up-the-project)
   - [A. Install Tailwind CSS](#a-install-tailwind-css)
   - [B. Creating Components](#b-creating-components)
4. [Development Commands](#development-commands)
5. [FAQs](#faqs)
6. [Resources and References](#resources-and-references)

---

## Introduction

This guide provides a step-by-step process to set up a React project using Vite and Tailwind CSS for styling. It also includes instructions on creating components and links to example repositories for inspiration.

---

## Installation Steps

### 1. Run the following command to install React with `Vite` in the terminal inside your project folder:

```bash
npm create vite@latest
```

- Vite is a build tool that aims to provide a leaner and faster development experience.
- Ref: [Vite Documentation](https://vite.dev/guide/)

### 2. Answer the prompts on the terminal:

```bash
Ok to proceed? (y) y
√ Project name: ... .
√ Select a framework: » React
√ Select a variant: » JavaScript
```

### 3. Run the following commands:

```bash
npm install
npm run dev
```

### 4. Click on the localhost link:

> http://localhost:5173/

---

## Setting up the Project

### A. Install Tailwind CSS (for inline styling)

#### 1. Run the following commands inside the root of your project:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

- Tailwind CSS is a simple way to style your websites using inline styling and simple classes.
- Ref: [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)

#### 2. Replace the contents of the `tailwind.config.js` file with the following code:

```javascript
/** @type {import('tailwindcss').Config} */

export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {},
};
export const plugins = [];
```

#### 3. Add the following lines of code in your `src/index.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 4. If the `postcss.config.js` file does not exist, create it and add the following code:

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

### B. Creating Components

1. Create a new folder named `/components` in the `src` folder.

2. In the `/components` folder, create your custom components like `Navbar`, `ListCard`, `CreateList`, etc.

3. Refer to the code from the following repository for different components:
   - [Todo List App Repository](https://github.com/amar-nath-bhat/todo-list-app)

---

## Development Commands

Here are some useful commands for development:

- **Start the development server:**

  ```bash
  npm run dev
  ```

- **Build for production:**

  ```bash
  npm run build
  ```

- **Preview production build:**
  ```bash
  npm run preview
  ```

---

## FAQs

### Q1. What is Vite, and why is it used?

**Answer:** Vite is a modern build tool that offers a faster and leaner development experience compared to traditional tools like Create React App.

### Q2. Why use Tailwind CSS?

**Answer:** Tailwind CSS simplifies styling with utility-first classes, reducing the need for writing custom CSS from scratch.

---

## Resources and References

- [Vite Documentation](https://vite.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Example Repository](https://github.com/amar-nath-bhat/todo-list-app)
