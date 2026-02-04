# Portfolio of Jeroen Buil (WIP)
Work in progress portfolio website hosted on github.

Current features:
- Theme toggle button
- Animated background in dark mode (the one and only mode!)

# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Setup GitHub Pages Deployment

### 1. Create the deploy.yml Workflow File
The easiest way is to let GitHub generate it for you:

1. Go to your repository → **Actions** tab
2. Search for "Node.js" workflow template
3. GitHub will suggest a workflow - click "Configure" or "Set up this workflow"
4. GitHub creates a `.github/workflows/` file for you automatically

Alternatively, create `.github/workflows/deploy.yml` manually in your repository with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v4

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Deploy to GitHub Pages
      if: github.ref == 'refs/heads/main'
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.DEPLOY_TOKEN }}
        publish_dir: ./dist
```

### 2. Setup DEPLOY_TOKEN

1. Go to GitHub → Your profile → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Name it `DEPLOY_TOKEN`
4. Select scope: `repo` (full control of private repositories)
5. Click "Generate token" and **copy it immediately**
6. Go to your repository Settings → Secrets and variables → Actions
7. Click "New repository secret"
8. Name: `DEPLOY_TOKEN`
9. Value: paste your personal access token

### 3. Create the gh-pages Branch

```bash
git checkout --orphan gh-pages
git rm -rf .
touch .nojekyll
git add .nojekyll
git commit -m "Initial gh-pages commit"
git push origin gh-pages
git checkout main
```

#### What is the `.nojekyll` file?

GitHub Pages automatically processes all uploaded files through [Jekyll](https://jekyllrb.com/), a static site generator designed for blogs and documentation. Jekyll has special handling for certain files and folder structures (like `_` prefixed directories) that can interfere with modern JavaScript applications like React + Vite.

The `.nojekyll` file is a special marker that **tells GitHub Pages to skip Jekyll processing entirely**. This is essential for Vite-built applications because:

1. **Prevents file filtering**: Jekyll ignores files/folders starting with `_`, which could include important assets bundled by Vite
2. **Allows arbitrary folder structures**: Modern apps may have folder names that conflict with Jekyll conventions
3. **Ensures exact file serving**: Your pre-built dist files are served as-is without any transformation

Without `.nojekyll`, GitHub Pages might silently drop or modify your production files, causing broken imports and missing assets.

### 4. Configure GitHub Pages Settings

1. Go to Repository Settings → Pages
2. Set **Source** to "Deploy from a branch"
3. Select **gh-pages** branch and **/(root)** folder
4. Save

## Development Workflow

### Local Development
```bash
npm install  # Install dependencies (do once)
npm run dev  # Start development server
```

### Build for Production
```bash
npm run build  # Creates optimized files in dist/ folder
```

**When to run `npm run build`:**
- Before deploying to GitHub Pages
- To test production build locally
- The GitHub Actions workflow automatically runs this on every push to main

### Deploy
Simply push changes to main:
```bash
git add .
git commit -m "Your message"
git push origin main
```

The GitHub Actions workflow will automatically build and deploy your site to `https://jeroenbuil.github.io/`.