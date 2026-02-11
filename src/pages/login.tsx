import React, { useState } from "react";
import { motion } from "framer-motion";
import { BASE_URL } from "@/Base_URL/Base_URL";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const notifyFieldsError = (error) =>
    toast.error(error, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    const notifyInvalidError = (error) =>
    toast.error(error, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const data = axios.post(`${BASE_URL}/login`,{
  //     email,
  //     password
  //   })
  //   console.log("data",data)
  //   console.log({
  //     email,
  //     password,
  //   });
  // };

   const handleSubmit = async (e: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      notifyFieldsError("🦄 Please fill all The fields!");
    } else {
      const adminData = {
        email: email,
        password: password,
      };
      setIsLoading(true);
      // console.log(adminData, "adminData");
      try {
        const response = await axios.post(`${BASE_URL}/login`, {
          email: email,
          password: password,
        });
        // console.log(response.data.data.token, "adminLogin");
        let token = response.data.data.token;
        if (response) {
          localStorage.setItem("techOutlet", token);
          navigate("/admin/Dashboard");
        }
      } catch (error) {
        // console.log(error.message);
        notifyInvalidError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div style={styles.page}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={styles.card}
      >
        <h1 style={styles.title}>Sign in</h1>
        <p style={styles.subtitle}>
          Access your FixMyPhone dashboard
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            style={styles.button}
            disabled={isLoading}
          >
            {isLoading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    <>
                      Log In <LoginIcon />
                    </>
                  )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    fontFamily: "Inter, system-ui, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    padding: "40px",
    borderRadius: "14px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  },
  title: {
    fontSize: "26px",
    fontWeight: 700,
    color: "#111827",
    marginBottom: "6px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "28px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "13px",
    fontWeight: 500,
    color: "#374151",
  },
  input: {
    padding: "12px 14px",
    fontSize: "14px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    outline: "none",
    transition: "border 0.2s ease, box-shadow 0.2s ease",
  },
  button: {
    marginTop: "10px",
    padding: "14px",
    fontSize: "15px",
    fontWeight: 600,
    color: "#ffffff",
    backgroundColor: "#2563eb",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
};

export default Login;
