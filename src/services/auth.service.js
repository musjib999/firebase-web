import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";

class AuthService {
    constructor() {}
    static register = async (email, password) => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            return user.user;
        } catch (error) {
            throw error;
        }
    }

    static login = async (email, password) => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            return user.user;
        } catch (error) {
            throw error;
        }
    }
}

export default AuthService;