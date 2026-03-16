Here is a **simple list of the most important Git commands** developers use. 🚀

---

# 📂 1. Initialize Git

Create a new Git repository.

```bash
git init
```

---

# 📂 2. Check Git Status

```bash
git status
```

Shows changed, staged, and untracked files.

---

# 📂 3. Add Files

Add one file:

```bash
git add filename
```

Add all files:

```bash
git add .
```

---

# 📂 4. Commit Changes

```bash
git commit -m "your message"
```

Example:

```bash
git commit -m "added navbar component"
```

---

# 📂 5. Check Branch

```bash
git branch
```

---

# 📂 6. Create New Branch

```bash
git branch branch-name
```

Example:

```bash
git branch dev
```

---

# 📂 7. Switch Branch

```bash
git checkout branch-name
```

Example:

```bash
git checkout dev
```

---

# 📂 8. Create + Switch Branch

```bash
git checkout -b branch-name
```

---

# 📂 9. Add Remote Repository

```bash
git remote add origin REPOSITORY_URL
```

Example:

```bash
git remote add origin https://github.com/username/project.git
```

---

# 📂 10. Check Remote

```bash
git remote -v
```

---

# 📂 11. Push Code to GitHub

First time push:

```bash
git push -u origin main
```

Next pushes:

```bash
git push
```

---

# 📂 12. Pull Code

```bash
git pull
```

---

# 📂 13. Clone Repository

```bash
git clone REPOSITORY_URL
```

Example:

```bash
git clone https://github.com/user/project.git
```

---

# 📂 14. Delete Branch

Delete local branch:

```bash
git branch -d branch-name
```

Force delete:

```bash
git branch -D branch-name
```

Delete remote branch:

```bash
git push origin --delete branch-name
```

---

# 📂 15. See Commit History

```bash
git log
```

Short version:

```bash
git log --oneline
```

---

# 📂 16. Configure Git Account

```bash
git config --global user.name "username"
git config --global user.email "email"
```

Check config:

```bash
git config --global --list
```

---

# ⭐ Full Basic Workflow (Most Used)

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin REPO_URL
git push -u origin main
```

---

✅ If you want, I can also give you **Top 20 Git commands every React developer must know** (used in real companies).
