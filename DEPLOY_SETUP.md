# Deployment Setup Guide

Auto-deployment from GitHub to EC2 via GitHub Actions.

## Architecture

```
GitHub (push to main) → GitHub Actions → SSH into EC2 → git pull + install + restart
```

- **Backend:** Express + Prisma, managed by PM2 (`fpg-us-backend`)
- **Frontend:** React + Vite, built to `dist/` and served by Nginx

## 1. Generate SSH Keypair for Deployment

On your local machine:

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/fpg-deploy-key -N ""
```

This creates:
- `~/.ssh/fpg-deploy-key` (private key — goes to GitHub)
- `~/.ssh/fpg-deploy-key.pub` (public key — goes to EC2)

## 2. Add Public Key to EC2

```bash
# Copy the public key to the server
ssh -i /Users/manish/Data/newpemfile/2024/newawsac1.pem ubuntu@44.254.252.160 \
  "echo '$(cat ~/.ssh/fpg-deploy-key.pub)' >> ~/.ssh/authorized_keys"
```

Verify it works:

```bash
ssh -i ~/.ssh/fpg-deploy-key ubuntu@44.254.252.160 "echo 'connected'"
```

## 3. Add GitHub Secrets

Go to: **GitHub repo → Settings → Secrets and variables → Actions → New repository secret**

Add these 3 secrets:

| Secret Name    | Value                                              |
| -------------- | -------------------------------------------------- |
| `EC2_HOST`     | `44.254.252.160`                                   |
| `EC2_USER`     | `ubuntu`                                           |
| `EC2_SSH_KEY`  | Entire contents of `~/.ssh/fpg-deploy-key` (private key). Copy with: `cat ~/.ssh/fpg-deploy-key \| pbcopy` |

## 4. Initial Server Setup (One-Time)

SSH into the server:

```bash
ssh -i /Users/manish/Data/newpemfile/2024/newawsac1.pem ubuntu@44.254.252.160
```

### Install Node.js (if not already installed)

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Install PM2 (if not already installed)

```bash
sudo npm install -g pm2
```

### Clone the repo and set up

```bash
cd /var/www/html/thefutureperfectglobal-us

# If not already cloned:
git clone https://github.com/mksingh-hvantage/fpg-us.git .

# Backend setup
cd backend
cp .env.example .env
# Edit .env with real values:
nano .env

npm install
npx prisma generate
npx prisma db push
pm2 start "npx tsx src/index.ts" --name fpg-us-backend
pm2 save

# Frontend setup
cd ../frontend
cp .env.example .env
# Edit .env with real values:
nano .env

npm install
npm run build
```

### Make sure git pull works without prompts

On the server, set the remote to use the deploy key or HTTPS token:

```bash
cd /var/www/html/thefutureperfectglobal-us
git remote set-url origin https://github.com/mksingh-hvantage/fpg-us.git
```

If the repo is private, use a PAT:

```bash
git remote set-url origin https://<YOUR_PAT>@github.com/mksingh-hvantage/fpg-us.git
```

## 5. EC2 Security Group

Ensure port **22 (SSH)** is open in your EC2 security group. GitHub Actions IPs change frequently, so allow SSH from `0.0.0.0/0` or use [GitHub's IP ranges](https://api.github.com/meta).

## 6. Managing .env on the Server

The `.env` files are gitignored and never deployed from GitHub. They live only on the server.

- **Backend:** `/var/www/html/thefutureperfectglobal-us/backend/.env`
- **Frontend:** `/var/www/html/thefutureperfectglobal-us/frontend/.env`

If you need to update env vars, SSH in and edit them directly:

```bash
nano /var/www/html/thefutureperfectglobal-us/backend/.env
pm2 restart fpg-us-backend

nano /var/www/html/thefutureperfectglobal-us/frontend/.env
cd /var/www/html/thefutureperfectglobal-us/frontend && npm run build
```

## 7. Verify Deployment

1. Push a small change to `main`
2. Go to **GitHub repo → Actions** tab — you should see the workflow running
3. Check the green checkmark when it completes
4. Visit your site to confirm the change is live

## Troubleshooting

### "Permission denied (publickey)"
- Verify the private key in `EC2_SSH_KEY` secret matches the public key in `~/.ssh/authorized_keys` on EC2
- Make sure `authorized_keys` permissions are correct: `chmod 600 ~/.ssh/authorized_keys && chmod 700 ~/.ssh`

### "git pull fails" or "not a git repository"
- SSH into EC2 and verify `/var/www/html/thefutureperfectglobal-us` is a git repo: `git -C /var/www/html/thefutureperfectglobal-us status`
- If not, clone it first (see Initial Server Setup above)
- If you get merge conflicts: `git stash && git pull origin main`

### "pm2: command not found"
- Install globally: `sudo npm install -g pm2`
- Or use full path: `/usr/local/bin/pm2`

### "npm run build fails" (frontend)
- SSH in and check: `cd /var/www/html/thefutureperfectglobal-us/frontend && npm run build`
- Likely a TypeScript error — fix locally, push again

### "App not restarting"
- Check PM2 status: `pm2 status`
- Check logs: `pm2 logs fpg-us-backend --lines 50`
- If process doesn't exist: `cd /var/www/html/thefutureperfectglobal-us/backend && pm2 start "npx tsx src/index.ts" --name fpg-us-backend`

### Workflow runs but site not updated
- The frontend build output (`dist/`) must be where Nginx is configured to serve from
- Check Nginx config: `cat /etc/nginx/sites-enabled/default`
- Nginx may need reload after frontend build if config changed: `sudo systemctl reload nginx`
