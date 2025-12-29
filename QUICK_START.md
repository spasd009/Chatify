# Quick Start Guide - Chatify

## Current Directory Structure
You are currently in: `D:\New folder\chat application\Chatify\Chatify`

From here, you have:
- `server/` - Backend server
- `frontend/` - React frontend

## Step-by-Step Setup

### Step 1: Install Backend Dependencies
```powershell
cd server
npm install
```

### Step 2: Install Frontend Dependencies
```powershell
cd ..\frontend
npm install
```

## Running the Application

### Terminal 1 - Start Backend Server
```powershell
cd "D:\New folder\chat application\Chatify\Chatify\server"
npm start
```
**Expected output**: `Server listening on port 3001`

### Terminal 2 - Start Frontend
```powershell
cd "D:\New folder\chat application\Chatify\Chatify\frontend"
npm start
```
**Expected output**: Browser opens at `http://localhost:3000`

## Quick Commands (From Chatify\Chatify directory)

### Navigate to Server
```powershell
cd server
```

### Navigate to Frontend
```powershell
cd frontend
```

### Navigate Back to Root
```powershell
cd ..
```

## Troubleshooting

### If you get "Cannot find path" error:
- Make sure you're in: `D:\New folder\chat application\Chatify\Chatify`
- Use `cd server` (not `cd Chatify/server`)
- Use `cd frontend` (not `cd Chatify/frontend`)

### If npm install fails:
- Make sure Node.js is installed: `node --version`
- Make sure npm is installed: `npm --version`

### If port is already in use:
- Backend uses port 3001
- Frontend uses port 3000
- Close any applications using these ports

