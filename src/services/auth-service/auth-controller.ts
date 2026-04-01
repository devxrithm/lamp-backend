import { Request, Response } from "express";
import admin from "../../lib/firebase";

export const signupUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, displayName } = req.body;

    if (!email || !password) {
       res.status(400).json({ error: "Email and password are required" });
       return;
    }

    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName,
    });

    res.status(201).json({ 
      message: "User created successfully", 
      user: {
        uid: userRecord.uid,
        email: userRecord.email,
        displayName: userRecord.displayName
      }
    });
  } catch (error: any) {
    console.error("Signup error:", error);
    res.status(500).json({ error: error.message || "Failed to create user" });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }

    const apiKey = process.env.FIREBASE_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: "Server configuration error: Missing Firebase API Key" });
      return;
    }

    // Call Firebase Identity Toolkit REST API to verify password and get ID Token
    const verifyPasswordUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
    
    const response = await fetch(verifyPasswordUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })
    });

    const data = await response.json();

    if (!response.ok) {
      // Firebase specific error handling
       res.status(401).json({ error: data.error?.message || "Invalid credentials" });
       return;
    }

    // data contains idToken, refreshToken, expiresIn, localId (uid)
    res.status(200).json({
      message: "Login successful",
      token: data.idToken,
      refreshToken: data.refreshToken,
      user: {
        uid: data.localId,
        email: data.email,
        displayName: data.displayName
      }
    });

  } catch (error: any) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error during login" });
  }
};
