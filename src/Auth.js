import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Auth = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    try {
      let userCredential;
      if (isLogin) {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      } else {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
      }
      setUser(userCredential.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 text-white h-screen">
      <h2 className="text-2xl font-bold mb-4">{isLogin ? "Login" : "Signup"}</h2>
      <form onSubmit={handleEmailAuth} className="flex flex-col gap-2">
        <input type="email" placeholder="Email" className="p-2 bg-gray-700 rounded" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="p-2 bg-gray-700 rounded" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="p-2 bg-blue-600 rounded">{isLogin ? "Login" : "Signup"}</button>
      </form>
      <button onClick={handleGoogleSignIn} className="mt-4 p-2 bg-red-600 rounded">Sign in with Google</button>
      <button onClick={() => setIsLogin(!isLogin)} className="mt-2 text-blue-400">
        {isLogin ? "Create an account" : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default Auth;
