import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebaseConfig";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();


  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const signInWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Erro ao entrar com e-mail:", error);
    }
  };

  
  const signUpWithEmail = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Conta criada com sucesso!");
    } catch (error) {
      console.error("Erro ao criar conta:", error);
    }
  };

 
  const redirectToFacebook = () => {
    window.location.href = "https://www.facebook.com/";
  };

  const redirectToApple = () => {
    window.location.href = "https://www.apple.com/";
  };

  
  const goToHome = () => {
    navigate("/");
  };

  if (loading) return <p>Carregando...</p>;
  if (user) return <p>Bem-vindo, {user.displayName || "Usuário"}!</p>;

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="error-message">{error.message}</p>}
      
      <button className="login-button google" onClick={signInWithGoogle}>
        <FaGoogle /> Login com Google
      </button>

      <button className="login-button facebook" onClick={redirectToFacebook}>
        <FaFacebook /> Continuar com Facebook
      </button>

      <button className="login-button apple" onClick={redirectToApple}>
        <FaApple /> Continuar com Apple
      </button>

      <div className="divider">OU</div>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      
      <button className="login-button email" onClick={signInWithEmail}>
        Login
      </button>
      
      <button className="signup-button" onClick={signUpWithEmail}>
        Criar Conta
      </button>

      <button className="home-button" onClick={goToHome}>
        Voltar
      </button>
    </div>
  );
};

export default LoginPage;
