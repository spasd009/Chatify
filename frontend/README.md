# Chatify 💬

Chatify is a real-time chat application built using React.js for the frontend and Node.js, Express.js with Socket.IO for the backend server, allowing users to engage in instant messaging.

![Chatify](https://img.shields.io/badge/React-18.3.1-blue) ![Node.js](https://img.shields.io/badge/Node.js-Express-green) ![Socket.IO](https://img.shields.io/badge/Socket.IO-4.7.5-orange)

## ✨ Features

- **Real-time Messaging:** Instantly send and receive messages using WebSocket technology
- **Multi-User Chat:** Multiple users can login and chat simultaneously
- **User Identification:** Each message displays the sender's username
- **Responsive Design:** Works seamlessly across desktop and mobile devices
- **Modern UI:** Clean and intuitive interface with smooth animations
- **Auto-scroll:** Chat automatically scrolls to show the latest messages

## 🛠️ Technologies Used

### Frontend
- **React.js** (v18.3.1) - UI library
- **React Router DOM** (v6.24.0) - Client-side routing
- **Socket.IO Client** (v4.7.5) - Real-time communication
- **React Icons** (v5.2.1) - Icon library
- **CSS3** - Styling and responsive design

### Backend
- **Node.js** - Runtime environment
- **Express.js** (v4.19.2) - Web framework
- **Socket.IO** (v4.7.5) - Real-time bidirectional communication
- **CORS** (v2.8.5) - Cross-origin resource sharing
- **Nodemon** (v3.1.4) - Development server auto-reload

## 📁 Project Structure

```
Chatify/
├── frontend/                 # React frontend application
│   ├── public/              # Static files
|   |   ├──favicon.ico
│   │   ├── index.html
│   │   ├── logo.png
│   │   └── manifest.json
|   |   ├──robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js     # Login component
│   │   │   ├── ChatPage.js  # Main chat interface
│   │   │   └── Header.js    # Header component
│   │   ├── App.js           # Main app component
│   │   ├── App.css          # Application styles
│   │   ├── index.js         # Entry point
│   │   └── index.css        # Global styles
|   |   ├──App.test.js
|   |   ├──logo.svg
|   |   ├──reportWebVitals.js
|   |   ├──setupTests.js
|   |   ├──package-lock.js
│   └── package.json
|   ├──README.md
├── server/                  # Node.js backend server
│   ├── app.js              # Server entry point
│   └── package.json
├── package-lock.json
└── QUICK_START.md
├──SETUP.mds
```

## 🚀 Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn**

### Step 1: Clone the Repository

```bash
git clone https://github.com/spasd009/Chatify.git
cd Chatify/Chatify
```

### Step 2: Install Backend Dependencies

```bash
cd server
npm install
```

### Step 3: Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

## 🎯 Running the Application

**Important:** You need to run both the backend and frontend servers simultaneously.

### Terminal 1 - Start Backend Server

```bash
cd server
npm start
```

**Expected Output:**
```
Server listening on port 3001
```

The backend server will run on **http://localhost:3001**

### Terminal 2 - Start Frontend

```bash
cd frontend
npm start
```

**Expected Output:**
```
Compiled successfully!
You can now view frontend in the browser.
  Local:            http://localhost:3000
```

The frontend will automatically open in your browser at **http://localhost:3000**

## 📖 Usage

1. **Login:**
   - Open `http://localhost:3000` in your browser
   - Enter a unique username in the login form
   - Click the **LOGIN** button

2. **Chatting:**
   - Once logged in, you'll see the chat interface
   - Type your message in the input field at the bottom
   - Click the send button (✈️) or press Enter to send
   - Messages appear in real-time for all connected users

3. **Multi-User Testing:**
   - Open multiple browser tabs/windows
   - Login with different usernames in each tab
   - Send messages and see them appear in all tabs instantly

4. **Logout:**
   - Click the **LOGOUT** button in the top-right corner
   - You'll be redirected back to the login page

## 🔧 Configuration

### Port Configuration

- **Frontend:** Runs on port `3000` (default React port)
- **Backend:** Runs on port `3001` (to avoid conflict with React)

To change the backend port, modify `server/app.js`:
```javascript
const PORT = process.env.PORT || 3001; // Change 3001 to your desired port
```

And update `frontend/src/components/ChatPage.js`:
```javascript
const newSocket = SocketIOClient('http://localhost:3001'); // Update port here
```

## 🐛 Troubleshooting

### Port Already in Use

If you get a "port already in use" error:

**For Backend (port 3001):**
```bash
# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3001 | xargs kill -9
```

**For Frontend (port 3000):**
- The React dev server will automatically ask to use a different port
- Or manually change it: `PORT=3002 npm start`

### Socket Connection Failed

- Ensure the backend server is running before starting the frontend
- Check that the backend is running on port 3001
- Verify the Socket.IO connection URL in `ChatPage.js` matches your backend port

### Dependencies Installation Issues

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Module Not Found Errors

- Make sure you've run `npm install` in both `frontend` and `server` directories
- Verify all dependencies are listed in `package.json`

## 🎨 UI Preview

**Login Page**
- Clean login form with username input
- Chatify logo and branding

**Chat Page**
- Real-time message display
- Different styling for your messages vs. others
- Fixed message input at the bottom
- Auto-scrolling to latest messages
- Logout button in header

## 🔐 Security Notes

- This is a development application
- For production use, consider:
  - Adding authentication/authorization
  - Implementing message persistence
  - Adding input validation and sanitization
  - Using environment variables for sensitive data
  - Implementing rate limiting

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Shubham (spasd009)**

- GitHub: [@spasd009](https://github.com/spasd009)


## 🙏 Acknowledgments

- Socket.IO for real-time communication capabilities
- React team for the amazing framework
- All contributors who help improve this project

---

**Happy Chatting! 💬✨**
