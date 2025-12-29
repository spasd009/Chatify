# Chatify - Setup and Running Instructions

## Project Structure
```
Chatify/
├── frontend/          # React.js frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── ChatPage.js
│   │   │   └── Header.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   └── package.json
└── server/            # Node.js backend server
    ├── app.js
    └── package.json
```

## Important Configuration Changes

### Port Configuration
- **Backend Server**: Runs on port **3001** (changed from 3000 to avoid conflict with React)
- **Frontend**: Runs on port **3000** (default React port)
- **Socket.IO Connection**: Frontend connects to `http://localhost:3001`

## Installation Steps

### 1. Install Backend Dependencies
```bash
cd Chatify/server
npm install
```

### 2. Install Frontend Dependencies
```bash
cd Chatify/frontend
npm install
```

## Running the Application

### Start Backend Server (Terminal 1)
```bash
cd Chatify/server
npm start
```
Server will start on `http://localhost:3001`

### Start Frontend (Terminal 2)
```bash
cd Chatify/frontend
npm start
```
Frontend will start on `http://localhost:3000` and automatically open in your browser.

## Usage
1. Open `http://localhost:3000` in your browser
2. Enter a username and click LOGIN
3. Open another browser tab/window and login with a different username
4. Start chatting! Messages will appear in real-time

## Technologies Used
- **Frontend**: React.js, React Router, Socket.IO Client, React Icons
- **Backend**: Node.js, Express.js, Socket.IO, CORS

## Notes
- Make sure both servers are running simultaneously
- The backend server must be running before the frontend can connect
- You can test with multiple browser tabs/windows to simulate multiple users

