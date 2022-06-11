import mongoose from "mongoose";
import debug from "debug";
import { config } from "../config";

const { MONGODB_URI } = config;

const randomNumber = Math.floor(Math.random() * 1000000);
console.log(`server/database`, { randomNumber });

const log = debug(`app:database`);

mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err, data) => {
    if (err) {
      console.log(`server/database`, { randomNumber });
      console.error("<::: Couldn't connect to database", err);
    } else {
      console.log(`server/database`, { randomNumber });
      log(`:::> Connected to MongoDB database. ${MONGODB_URI}`);
    }
  }
);

export default mongoose;
