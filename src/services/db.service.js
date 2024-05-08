import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../config";

class DatabaseService{
    constructor() {}
    static add = async (data) => {
        try {
            const value = await addDoc(collection(db, 'comments'), data);
            return value;
        } catch (error) {
            throw error;
        }
    }

    static get = async () => {
        try {
            const value = await getDocs(collection(db, 'comments'));
            return value.docs;
        } catch (error) {
            throw error;
        }
    }
}

export default DatabaseService;