# ⚡ QUICK START - GitHub to Live Website in 10 Minutes

## Option 1: GitHub Desktop (EASIEST) 👈 START HERE

### 1. Download GitHub Desktop
[desktop.github.com](https://desktop.github.com) → Install → Sign in

### 2. Create Repo
- File → New Repository
- Name: `apt-ops-website`
- Git Ignore: Node
- Create Repository

### 3. Add Files
- Open the repository folder on your computer
- Delete the auto-generated README.md and .gitignore
- Copy ALL files from my apt-ops-website folder into this folder
- Return to GitHub Desktop

### 4. Publish
- Summary: "Initial commit"
- Commit to main
- Publish repository
- ✅ Done - Code is on GitHub!

### 5. Deploy to Vercel
- Go to [vercel.com](https://vercel.com)
- Sign up with GitHub
- Import Project → Select apt-ops-website
- Deploy
- ✅ Done - Site is LIVE!

**Total Time: 10 minutes**

---

## Option 2: Command Line (For Devs)

```bash
# In the apt-ops-website folder:

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/apt-ops-website.git
git push -u origin main

# Then deploy:
npm install -g vercel
vercel
```

---

## 📍 What Happens Next

Every time you make changes:

**With GitHub Desktop:**
1. Make changes to code
2. GitHub Desktop shows changes
3. Add commit message
4. Click "Push origin"
5. Vercel auto-deploys in 30 seconds ✨

**With Command Line:**
```bash
git add .
git commit -m "Your change description"
git push
# Vercel auto-deploys! ✨
```

---

## 🔗 Your Links After Setup

- **GitHub Repo:** `https://github.com/YOUR_USERNAME/apt-ops-website`
- **Live Site:** `https://apt-ops-XXXXX.vercel.app` (Vercel gives you this)
- **Custom Domain:** Add in Vercel settings (optional)

---

## 📂 Files You're Uploading

All files from the apt-ops-website folder:
- ✅ src/ (all your React code)
- ✅ package.json
- ✅ All config files
- ✅ README.md
- ✅ DEPLOYMENT.md
- ✅ .gitignore

**Don't upload:**
- ❌ node_modules/ (too big, auto-ignored)
- ❌ dist/ (build output, auto-ignored)

---

## ⚠️ Common Issues

**"node_modules uploading"**
→ Make sure .gitignore file is included (it blocks node_modules)

**"Vercel build failing"**
→ Run `npm install` locally first to verify package.json is correct

**"Can't find repository"**
→ Make sure you published it (not just committed locally)

---

## 🆘 Need Help?

1. **Full Guide:** Open GITHUB-SETUP.md
2. **Deployment Help:** Open DEPLOYMENT.md
3. **Technical Docs:** Open README.md

---

**You're 10 minutes away from a live website! Let's go! 🚀**
