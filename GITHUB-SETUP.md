# 🚀 GitHub Repository Setup Guide for APT OPS Website

## Method 1: GitHub Desktop (EASIEST - Recommended for Beginners)

### Step 1: Download GitHub Desktop
1. Go to [desktop.github.com](https://desktop.github.com)
2. Download and install GitHub Desktop
3. Sign in with your GitHub account (or create one at [github.com](https://github.com))

### Step 2: Create Repository
1. Open GitHub Desktop
2. Click **"File"** → **"New Repository"**
3. Fill in:
   - **Name:** `apt-ops-website`
   - **Description:** `APT OPS - AI Automation for Home Service Contractors`
   - **Local Path:** Choose where you want to save it
   - ✅ Check "Initialize with README"
   - **Git Ignore:** Choose "Node"
   - Click **"Create Repository"**

### Step 3: Add Your Files
1. Open the repository folder on your computer
2. **Delete the auto-generated files** (README.md, .gitignore)
3. **Copy all files from the apt-ops-website folder I gave you** into this folder
4. In GitHub Desktop, you'll see all files appear in the "Changes" tab

### Step 4: Commit and Push
1. In GitHub Desktop:
   - **Summary:** Type "Initial commit - Complete APT OPS website"
   - Click **"Commit to main"**
   - Click **"Publish repository"**
   - ✅ Uncheck "Keep this code private" (or keep it checked if you want it private)
   - Click **"Publish Repository"**

### Step 5: Deploy to Vercel (Auto-Deploy from GitHub)
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** and choose **"Continue with GitHub"**
3. Click **"Import Project"** → **"Import Git Repository"**
4. Select **"apt-ops-website"** from your repositories
5. Click **"Deploy"**
6. **Wait 30 seconds** → Your site is LIVE! 🎉

**Vercel will auto-deploy every time you push changes to GitHub!**

---

## Method 2: Command Line (For Developers)

### Step 1: Install Git
- **Mac:** `brew install git` (or download from git-scm.com)
- **Windows:** Download from [git-scm.com](https://git-scm.com)
- **Linux:** `sudo apt install git`

### Step 2: Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon → **"New repository"**
3. Name: `apt-ops-website`
4. Description: `APT OPS - AI Automation for Home Service Contractors`
5. **Don't** initialize with README (we already have one)
6. Click **"Create repository"**

### Step 3: Push Your Code
Open Terminal/Command Prompt in the `apt-ops-website` folder:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit - Complete APT OPS website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/apt-ops-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 4: Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Link to your GitHub repo when prompted
# Vercel will auto-deploy on future pushes
```

---

## Method 3: Upload via Web Interface (No Git Required)

### Step 1: Create Repository on GitHub
1. Go to [github.com](https://github.com) → Sign in
2. Click **"+"** → **"New repository"**
3. Name: `apt-ops-website`
4. Click **"Create repository"**

### Step 2: Upload Files
1. On the repository page, click **"uploading an existing file"**
2. **Drag and drop ALL files** from the apt-ops-website folder
3. Write commit message: "Initial commit - Complete APT OPS website"
4. Click **"Commit changes"**

⚠️ **Note:** This method uploads files but doesn't preserve folder structure as well. Use GitHub Desktop for better results.

---

## 📁 What to Include in Repository

Make sure these files are in your repo:

```
apt-ops-website/
├── src/                    ← All source code
├── public/                 ← Static assets (if any)
├── .gitignore             ← Already included
├── package.json           ← Already included
├── README.md              ← Already included
├── DEPLOYMENT.md          ← Already included
├── PROJECT-SUMMARY.md     ← Already included
├── index.html             ← Already included
├── tailwind.config.js     ← Already included
├── vite.config.js         ← Already included
└── postcss.config.js      ← Already included
```

**DO NOT include:**
- `node_modules/` (git will ignore this automatically)
- `dist/` (build output - git will ignore this)
- `.env` files with secrets

---

## 🔗 Auto-Deploy Setup (Vercel + GitHub)

Once your code is on GitHub, enable auto-deploy:

### One-Time Setup:
1. Connect Vercel to your GitHub account
2. Import the `apt-ops-website` repository
3. Vercel detects it's a Vite app automatically
4. Click "Deploy"

### Every Future Update:
1. Make changes to your code locally
2. Commit: `git commit -am "Updated homepage"`
3. Push: `git push`
4. **Vercel auto-deploys in 30 seconds!** 🚀

---

## 🎯 Repository Settings (Recommended)

### Add Repository Topics
Go to your repo → Click ⚙️ → Add topics:
- `react`
- `vite`
- `tailwindcss`
- `website`
- `contractor`
- `automation`

### Enable GitHub Pages (Optional)
If you want GitHub to also host it:
1. Go to Settings → Pages
2. Source: GitHub Actions
3. Use "Static HTML" workflow
4. Site will be at: `https://YOUR_USERNAME.github.io/apt-ops-website`

### Branch Protection (Optional)
Settings → Branches → Add rule for `main`
- Require pull request reviews
- Require status checks to pass

---

## 📊 After Setup - Your Workflow

### Local Development:
```bash
# Make changes to code
npm run dev

# Test in browser at localhost:3000
```

### Deploy Changes:
```bash
# Stage changes
git add .

# Commit with message
git commit -m "Added testimonials to home page"

# Push to GitHub
git push

# Vercel auto-deploys! ✨
```

---

## 🆘 Troubleshooting

**"Permission denied (publickey)"**
→ Set up SSH keys: [docs.github.com/authentication](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

**"Repository not found"**
→ Check the remote URL: `git remote -v`
→ Update it: `git remote set-url origin https://github.com/YOUR_USERNAME/apt-ops-website.git`

**Files not uploading via web**
→ Try smaller batches (upload src/ folder separately)
→ Or use GitHub Desktop instead

**Vercel deploy failing**
→ Check build logs in Vercel dashboard
→ Make sure `package.json` is in root directory
→ Verify all dependencies are listed

---

## 🎓 Learning Resources

**GitHub Basics:**
- [GitHub Desktop Tutorial](https://docs.github.com/en/desktop)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)

**Vercel Deployment:**
- [Vercel Docs](https://vercel.com/docs)
- [Deploy React Apps](https://vercel.com/guides/deploying-react-with-vercel)

---

## ✅ Checklist

- [ ] GitHub account created
- [ ] Repository created (`apt-ops-website`)
- [ ] All files uploaded/pushed
- [ ] Vercel account created
- [ ] Repository imported to Vercel
- [ ] Site successfully deployed
- [ ] Auto-deploy enabled (push = deploy)
- [ ] Custom domain added (optional)

---

## 🎉 You're Done!

Your code is now:
- ✅ Version controlled on GitHub
- ✅ Backed up in the cloud
- ✅ Auto-deploying on every push
- ✅ Live and accessible to the world

**Your workflow is now:** Code → Commit → Push → Auto-Deploy ✨

---

**Questions?** Check the links above or refer to README.md and DEPLOYMENT.md in your project folder.
