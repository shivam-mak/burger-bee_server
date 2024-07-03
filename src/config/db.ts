import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const db = async () => {
    try {
        const url: string = process.env.DATABASE_URL || "";
        await mongoose.connect(url);
        console.log("MongoDB Connected");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

export default db;