import mongoose from "mongoose";
import debug from "debug";
import { config } from "../config";

const { MONGODB_URI } = config;

// const log = debug(`app:database`);

// mongoose.connect(
//   MONGODB_URI,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   },
//   (err, data) => {
//     if (err) {
//       console.error("<::: Couldn't connect to database", err);
//     } else {
//       log(`:::> Connected to MongoDB database. ${MONGODB_URI}`);
//     }
//   }
// );

export default mongoose;
