# Deployment Instructions

This project is a React application built with Vite. It uses Three.js for 3D graphics and Tailwind CSS for styling.

## Prerequisites

You will need `Node.js` installed on your computer.

1.  Initialize a `package.json` if you haven't already:
    ```bash
    npm init -y
    ```

2.  Install dependencies:
    ```bash
    npm install react react-dom three @react-three/fiber @react-three/drei lucide-react
    npm install -D vite @vitejs/plugin-react typescript @types/react @types/react-dom @types/three
    ```

## Option 1: Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Vite apps.

1.  **Push your code to GitHub/GitLab/Bitbucket.**
2.  **Log in to Vercel** and click "Add New... > Project".
3.  **Import your git repository.**
4.  Vercel will detect `Vite`. Ensure the following settings:
    *   **Framework Preset:** Vite
    *   **Build Command:** `vite build` (or `npm run build`)
    *   **Output Directory:** `dist`
5.  Click **Deploy**.

## Option 2: Deploy to Netlify

1.  **Push your code to a Git repository.**
2.  **Log in to Netlify** and click "New site from Git".
3.  **Choose your repository.**
4.  Configure the build settings:
    *   **Build command:** `vite build`
    *   **Publish directory:** `dist`
5.  Click **Deploy site**.

## Option 3: Manual Static Build

If you want to host it on a traditional web server:

1.  Run the build command locally:
    ```bash
    npx vite build
    ```
2.  This will create a `dist` folder.
3.  Upload the contents of the `dist` folder to your web server (e.g., via FTP or cPanel).

## Important Note on Routing

Since this is a Single Page Application (SPA), if you add multiple routes in the future, you may need to configure your host to redirect all requests to `index.html`.
