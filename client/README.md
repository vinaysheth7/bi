In this file only telling a feature that i add by myself which was not mention in pdf



## 🧰 Tech Stack

### 🚀 Frontend
- **Framework**: [Vite](https://vitejs.dev/) + [React](https://reactjs.org/) – Fast development and optimized build performance
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Material UI (MUI)](https://mui.com/) – Utility-first design with component-driven styling
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) – Simplified and scalable global state handling
- **Routing**: [React Router DOM](https://reactrouter.com/) – Client-side navigation with nested route support
- **Map Integration**: [Google Maps JavaScript Library](https://developers.google.com/maps/documentation/javascript/overview) – Real-time geolocation and map-based UI components



## 🔧 Backend

Built with a focus on security, scalability, and efficient data handling. Here's what's powering the backend:

- **Runtime & Framework**: [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)
- **Authentication**:
  - [JWT (JSON Web Tokens)](https://jwt.io/) – Token-based authentication mechanism
  - [bcrypt](https://www.npmjs.com/package/bcrypt) – Secure password hashing
  - [cookie-parser](https://www.npmjs.com/package/cookie-parser) – Middleware for handling cookies
- **Database & Validation**:
  - [MongoDB](https://www.mongodb.com/) – NoSQL database for flexible data storage
  - [Mongoose](https://mongoosejs.com/) – Elegant MongoDB object modeling for Node.js
  - [validator](https://www.npmjs.com/package/validator) – Data validation library

The backend ensures encrypted user credentials, efficient routing, and secure session management using JWT and cookies.

#additional feature i added expaination

User Signup Option: I created a form where users can register with their details and store them safely in the database.

🔒 Password Hashing with bcrypt: Instead of storing passwords directly, I use bcrypt to convert them into a secure, scrambled version. This keeps user data safe in case of a database breach.

🔐 JWT-Based Authentication: After login/signup, the server creates a unique token (JWT) and sends it to the browser. This helps verify users without needing sessions, making the app fast and scalable.

🍪 Cookie Management with cookie-parser: The JWT is saved in a cookie so the app can automatically recognize returning users without asking them to log in again.

🧼 Data Validation Using validator: I added checks to make sure inputs like email and password are correct before saving them—avoiding mistakes and improving security.

🗃️ User Schema with Mongoose: I designed a structured user model to control exactly how user data is stored in MongoDB.

📄 Token Generation: After users sign up or log in, a token is generated to keep them authenticated across sessions and pages.

📦 State Management with Redux Toolkit: On the frontend, I used Redux Toolkit to keep track of whether users are logged in and who they are, so I can personalize the UI.

🗺️ Modular Routers: I split Express routes based on actions—like signup, login, and user dashboard—so each part of the backend is clean, easy to manage, and scalable.



The difficulty I faced this

problem 1 
Problem: API requests from the frontend were blocked due to CORS restrictions, since the server and client ran on different origins.

Solution: I configured the Express backend with the cors middleware to allow secure cross-origin communication:



Problem2: I used Redux Toolkit to manage authentication state, but the store resets on refresh, causing the user to get logged out.

Solution2: I handled this by implementing a session restoration flow:

Created a /api/profile endpoint that returns user info if a valid token (stored in cookies) is present.

Used useEffect at the root of the app to fetch the profile on initial render.

On success, dispatched user data to the Redux store using useDispatch, so the state gets rehydrated.


How to setup 

git clone https://github.com/Mohdsaad21-6/bi.git
cd client
create a environment file on the root of the apllication and add the environment variables
do npm installl
do npm run dev


open another terminal go to server folder
cd server
create a environment file on the root of the apllication and add the envoronment variables
do npm install
do npm run dev
