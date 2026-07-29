# Fuzzy Dino Labs Website Deployment Guide

This directory contains the complete static website source for **Fuzzy Dino Labs** (`www.fuzzydinolabs.com`) including `app-ads.txt` and `privacy.html`.

---

## Step-by-Step GitHub Pages Deployment

### Step 1: Create a Dedicated Public Repository on GitHub
1. Go to [GitHub](https://github.com/new) and create a **new public repository**.
2. Name it `fuzzydinolabs-website` (or `fuzzydinolabs.github.io`).

### Step 2: Push these Website Files to GitHub
Open your terminal inside this `website` directory and run:

```bash
git init
git add .
git commit -m "Initial commit for Fuzzy Dino Labs website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/fuzzydinolabs-website.git
git push -u origin main
```

*(Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username).*

---

### Step 3: Enable GitHub Pages & Custom Domain
1. In your GitHub repository, go to **Settings** > **Pages** (under Code and automation).
2. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` / `root`.
3. Under **Custom domain**:
   - Type: `www.fuzzydinolabs.com`
   - Click **Save**.
   - Check **Enforce HTTPS**.

---

### Step 4: Verify `app-ads.txt`
Once GitHub Pages finishes deploying (takes ~1 minute), test in your browser:
- `https://www.fuzzydinolabs.com/app-ads.txt`

It will display:
```text
google.com, pub-8461583824601729, DIRECT, f08c47fec0942fa0
```

Now Google AdMob will successfully verify your app!
