# Chatty - Real-Time Chat Application (Frontend)

**Chatty** is a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with WebSocket (Socket.IO) integration. This repository contains **only the frontend** of the application, built using **React.js**.

> ⚠️ **Note:** The backend code is available in a separate repository.  
> 👉 [Chatty Backend Repository](https://github.com/shivamprakash2909/chatty-server.git)

---

## 🌐 Live Demo

Check out the deployed frontend of Chatty here:  
👉 [Chatty Frontend Live](https://chatty-weld-two.vercel.app/)

## Features

- Modern and responsive React.js interface
- Real-time messaging via WebSocket (Socket.IO)
- Supports individual and room-based chat
- Communicates with Express.js backend for user authentication and message handling

---

## Tech Stack (Frontend)

- **React.js**
- **Axios** for API calls
- **Socket.IO Client** for real-time communication

---

## Getting Started

### Prerequisites

- Node.js
- Backend server running (see [Chatty Backend](https://github.com/shivamprakash2909/chatty-server.git))

### Environment Variables

Create a `.env` file in the root: REACT_APP_API_URL=http://localhost:5000

> Update the URL according to your backend deployment.

### Installation

```bash
git clone https://github.com/your-username/chatty-frontend.git
cd chatty-frontend
npm install
npm run dev
```
