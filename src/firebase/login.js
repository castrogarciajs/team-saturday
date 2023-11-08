import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../config.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const LoginUser = async (emailUser, passwordUser) => {

    try {
        const userCredential = await createUserWithEmailAndPassword(auth,emailUser,passwordUser);
        const user = userCredential.user;
        console.log(userCredential);
        return
       
      } catch (error) {
        console.log(error);
    }
};