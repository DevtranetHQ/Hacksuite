import mongoose from "mongoose";
import { config } from "../config";

const { MONGODB_URI } = config;

mongoose.connect(
    MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err, data) => {
        if (err) {
            console.error("<::: Couldn't connect to database", err);
        } else {
            console.log(`:::> Connected to MongoDB database. ${MONGODB_URI}`);
        }
    }
);

export default mongoose;
