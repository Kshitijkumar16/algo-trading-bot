import React from "react";
import { auth } from './firebase'

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function LoginPage() {
  const handleGoogle = async (e) => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
  };

  return (
    <div className="login-container">
      <form id="form" className="login-form">
        <h2>Login</h2>
        <button onSubmit={handleGoogle} className="login-link">
          Login via Google
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
