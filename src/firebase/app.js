import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../config.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const registerUser = async (emailUser, passwordUser) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      emailUser,
      passwordUser,
    );

    const user = userCredential.user;

    console.log(user);
  } catch (error) {
    const errorCode = error.code;

    if (errorCode === "auth/email-already-in-use") {
      alert("Este correo ya está registrado");
    }
    if (errorCode === "auth/invalid-email") {
      alert("Correo inválido");
    }
    if (errorCode === "auth/weak-password") {
      alert("Contraseña débil");
    }
  }
};
