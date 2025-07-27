// import { useState } from "react";
// import {
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   Divider,
// } from "@mui/material";

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(isLogin ? "Logging in..." : "Signing up...", formData);
//     //can we make api call here?
    
//   };





//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
//       <Paper elevation={3} className="p-6 w-full max-w-md">
//         <Typography variant="h5" className="text-center font-bold mb-2">
//           {isLogin ? "Login" : "Sign Up"}
//         </Typography>
//         <Divider className="mb-6" />

//         <form onSubmit={handleSubmit}>
//   <div className="space-y-5">
//     {!isLogin && (
//       <>
//         <div>
//           <TextField
//             label="Full Name"
//             name="name"
//             fullWidth
//             variant="outlined"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <TextField
//             label="Username"
//             name="username"
//             fullWidth
//             variant="outlined"
//             value={formData.username}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <TextField
//             label="Confirm Password"
//             name="confirmPassword"
//             type="password"
//             fullWidth
//             variant="outlined"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//           />
//         </div>
//       </>
//     )}

//     <div>
//       <TextField
//         label="Email"
//         name="email"
//         type="email"
//         fullWidth
//         variant="outlined"
//         value={formData.email}
//         onChange={handleChange}
//       />
//     </div>

//     <div>
//       <TextField
//         label="Password"
//         name="password"
//         type="password"
//         fullWidth
//         variant="outlined"
//         value={formData.password}
//         onChange={handleChange}
//       />
//     </div>

//     <div>
//       <Button
//         variant="contained"
//         color="primary"
//         fullWidth
//         type="submit"
//       >
//         {isLogin ? "Login" : "Create Account"}
//       </Button>
//     </div>
//   </div>
// </form>

//         <Typography className="mt-4 text-sm text-center">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <button
//             className="text-indigo-600 hover:underline font-medium"
//             onClick={() => setIsLogin(!isLogin)}
//           >
//             {isLogin ? "Sign up" : "Login"}
//           </button>
//         </Typography>
//       </Paper>
//     </div>
//   );
// };

// export default AuthForm;


import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


import { useNavigate } from "react-router-dom";
// import { BASE_URL } from "../utils/constants";

import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  Divider,
} from "@mui/material";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnSubmit = async () => {
    try {
      const res = await axios.post(
         "http://localhost:3000/login", // Replace with your actual backend URL
        { emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/profile");
    console.log(res.data);
    
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
         "http://localhost:3000/signup", 
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/profile");
    console.log(res.data);
    
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Paper elevation={4} sx={{ p: 4, maxWidth: 400, width: "100%" }}>
        <Typography variant="h5" align="center" fontWeight={600}>
          {isLoginForm ? "Login" : "Sign Up"}
        </Typography>
        <Divider sx={{ my: 2 }} />

        <Box display="flex" flexDirection="column" gap={2}>
          {!isLoginForm && (
            <>
              <TextField
                label="First Name"
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                label="Last Name"
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </>
          )}
          <TextField
            label="Email ID"
            type="email"
            fullWidth
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}

          <Button
            variant="contained"
            fullWidth
            onClick={isLoginForm ? handleOnSubmit : handleSignUp}
          >
            {isLoginForm ? "Login" : "Create Account"}
          </Button>
        </Box>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2, cursor: "pointer", color: "primary.main" }}
          onClick={() => setIsLoginForm((prev) => !prev)}
        >
          {isLoginForm
            ? "New user? Sign up here"
            : "Already registered? Login here"}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
